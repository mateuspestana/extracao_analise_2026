# Aula 10 — Limpeza, normalização e pipeline de scraping

Comece por [10-limpeza-normalizacao-pipeline.ipynb](10-limpeza-normalizacao-pipeline.ipynb). A aula parte de um CSV bruto (simulando uma coleta real de `books.toscrape.com`, com espaço sobrando, capitalização inconsistente, datas em formatos diferentes, preço como texto, linha duplicada e valor ausente) e ensina a transformar isso num pipeline reexecutável: normalização de texto e data, conversão de preço para número, remoção de duplicata, decisão explícita sobre valor ausente, validação de colunas obrigatórias, tratamento de exceção com `try`/`except` e um log do que foi feito. O resultado tratado é salvo em `dados/processed/`, mantendo `dados/raw/` sempre intocado.

Depois faça [exercicios/exercicio-10-limpeza-normalizacao-pipeline.ipynb](exercicios/exercicio-10-limpeza-normalizacao-pipeline.ipynb). É o **Projeto 4**: pegue uma coleta sua (da Aula 8 ou da Aula 9) e monte o pipeline completo, coleta, limpeza, validação, saída tratada, log e README de reprodução.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa só de `pandas`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `dados/raw/` tem o CSV bruto de exemplo (`livros-coleta-bruta.csv`), usado durante a aula. `dados/processed/` recebe o resultado tratado e o log quando o notebook é executado (não vem pronto no repositório). `exemplos/validar_colunas.py` é a mesma checagem de colunas obrigatórias da Seção 11 do notebook, isolada num script para rodar fora do Jupyter.
