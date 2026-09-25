/* Python roda em um Web Worker para manter a interface responsiva. */
const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/";
let pyodide;
let bootPromise;
let runnerSource;
let chain = Promise.resolve();

function progress(message) {
  self.postMessage({ type: "progress", message });
}

async function boot() {
  if (pyodide && runnerSource) return;
  if (bootPromise) return bootPromise;
  bootPromise = (async () => {
    progress("Carregando Python no navegador…");
    importScripts(PYODIDE_URL + "pyodide.js");
    pyodide = await loadPyodide({ indexURL: PYODIDE_URL });
    progress("Carregando NumPy, pandas e scikit-learn…");
    await pyodide.loadPackage(["numpy", "pandas", "scikit-learn"]);
    pyodide.FS.mkdirTree("dados");
    progress("Copiando as duas bases para o ambiente Python…");
    for (const filename of ["treino.csv", "teste.csv"]) {
      const response = await fetch("./dados/" + filename);
      if (!response.ok) throw new Error("Não foi possível abrir dados/" + filename + ".");
      pyodide.FS.writeFile("dados/" + filename, new Uint8Array(await response.arrayBuffer()));
    }
    const runnerResponse = await fetch("./runner.py");
    if (!runnerResponse.ok) throw new Error("Não foi possível carregar o executor Python.");
    runnerSource = await runnerResponse.text();
    progress("Python pronto. Execute as células em ordem.");
  })().catch((error) => {
    pyodide = undefined;
    bootPromise = undefined;
    throw error;
  });
  return bootPromise;
}

async function runCode(code) {
  await boot();
  pyodide.globals.set("student_code", code);
  const raw = await pyodide.runPythonAsync(runnerSource);
  return JSON.parse(raw);
}

async function handle(message) {
  const { id, type } = message;
  try {
    if (type === "init") {
      await boot();
      self.postMessage({ id, ok: true });
    } else if (type === "run") {
      progress("Executando célula…");
      const result = await runCode(message.code);
      self.postMessage({ id, ok: true, result });
      progress("Python pronto. Execute a próxima célula ou baixe suas previsões.");
    } else if (type === "file") {
      await boot();
      let data;
      try {
        data = pyodide.FS.readFile("previsoes.csv");
      } catch {
        throw new Error("Execute a célula final para criar previsoes.csv.");
      }
      self.postMessage({ id, ok: true, data }, [data.buffer]);
    } else {
      throw new Error("Pedido desconhecido ao ambiente Python.");
    }
  } catch (error) {
    self.postMessage({ id, ok: false, error: String(error && error.message || error) });
    progress("O ambiente encontrou um problema. Você pode tentar novamente.");
  }
}

self.onmessage = (event) => {
  chain = chain.then(() => handle(event.data)).catch((error) => {
    self.postMessage({ id: event.data.id, ok: false, error: String(error) });
  });
};
