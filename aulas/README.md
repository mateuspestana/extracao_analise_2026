# Materiais das aulas

Cada pasta corresponde a uma aula do curso. O notebook principal é a aula completa: abra-o primeiro, siga as instruções e faça o exercício indicado ao final. Antes de cada encontro, atualize este repositório:

```cmd
git pull
```

No Mac ou Linux, use o mesmo comando no Terminal.

As atividades entregues devem ser copiadas e adaptadas no repositório privado de cada estudante. Não faça entregas diretamente neste repositório de materiais.

## Organização

- `01-dados-terminal-projetos/`: arquivos, formatos e navegação no terminal.
- `02-vscode-python/`: ambiente Python com `uv` e leitura de CSV.
- `03-git-github-repositorio/`: versão, sincronização e organização profissional.
- `04-coleta-redes/`: coleta em redes sociais com o Zeeschuimer.
- `05-metricas-exploracao/`: métricas de rede social, exploração e agrupamento por hashtag com Pandas.
- `06-visualizacao-storytelling/`: indicadores, gráficos de barras/linhas/dispersão e boas práticas de visualização com Matplotlib.
- `07-relatorio-analitico/`: estrutura de relatório analítico, decisões metodológicas e revisão por pares.
- `08-html-requests-beautifulsoup/`: HTML, requisições com `requests` e extração com BeautifulSoup.
- `09-playwright-paginas-dinamicas/`: Playwright sync no terminal, Ground News (More stories + detalhe de cada story).
- `10-limpeza-normalizacao-pipeline/`: limpeza, normalização, validação e pipeline reexecutável de scraping.
- `11-regressao-scikit-learn/`: aprendizado supervisionado e regressão com scikit-learn; features, alvo, vazamento, `train_test_split`, `LinearRegression` e árvore, MAE/R² e baseline.
- `12-classificacao/`: classificação com scikit-learn; o rótulo como decisão, `LogisticRegression`, matriz de confusão, precisão/recall/F1, threshold e árvore.
- `13-segmentacao-clusterizacao/`: aprendizado não-supervisionado; `StandardScaler`, `KMeans`, escolha de `k` (cotovelo e silhueta), perfil e interpretação de clusters. Inclui o Projeto 3 (case de ML).
- `14-api-e-persistencia/`: consumo de API pública (REST, JSON), API própria com FastAPI, e camada de dados com SQLite, DuckDB e Parquet.

## Convenção para ambientes Python

Nos projetos introdutórios do curso, `uv` cria o ambiente virtual com `uv venv .venv` e executa scripts com `uv run`. Quando houver dependências externas, elas serão declaradas em `requirements.txt` e instaladas com `uv pip install -r requirements.txt`; não criamos esse arquivo vazio. Não usamos `uv add`, `uv sync`, `pyproject.toml` nem `uv.lock` neste fluxo. Consulte o [guia de `uv` e requirements](../tutoriais/uv-requirements.md) quando um projeto precisar de uma biblioteca externa.

## Primeira vez nesta máquina?

- [Instalar o `uv`](../tutoriais/instalar-uv.md)
- [Instalar o Git](../tutoriais/instalar-git.md)
- [Troquei de máquina: recomeçando do zero](../tutoriais/MUDEI_DE_PC.md), para quando o computador (inclusive os do laboratório) volta zerado.
- [Quando o `uv` não funciona](../tutoriais/uv_nao_funcionando.md), para quando o computador do laboratório não deixa instalar.
