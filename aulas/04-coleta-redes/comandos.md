# Comandos da Aula 4 — Coleta em redes sociais com Zeeschuimer

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `04-coleta-redes.ipynb` explica cada comando em contexto.

Para `cd`/`mkdir`, confere na Aula 1. Para leitura de CSV com `csv.DictReader`, confere na Aula 2, que tem mais desse comando.

## Terminal — instalar dependências do projeto

| Comando | Sistema | Efeito |
|---|---|---|
| `uv pip install -r requirements.txt` | Windows e Mac | Instala, no ambiente virtual, as bibliotecas listadas em `requirements.txt`. |
| `pip install -r requirements.txt` | Windows e Mac | Alternativa, se o comando `uv` não funcionar no computador. |

Este par de comandos se repete nas Aulas 5, 6, 7 e 8. Confere aqui sempre que precisar relembrar.

## Python — leitura de CSV com separador diferente

| Trecho | Efeito |
|---|---|
| `csv.DictReader(arquivo, delimiter=";")` | Lê o CSV como lista de dicionários, avisando que o separador de colunas é `;` (ponto e vírgula), não vírgula. Exportações do Zeeschuimer usam esse separador. |
| `pd.read_csv(caminho, sep=";")` | Mesma ideia, mas usando Pandas: lê o CSV inteiro de uma vez como uma tabela (DataFrame). |

## Python — nuvem de palavras

| Trecho | Efeito |
|---|---|
| `from wordcloud import WordCloud` | Importa a classe que gera nuvens de palavras. |
| `WordCloud(width=800, height=400, background_color="white").generate(texto)` | Cria a nuvem de palavras a partir de uma string de texto. |
| `plt.imshow(nuvem)` | Desenha a nuvem de palavras na figura atual do matplotlib. |
| `plt.axis("off")` | Esconde os eixos numéricos, que não fazem sentido para uma imagem. |
| `plt.show()` | Exibe a figura montada na tela. |

### Snippet — gerar e mostrar uma nuvem de palavras

```python
from wordcloud import WordCloud
import matplotlib.pyplot as plt

nuvem = WordCloud(width=800, height=400, background_color="white").generate(texto_completo)

plt.figure(figsize=(10, 5))
plt.imshow(nuvem)
plt.axis("off")
plt.show()
```

## Python — contagem e frequência

| Trecho | Efeito |
|---|---|
| `from collections import Counter` | Importa a classe que conta quantas vezes cada valor aparece numa sequência. |
| `Counter()` | Cria um contador vazio. |
| `contador[chave] += 1` | Soma 1 na contagem daquela chave (cria a chave com valor 1, se ainda não existir). |
| `contador.most_common(N)` | Devolve os N itens mais frequentes, já ordenados do maior para o menor. |

## Python — baixar arquivo por URL

| Trecho | Efeito |
|---|---|
| `import urllib.request` | Importa o módulo padrão do Python para baixar arquivos por URL. Não precisa instalar nada. |
| `urllib.request.urlretrieve(url, destino)` | Baixa o conteúdo da URL e salva no caminho de destino indicado. |
| `Path(pasta).mkdir(parents=True, exist_ok=True)` | Cria a pasta indicada (e as pastas pai, se precisar), sem dar erro se ela já existir. |

### Snippet — try/except comentado, para lidar com falha de download

Este padrão não aparece literalmente no notebook da aula (que usa `if` para verificar se existe URL antes de baixar), mas é a forma recomendada de lidar com uma URL que falha na hora do download, por exemplo por expirar:

```python
import urllib.request

try:
    urllib.request.urlretrieve(url, destino)
except Exception as erro:
    print(f"Não foi possível baixar {url}: {erro}")
```
