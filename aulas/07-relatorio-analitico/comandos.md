# Comandos da Aula 7 — Relatório analítico de redes sociais

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `07-relatorio-analitico.ipynb` explica cada comando em contexto.

Esta aula não introduz comando novo de coleta ou de análise: ela reaproveita o que já foi visto.

- Para `uv venv`/`uv pip install -r requirements.txt`, confere na Aula 4.
- Para leitura do CSV, remoção de duplicatas, cálculo da taxa de engajamento e o pipeline `dropna` → `str.split` → `explode` → `groupby().agg()` que monta a tabela-resumo por hashtag, confere na Aula 5, que tem mais desse comando.
- Para `plt.subplots()`, `ax.bar()`, título/rótulos/fonte e `fig.tight_layout()`, confere na Aula 6, que tem mais desse comando.

## Python — salvar uma figura em arquivo

| Trecho | Efeito |
|---|---|
| `plt.savefig(caminho, dpi=120, bbox_inches="tight")` | Salva a figura atual como arquivo de imagem, antes de exibi-la na tela. `dpi` controla a resolução; `bbox_inches="tight"` corta espaço em branco sobrando nas bordas. |

**ATENÇÃO:** `plt.savefig()` deve ser chamado antes de `plt.show()`. Depois de `plt.show()`, o matplotlib limpa a figura da memória, e o arquivo salvo pode sair em branco.

### Snippet — gerar o gráfico e salvar a figura para anexar no relatório

```python
fig, ax = plt.subplots(figsize=(9, 5))
ax.bar(top5["hashtags"], top5["engajamento_medio"] * 100, color="#3b6ea5")
ax.set_title("Engajamento médio por hashtag (top 5)")
ax.set_xlabel("Hashtag")
ax.set_ylabel("Engajamento médio (%)")
fig.tight_layout()
plt.savefig("dados/grafico_top5_hashtags.png", dpi=120, bbox_inches="tight")
plt.show()
```

## Estrutura de relatório (não é comando de código)

A aula ensina uma estrutura de texto, não um comando novo de Python. Um relatório analítico segue esta ordem: pergunta, dados (fonte, período, limites), método (o que foi calculado e como), achados (com evidência: tabelas e gráficos), limitações, recomendações. Veja o modelo em branco em `exercicios/RELATORIO-modelo.md` e o exemplo preenchido em `exemplos/relatorio-exemplo.md`.
