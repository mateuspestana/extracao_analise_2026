# Comandos da Aula 6 — Indicadores, visualização e storytelling

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `06-visualizacao-storytelling.ipynb` explica cada comando em contexto.

Para `uv venv`/`uv pip install -r requirements.txt`, confere na Aula 4. Para leitura do CSV, remoção de duplicatas, cálculo da taxa de engajamento e o padrão `dropna` → `str.split` → `explode` → `groupby().agg()` que monta a tabela-resumo por hashtag, confere na Aula 5, que tem mais desse comando (a Aula 6 só repete o mesmo pipeline, de forma resumida, antes de visualizar).

## Python — criar um gráfico com matplotlib

| Trecho | Efeito |
|---|---|
| `import matplotlib.pyplot as plt` | Importa o matplotlib, biblioteca de gráficos, com o apelido `plt`. |
| `fig, ax = plt.subplots(figsize=(largura, altura))` | Cria uma figura e um conjunto de eixos, com tamanho definido. |
| `ax.set_title("texto")` | Define o título do gráfico. Deve dizer o que o gráfico mostra. |
| `ax.set_xlabel("texto")` | Define o rótulo do eixo horizontal. |
| `ax.set_ylabel("texto")` | Define o rótulo do eixo vertical, com a unidade da medida. |
| `ax.tick_params(axis="x", rotation=45)` | Gira os rótulos do eixo indicado, para não sobrepor. |
| `fig.text(x, y, "texto", fontsize=8, color="gray")` | Escreve um texto solto na figura, fora dos eixos; usado para registrar a fonte dos dados. |
| `fig.tight_layout()` | Ajusta os espaçamentos da figura para nada ficar cortado. |
| `plt.show()` | Exibe o gráfico montado na tela. |

## Python — tipos de gráfico

| Trecho | Efeito |
|---|---|
| `ax.bar(categorias, valores, color="#códigohex")` | Desenha um gráfico de barras, uma barra por categoria. |
| `ax.plot(x, y, marker="o", color="#códigohex")` | Desenha um gráfico de linhas; `marker="o"` marca cada ponto de dado. |
| `ax.scatter(x, y, alpha=0.6, color="#códigohex")` | Desenha um gráfico de dispersão; `alpha` controla a transparência dos pontos. |
| `ax.set_xscale("log")` | Muda a escala do eixo horizontal para logarítmica; ajuda quando os valores variam muito de tamanho. |

### Snippet — gráfico de barras com título, rótulos e fonte

```python
fig, ax = plt.subplots(figsize=(9, 5))

ax.bar(top10["hashtags"], top10["engajamento_medio"] * 100, color="#3b6ea5")

ax.set_title("Engajamento médio por hashtag (top 10)")
ax.set_xlabel("Hashtag")
ax.set_ylabel("Engajamento médio (%)")
ax.tick_params(axis="x", rotation=45)
fig.text(0.01, -0.02, "Fonte: exportação real TikTok via Zeeschuimer, dados/exportacao.csv", fontsize=8, color="gray")

fig.tight_layout()
plt.show()
```

Este padrão (título + rótulos com unidade + fonte dos dados) se repete na Aula 7, que reaproveita o mesmo gráfico de barras para o relatório analítico.

## Python — datas

| Trecho | Efeito |
|---|---|
| `pd.to_datetime(df["coluna"])` | Converte uma coluna de texto para o tipo de data/hora do Pandas. |
| `.dt.date` | Extrai só a data (sem hora) de uma coluna de data/hora. |
| `df.groupby("coluna_de_data")["outra_coluna"].mean()` | Agrupa por data e calcula a média de outra coluna, uma forma mais curta de `groupby().agg()` quando há só uma agregação. |
