const $ = (selector) => document.querySelector(selector);
const DRAFT_KEY = "fgv-desafio-modelagem-caderno-v1";
const ALIAS_KEY = "fgv-desafio-modelagem-alias-v1";
const worker = new Worker("./worker.js");
const pending = new Map();
let requestNumber = 0;
let notebook;
let config = { apiBaseUrl: "", rankingRefreshSeconds: 30 };
let validPredictions = null;
let expectedIdsPromise;
let executionCounter = 0;
const cellResults = {};

function runtimeStatus(message, kind = "") {
  const element = $("#runtime-status");
  element.textContent = message;
  element.className = "runtime-status " + kind;
}

function fileStatus(message, kind = "") {
  const element = $("#file-status");
  element.textContent = message;
  element.className = kind;
}

function workerRequest(type, payload = {}) {
  return new Promise((resolve, reject) => {
    const id = ++requestNumber;
    pending.set(id, { resolve, reject });
    worker.postMessage({ id, type, ...payload });
  });
}

worker.addEventListener("message", (event) => {
  const message = event.data;
  if (message.type === "progress") {
    runtimeStatus(message.message, message.message.includes("pronto") ? "ready" : "");
    return;
  }
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  if (message.ok) request.resolve(message);
  else request.reject(new Error(message.error || "Falha no ambiente Python."));
});

worker.addEventListener("error", (event) => {
  for (const request of pending.values()) request.reject(new Error(event.message || "O ambiente Python parou."));
  pending.clear();
  runtimeStatus("O ambiente Python parou. Recarregue a página para tentar novamente.", "error");
});

function sourceOf(cell) {
  return Array.isArray(cell.source) ? cell.source.join("") : String(cell.source || "");
}

function loadDraft() {
  try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}"); }
  catch { return {}; }
}

function saveDraft() {
  const code = {};
  document.querySelectorAll(".code-input").forEach((input) => { code[input.dataset.cellIndex] = input.value; });
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(code)); }
  catch { runtimeStatus("O navegador não conseguiu salvar o rascunho. Baixe seu caderno para guardar o código.", "error"); }
}

function renderNotebook(data) {
  const container = $("#notebook");
  const saved = loadDraft();
  container.replaceChildren();
  let number = 0;
  data.cells.forEach((cell, index) => {
    if (cell.cell_type !== "code") return;
    number += 1;
    const section = document.createElement("section");
    section.className = "code-cell";
    const heading = document.createElement("div");
    heading.className = "code-header";
    const title = document.createElement("span");
    title.textContent = cell.metadata?.title || "CÉLULA " + String(number).padStart(2, "0");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "run-button";
    button.textContent = "Executar ↗";
    const description = document.createElement("p");
    description.className = "cell-description";
    description.textContent = cell.metadata?.description || "";
    const textarea = document.createElement("textarea");
    textarea.className = "code-input";
    textarea.dataset.cellIndex = String(index);
    textarea.setAttribute("aria-label", title.textContent + ": código Python");
    textarea.spellcheck = false;
    textarea.value = saved[index] ?? sourceOf(cell);
    textarea.addEventListener("input", saveDraft);
    const output = document.createElement("pre");
    output.className = "cell-output";
    output.setAttribute("aria-live", "polite");
    button.addEventListener("click", () => runCell(index, textarea, output));
    heading.append(title, button);
    section.append(heading, description, textarea, output);
    container.append(section);
  });
}

async function preparePython() {
  const button = $("#prepare-button");
  button.disabled = true;
  try {
    await workerRequest("init");
    button.textContent = "Python pronto ✓";
    runtimeStatus("Python pronto. Execute as células em ordem.", "ready");
  } catch (error) {
    button.disabled = false;
    runtimeStatus(error.message, "error");
    throw error;
  }
}

