# Comandos da Aula 22

| Código | Para quê |
|---|---|
| `TfidfVectorizer(...).fit_transform(textos)` | Matriz termo-documento com TF-IDF. |
| `CountVectorizer(...).fit_transform(textos)` | Matriz de contagens para LDA. |
| `NMF(n_components=5, random_state=42).fit_transform(X)` | Descobrir combinações de termos. |
| `LatentDirichletAllocation(...).fit_transform(X)` | Outra forma de modelar tópicos. |
| `pd.crosstab(topico, editoria)` | Conferir como os tópicos cruzam os rótulos originais. |
| `torch.cuda.is_available()` | Confirmar a GPU no Colab. |

A célula do BERTopic instala `bertopic` e `sentence-transformers` no próprio Colab apenas se a GPU estiver ativa.
