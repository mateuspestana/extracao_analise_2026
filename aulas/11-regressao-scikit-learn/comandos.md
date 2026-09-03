# Comandos da Aula 11 — Regressão com scikit-learn

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `11-regressao-scikit-learn.ipynb` explica cada comando em contexto.

Para `uv venv`/`uv pip install -r requirements.txt`, confere na Aula 4, que tem mais desse comando. Para leitura de CSV com Pandas, `drop_duplicates()` e cálculo da taxa de engajamento, confere na Aula 5. Para `pd.to_datetime()` e conversão de texto para número, confere na Aula 10.

## Python — preparar `X` (features) e `y` (alvo)

| Trecho | Efeito |
|---|---|
| `y = df["taxa_engajamento"]` | Separa a coluna que o modelo vai estimar (o alvo). |
| `X = pd.DataFrame(index=df.index)` | Cria uma tabela de features vazia, com as mesmas linhas de `df`. |
| `X["col"] = df["body"].fillna("").str.len()` | Deriva uma feature numérica (tamanho da legenda) a partir de uma coluna de texto. |
| `X["col"] = df["hashtags"].fillna("").apply(lambda s: 0 if s == "" else len(s.split(",")))` | Conta itens numa string separada por vírgula, tratando vazio como zero. |
| `momento = pd.to_datetime(df["timestamp"])` / `momento.dt.hour` / `momento.dt.dayofweek` | Extrai hora (0–23) e dia da semana (0 = segunda) de uma coluna de data. |
| `X.nunique()` | Quantos valores diferentes cada coluna tem. Coluna com `1` não ajuda o modelo (não varia). |

## Python — o esqueleto do scikit-learn

| Trecho | Efeito |
|---|---|
| `from sklearn.model_selection import train_test_split` | Importa a função que separa os dados em treino e teste. |
| `X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.25, random_state=42)` | Sorteia 75% das linhas para treino e 25% para teste; `random_state` fixa o sorteio. |
| `modelo = LinearRegression()` | Cria o modelo (ainda não aprendeu nada). |
| `modelo.fit(X_treino, y_treino)` | Treina: o modelo aprende a relação entre as features e o alvo no treino. |
| `previsoes = modelo.predict(X_teste)` | Usa o modelo treinado para estimar o alvo em dados que ele não viu. |
| `modelo.coef_` | Os pesos aprendidos, um por feature (só na regressão linear). O sinal diz a direção; o tamanho só é comparável se as features estiverem na mesma escala. |

## Python — medir o erro

| Trecho | Efeito |
|---|---|
| `from sklearn.metrics import mean_absolute_error, r2_score` | Importa as duas medidas de erro de regressão. |
| `mean_absolute_error(y_teste, previsoes)` | Em média, quanto a previsão erra, na unidade do alvo (MAE). Menor é melhor. |
| `r2_score(y_teste, previsoes)` | Fração da variação do alvo que o modelo explica. `1` = perfeito, `0` = igual a chutar a média, `< 0` = pior que chutar a média. |
| `np.full(len(y_teste), y_treino.mean())` | Constrói o "modelo bobo": prever sempre a média do treino. É o mínimo que um modelo de verdade precisa superar. |

## Python — modelos e transformação de alvo

| Trecho | Efeito |
|---|---|
| `from sklearn.linear_model import LinearRegression` | Modelo linear: soma ponderada das features. |
| `from sklearn.tree import DecisionTreeRegressor` | Modelo em árvore: perguntas encadeadas sobre as features; capta relações não-lineares. |
| `DecisionTreeRegressor(max_depth=5, random_state=42)` | Limita a árvore a 5 perguntas encadeadas, para ela não decorar o treino. |
| `np.log1p(coluna)` | `log(1 + x)`. Comprime caudas longas; use no alvo quando o histograma tem uma cauda longa para a direita (contagens como views, curtidas). |
| `np.expm1(previsoes)` | Desfaz o `log1p`, para voltar as previsões à escala original. |

## Boas práticas

- Nunca coloque no `X` uma coluna que é o alvo ou foi calculada a partir dele. Pergunte de cada feature: "esse dado já existe no momento em que eu quero prever?". Se não, é vazamento.
- Sempre compare o modelo com o modelo bobo. Se ele não bate a média, não aprendeu nada útil.
- Meça o erro no **teste**, nunca no treino. Erro de teste muito pior que o de treino significa que o modelo decorou.
- Coeficiente de regressão descreve associação nos dados vistos, não causa. Não vire "faça X para conseguir Y".
- Feature de texto ou categoria precisa virar número antes (`pd.get_dummies`), e valor ausente precisa de decisão explícita (`dropna` ou `fillna`), antes do `fit`.
