# Comandos da Aula 21

| Código | Para quê |
|---|---|
| `requests.get(url, timeout=40)` | Baixar o ZIP da fonte. |
| `resposta.raise_for_status()` | Parar se o download falhar. |
| `re.findall(r"\b\d{1,2}/\d{1,2}/\d{4}\b", texto)` | Encontrar datas no formato dia/mês/ano. |
| `re.sub(r"https?://\S+", " ", texto)` | Remover URLs quando elas não são a unidade de análise. |
| `re.search(padrao, texto)` | Verificar se há ao menos uma ocorrência. |
| `re.findall(padrao, texto)` | Extrair todas as ocorrências. |
| `spacy.load("pt_core_news_sm")` | Carregar o modelo linguístico de português. |
| `token.lemma_` | Obter o lema de um token, após processar o texto com spaCy. |
| `str.lower()` | Unificar maiúsculas e minúsculas. |
| `Counter(tokens).most_common(10)` | Inspecionar palavras frequentes. |

No Colab, execute as células pela seta à esquerda. A instalação do modelo é feita pelo notebook; não é preciso GPU.