async function runCell(index, input, output) {
  const buttons = document.querySelectorAll(".run-button");
  buttons.forEach((button) => { button.disabled = true; });
  output.textContent = "Executando…";
  output.classList.remove("error");
  try {
    const response = await workerRequest("run", { code: input.value });
    const result = response.result;
    const parts = [result.stdout, result.stderr, result.result, result.error].filter(Boolean);
    output.textContent = parts.join("\n") || "Célula executada sem saída.";
    if (result.error) output.classList.add("error");
    cellResults[index] = { ...result, execution_count: ++executionCounter };
    saveDraft();
  } catch (error) {
    output.textContent = error.message;
    output.classList.add("error");
    runtimeStatus(error.message, "error");
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function notebookOutputs(result) {
  if (!result) return [];
  const outputs = [];
  if (result.stdout) outputs.push({ output_type: "stream", name: "stdout", text: result.stdout });
  if (result.stderr || result.error) outputs.push({ output_type: "stream", name: "stderr", text: (result.stderr || "") + (result.error || "") });
  if (result.result) outputs.push({
    output_type: "execute_result",
    execution_count: result.execution_count,
    data: { "text/plain": result.result },
    metadata: {},
  });
  return outputs;
}

function exportNotebook() {
  if (!notebook) return;
  saveDraft();
  const saved = loadDraft();
  const copy = structuredClone(notebook);
  copy.metadata.fgv_desafio = {
    ...copy.metadata.fgv_desafio,
    nome_no_ranking: $("#student-alias").value.trim(),
    exportado_em: new Date().toISOString(),
  };
  copy.cells.forEach((cell, index) => {
    if (cell.cell_type !== "code") return;
    cell.source = [saved[index] ?? sourceOf(cell)];
    cell.execution_count = cellResults[index]?.execution_count || null;
    cell.outputs = notebookOutputs(cellResults[index]);
  });
  downloadBlob(new Blob([JSON.stringify(copy, null, 2)], { type: "application/x-ipynb+json" }), "desafio-modelagem.ipynb");
}

async function expectedIds() {
  if (!expectedIdsPromise) {
    expectedIdsPromise = fetch("./dados/teste.csv").then(async (response) => {
      if (!response.ok) throw new Error("Não foi possível carregar os IDs de teste.");
      const lines = (await response.text()).trimEnd().split(/\r?\n/);
      return new Set(lines.slice(1).map((line) => line.slice(0, line.indexOf(","))));
    }).catch((error) => {
      expectedIdsPromise = undefined;
      throw error;
    });
  }
  return expectedIdsPromise;
}

async function validatePredictions(text) {
  const lines = text.replace(/^\uFEFF/, "").trimEnd().split(/\r?\n/);
  if (lines[0]?.trim() !== "id,previsao") throw new Error("O cabeçalho deve ser exatamente id,previsao.");
  const ids = await expectedIds();
  if (lines.length - 1 !== ids.size) throw new Error("O arquivo deve ter " + ids.size + " previsões; encontrei " + (lines.length - 1) + ".");
  const seen = new Set();
  const predictions = [];
  for (let index = 1; index < lines.length; index += 1) {
    const parts = lines[index].split(",");
    if (parts.length !== 2) throw new Error("A linha " + (index + 1) + " deve ter duas colunas separadas por vírgula.");
    const id = parts[0].trim();
    const value = parts[1].trim();
    if (!/^\d+$/.test(id) || !ids.has(id)) throw new Error("ID inválido na linha " + (index + 1) + ".");
    if (seen.has(id)) throw new Error("ID repetido na linha " + (index + 1) + ".");
    if (value !== "0" && value !== "1") throw new Error("A previsão da linha " + (index + 1) + " deve ser 0 ou 1.");
    seen.add(id);
    predictions.push({ id: Number(id), previsao: Number(value) });
  }
  return predictions;
}

async function checkFile(text) {
  validPredictions = null;
  $("#submit-button").disabled = true;
  fileStatus("Conferindo IDs e formato…");
  try {
    validPredictions = await validatePredictions(text);
    fileStatus("Arquivo válido: 20.000 IDs únicos e previsões binárias. A acurácia só pode ser calculada pelo corretor.", "success");
    $("#submit-button").disabled = !config.apiBaseUrl;
  } catch (error) {
    fileStatus(error.message, "error");
  }
}

async function downloadPredictions() {
  try {
    const response = await workerRequest("file");
    const bytes = response.data;
    const text = new TextDecoder().decode(bytes);
    await checkFile(text);
    if (!validPredictions) return;
    downloadBlob(new Blob([bytes], { type: "text/csv;charset=utf-8" }), "previsoes.csv");
  } catch (error) {
    fileStatus(error.message, "error");
  }
}

function rankingRow(position, entry) {
  const row = document.createElement("tr");
  const values = [
    String(position).padStart(2, "0"),
    String(entry.nome || ""),
    Number(entry.acuraciaPublica).toLocaleString("pt-BR", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    String(entry.envios ?? 1),
  ];
  values.forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.append(cell);
  });
  return row;
}

async function refreshRanking() {
  if (!config.apiBaseUrl) return;
  try {
    const response = await fetch(config.apiBaseUrl + "/ranking", { cache: "no-store" });
    if (!response.ok) throw new Error("Ranking indisponível.");
    const data = await response.json();
    if (!Array.isArray(data.participantes)) throw new Error("Resposta inválida do ranking.");
    const body = $("#ranking-body");
    body.replaceChildren();
    if (data.participantes.length) {
      data.participantes.forEach((entry, index) => body.append(rankingRow(index + 1, entry)));
    } else {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 4;
      cell.className = "ranking-empty";
      cell.textContent = "Ainda não há submissões válidas.";
      row.append(cell);
      body.append(row);
    }
    $("#ranking-state").classList.add("active");
    $("#ranking-state").lastChild.textContent = " CORRETOR ATIVO";
    $("#ranking-updated").textContent = "Atualizado em " + new Date(data.atualizadoEm || Date.now()).toLocaleString("pt-BR") + ". A nota privada permanece oculta.";
  } catch {
    $("#ranking-state").classList.remove("active");
    $("#ranking-state").lastChild.textContent = " CORRETOR INDISPONÍVEL";
  }
}

async function submitPredictions() {
  if (!config.apiBaseUrl || !validPredictions) return;
  const nome = $("#student-alias").value.trim();
  const codigo = $("#student-code").value.trim();
  if (!nome || !codigo) {
    fileStatus("Preencha o nome no ranking e o código individual antes do envio.", "error");
    return;
  }
  const button = $("#submit-button");
  button.disabled = true;
  fileStatus("Enviando previsões para o corretor…");
  try {
    const response = await fetch(config.apiBaseUrl + "/submissoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, codigo, previsoes: validPredictions }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.erro || "O corretor recusou o envio.");
    fileStatus("Envio registrado. Acurácia pública: " + Number(result.acuraciaPublica).toLocaleString("pt-BR", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ".", "success");
    $("#student-code").value = "";
    await refreshRanking();
  } catch (error) {
    fileStatus(error.message, "error");
  } finally {
    button.disabled = false;
  }
}

async function initialize() {
  try {
    const response = await fetch("./caderno.ipynb");
    if (!response.ok) throw new Error("Não foi possível carregar o caderno.");
    notebook = await response.json();
    renderNotebook(notebook);
  } catch (error) {
    $("#notebook").textContent = error.message;
  }
  try {
    const response = await fetch("./config.json", { cache: "no-store" });
    if (response.ok) config = { ...config, ...await response.json() };
    config.apiBaseUrl = String(config.apiBaseUrl || "").replace(/\/+$/, "");
    if (config.apiBaseUrl) {
      $("#submission-note").textContent = "O corretor está configurado. Confirme o CSV e informe seu código individual para enviar.";
      await refreshRanking();
      setInterval(refreshRanking, Math.max(15, Number(config.rankingRefreshSeconds) || 30) * 1000);
    }
  } catch {
    $("#submission-note").textContent = "O envio online ainda não está disponível. Você já pode preparar e validar o CSV.";
  }
  try { $("#student-alias").value = localStorage.getItem(ALIAS_KEY) || ""; } catch {}
}

$("#prepare-button").addEventListener("click", () => preparePython().catch(() => {}));
$("#export-notebook").addEventListener("click", exportNotebook);
$("#download-predictions").addEventListener("click", downloadPredictions);
$("#prediction-file").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (file) await checkFile(await file.text());
});
$("#student-alias").addEventListener("input", (event) => {
  try { localStorage.setItem(ALIAS_KEY, event.target.value); } catch {}
});
$("#submit-button").addEventListener("click", submitPredictions);
initialize();
