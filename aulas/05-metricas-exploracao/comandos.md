# Comandos da Aula 5 — Métricas, exploração e hashtags

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `05-metricas-exploracao.ipynb` explica cada comando em contexto.

Para instalar dependências com o `.venv` da raiz do repositório (`uv pip install -r requirements.txt` na pasta da disciplina, sem criar ambiente novo), confere na Aula 4, que tem mais desse comando. Para leitura de CSV com separador `;`, confere também na Aula 4.

## Python — inspeção de uma tabela (Pandas)

| Trecho | Efeito |
|---|---|
| `pd.read_csv(caminho, sep=";")` | Lê o CSV inteiro como uma tabela (DataFrame), avisando o separador de colunas. |
| `df.shape` | Devolve uma dupla `(linhas, colunas)` com o tamanho da tabela. |
| `df.head()` | Mostra as 5 primeiras linhas da tabela. |
| `df.dtypes` | Mostra o tipo de dado de cada coluna (número inteiro, texto etc). |
| `df.isna().sum()` | Conta, por coluna, quantas linhas têm valor ausente. |
| `df.duplicated().sum()` | Conta quantas linhas são idênticas a uma linha anterior. |
| `df.drop_duplicates()` | Remove linhas duplicadas, mantendo a primeira ocorrência de cada uma. |

## Python — filtragem e novas colunas

| Trecho | Efeito |
|---|---|
| `df[df["coluna"] > 0]` | Mantém só as linhas em que a condição é verdadeira. |
| `df[condição].copy()` | Faz uma cópia independente da seleção filtrada, evitando aviso do Pandas sobre alterar uma fatia da tabela original. |
| `df["nova_coluna"] = expressão` | Cria uma coluna nova, calculada linha a linha a partir de outras colunas, sem precisar de laço. |
| `df["coluna"].sort_values(ascending=False)` | Ordena as linhas pelo valor da coluna, da maior para a menor. |
| `df[df["coluna"] == valor]` | Mantém só as linhas em que a coluna é exatamente aquele valor. |
| `df["coluna"].str.contains("texto", na=False)` | Mantém só as linhas em que a coluna contém aquele texto; `na=False` evita erro em linhas com valor ausente. |

## Python — estatística descritiva

| Trecho | Efeito |
|---|---|
| `df[colunas].describe()` | Mostra estatística descritiva (contagem, média, desvio, mínimo, máximo etc) das colunas indicadas. |
| `df["coluna"].mean()` | Calcula a média da coluna. |
| `df["coluna"].median()` | Calcula a mediana da coluna. |

## Python — de uma coluna com listas para uma linha por item

| Trecho | Efeito |
|---|---|
| `df.dropna(subset=["coluna"])` | Remove linhas em que a coluna indicada está vazia. |
| `df["coluna"].str.split(",")` | Transforma uma string separada por vírgula numa lista, dentro de cada célula. |
| `df.explode("coluna")` | Transforma cada item da lista numa linha própria, repetindo o resto das colunas. |
| `df["coluna"].str.strip()` | Remove espaço em branco no início e no fim do texto de cada célula. |
| `df["coluna"].value_counts()` | Conta quantas vezes cada valor aparece na coluna. |

### Snippet — explodir uma coluna de itens separados por vírgula

```python
df_hashtags = df.dropna(subset=["hashtags"]).copy()
df_hashtags["hashtags"] = df_hashtags["hashtags"].str.split(",")
df_hashtags = df_hashtags.explode("hashtags")
df_hashtags["hashtags"] = df_hashtags["hashtags"].str.strip()
```

Este padrão (`dropna` → `str.split` → `explode` → `str.strip`) se repete nas Aulas 6 e 7, sempre para separar hashtags. Confere aqui sempre que precisar relembrar.

## Python — agrupamento e tabela-resumo

| Trecho | Efeito |
|---|---|
| `df.groupby("coluna").agg(nome=("coluna_origem", "função"))` | Agrupa as linhas pela coluna indicada e calcula uma ou mais agregações por grupo (`count`, `mean`, `sum` etc). |
| `.reset_index()` | Transforma a coluna usada no agrupamento de volta numa coluna normal (em vez de índice). |
| `df.rename(columns={"antigo": "novo"})` | Troca o nome de uma ou mais colunas. |
| `df["coluna"].round(1)` | Arredonda os valores da coluna para uma casa decimal. |
| `df.to_csv(caminho, index=False)` | Salva a tabela num arquivo CSV, sem incluir a coluna de índice numérico. |

Este padrão de `groupby().agg()` seguido de `reset_index()` e `sort_values()` se repete nas Aulas 6 e 7 para reconstruir a tabela-resumo por hashtag.
