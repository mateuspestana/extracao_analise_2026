# Aula 8 — HTML, `requests` e BeautifulSoup

Comece por [08-html-requests-beautifulsoup.ipynb](08-html-requests-beautifulsoup.ipynb). A aula explica a estrutura de uma página HTML, como inspecionar tag/classe/id no navegador, como fazer uma requisição com `requests` e checar o status, e como usar `BeautifulSoup` com `.find()` / `.find_all()` para extrair títulos e links e salvar o resultado em CSV. Também cobre `robots.txt` e boas práticas de coleta.

Depois faça [exercicios/exercicio-08-html-requests-beautifulsoup.ipynb](exercicios/exercicio-08-html-requests-beautifulsoup.ipynb). Ele pede a extração de uma página real permitida (books.toscrape.com, quotes.toscrape.com ou outra que você tenha certeza que pode raspar), com registro da busca usada, da fonte, da data da coleta e das falhas encontradas.

Use o `.venv` da raiz do repositório e rode `uv pip install -r requirements.txt` a partir da raiz (a aula precisa de `requests` e `beautifulsoup4`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `exemplos/` tem uma página HTML local (`pagina-teste.html`) usada na aula para praticar `.find()` / `.find_all()` sem depender de internet.
