# Comandos da Aula 8 — HTML, requests e BeautifulSoup

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `08-html-requests-beautifulsoup.ipynb` explica cada comando em contexto.

Para instalar dependências com o `.venv` da raiz (`uv pip install -r requirements.txt` na pasta da disciplina), confere na Aula 4. Para escrever um CSV com `csv.DictWriter`, confere na Aula 4, que tem mais desse comando (lá o padrão é usado para thumbnails; aqui é usado para os itens raspados).

## Python — ler um arquivo HTML local

| Trecho | Efeito |
|---|---|
| `from pathlib import Path` | Importa `Path`, para lidar com caminho de arquivo de forma mais simples. |
| `Path(caminho).read_text(encoding="utf-8")` | Lê o arquivo inteiro como uma única string de texto. |

## Python — requisição HTTP

| Trecho | Efeito |
|---|---|
| `import requests` | Importa a biblioteca de requisição HTTP. |
| `requests.get(url)` | Faz uma requisição GET para a URL indicada. |
| `resposta.status_code` | Mostra o código de status da resposta (200 significa sucesso). Sempre confira antes de seguir. |
| `resposta.encoding = resposta.apparent_encoding` | Corrige a codificação de texto detectada, evitando caracteres trocados (por exemplo `£` virando `Â£`). |
| `resposta.text` | O conteúdo HTML da resposta, como string. |
| `requests.compat.urljoin(url_base, link_relativo)` | Junta uma URL base com um link relativo, formando um link completo. |
| `requests.get(url, headers={"User-Agent": "..."})` | Faz a requisição informando um cabeçalho `User-Agent`, identificando quem está fazendo a coleta. |

### Snippet — checar o status antes de continuar

```python
resposta = requests.get(url)

if resposta.status_code == 200:
    resposta.encoding = resposta.apparent_encoding
    html = resposta.text
else:
    html = None
    print("A página não respondeu como esperado, confira a URL e a conexão antes de continuar.")
```

## Python — interpretar o HTML com BeautifulSoup

| Trecho | Efeito |
|---|---|
| `from bs4 import BeautifulSoup` | Importa a classe principal da biblioteca. |
| `BeautifulSoup(html, "html.parser")` | Transforma uma string de HTML numa árvore navegável. `"html.parser"` já vem com o Python, sem precisar instalar mais nada. |
| `sopa.find("tag", {"class": "classe"})` | Acha o primeiro elemento daquela tag com aquela classe. |
| `sopa.find_all("tag", {"class": "classe"})` | Acha todos os elementos daquela tag com aquela classe, numa lista. |
| `sopa.find(id="meu-id")` | Acha o elemento com aquele id. |
| `elemento.find("tag", {"class": "classe"})` | Busca **dentro** de um elemento já encontrado (filho/descendente). |
| `elemento.get_text()` | Pega o texto visível de dentro de um elemento. |
| `elemento.get_text(strip=True)` | Mesma coisa, removendo espaços em branco no início e no fim. |
| `elemento["atributo"]` | Pega o valor de um atributo do elemento, como `href` ou `title`. |

### Snippet — extrair uma lista de itens da página

```python
itens_extraidos = []

for item in sopa.find_all("li", {"class": "post"}):
    titulo = item.find("h2", {"class": "titulo-post"}).get_text(strip=True)
    link = item.find("a", {"class": "link-post"})["href"]

    itens_extraidos.append({
        "titulo": titulo,
        "link": link,
    })
```

Este padrão (percorrer `sopa.find_all(...)`, extrair campos com `.find()` e dicionário `{"class": "..."}`, guardar num dicionário e acumular numa lista) é o núcleo da aula e se repete tanto para a página de teste local quanto para a página real (`books.toscrape.com`).

## Python — salvar os itens extraídos em CSV

| Trecho | Efeito |
|---|---|
| `csv.DictWriter(arquivo, fieldnames=colunas)` | Cria um escritor de CSV que espera dicionários com as chaves indicadas em `colunas`. |
| `escritor.writeheader()` | Escreve a primeira linha do CSV, com os nomes das colunas. |
| `escritor.writerows(lista_de_dicionarios)` | Escreve uma linha no CSV para cada dicionário da lista. |

## Boas práticas de coleta

- Sempre checar `robots.txt` do site antes de coletar (exemplo: `https://books.toscrape.com/robots.txt`).
- Identificar a coleta com um `User-Agent` próprio.
- Espaçar requisições com `time.sleep()` quando fizer várias seguidas, para não sobrecarregar o servidor.
- Os mesmos limites éticos da Aula 4 (sobre redes sociais) valem para scraping: só porque é tecnicamente possível extrair um dado, não quer dizer que deveria.
