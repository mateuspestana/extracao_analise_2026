# Aula 20 — API de leitura e camada de dados

Comece por [20-api-e-persistencia.ipynb](20-api-e-persistencia.ipynb). A aula tem duas metades. Na primeira, o que é REST (endpoint, método, parâmetro, resposta), consumir uma API pública de verdade (o [ViaCEP](https://viacep.com.br/)) com `requests.get()` e `.json()`, autenticação por chave (conceitual) e criar a sua própria API com FastAPI: endpoint de leitura, parâmetro de rota tipado, validação automática e a documentação em `/docs`. Na segunda, a camada de dados: guardar uma coleta em Parquet (e por que ele é um bom formato: menor que o CSV, lembra o tipo das colunas e lê só as colunas pedidas), e a API passando a responder lendo do Parquet em vez de uma lista fixa no código.

Esta aula **não cai na A1** (a prova cobre até a Aula 13). Ela existe para montar o alicerce técnico do projeto final (uma API que lê de uma camada de dados).

Depois faça [exercicios/exercicio-20-api-e-persistencia.ipynb](exercicios/exercicio-20-api-e-persistencia.ipynb). Ele pede consumir uma API pública à sua escolha, guardar em Parquet uma coleta sua de uma aula anterior, e completar `api_exercicio.py` com endpoints que respondem lendo do Parquet, testados pela documentação automática.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `requests`, `fastapi`, `uvicorn`, `pandas` e `pyarrow`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `exemplos/` tem dois servidores FastAPI: `api.py` (primeira metade, catálogo fixo no código) e `api_dados.py` (segunda metade, lendo do Parquet `dados/coleta.parquet`). Ambos rodam num terminal separado com `uv run uvicorn exemplos.NOME:app --reload`, não dentro de uma célula do notebook (um servidor fica ligado esperando pedidos, e travaria a célula). `dados/exportacao.csv` é a mesma exportação das Aulas 11 a 13, usada para montar o Parquet na parte de persistência.
