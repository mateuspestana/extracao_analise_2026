# Comandos da Aula 12 — Classificação

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `12-classificacao.ipynb` explica cada comando em contexto.

Para features sem vazamento, `train_test_split`, `fit`/`predict` e o modelo bobo, confere na Aula 11, que abre o bloco de aprendizado de máquina. Para `pd.to_datetime()`, confere na Aula 10.

## Python — construir o rótulo (o alvo `y`)

| Trecho | Efeito |
|---|---|
| `corte = df["plays"].quantile(0.90)` | O valor de `plays` que separa os 10% mais vistos. É a base do rótulo. |
| `y = (df["plays"] > corte).astype(int)` | Cria a coluna alvo: `1` se passou do corte ("viralizou"), `0` se não. |
| `y.mean()` | Fração de posts marcados como positivos. Se for muito baixa, a classe é rara e a acurácia vai enganar. |

## Python — treino, teste e modelo

| Trecho | Efeito |
|---|---|
| `train_test_split(X, y, test_size=0.25, random_state=42, stratify=y)` | Separa treino e teste mantendo a mesma proporção de `0` e `1` dos dois lados (`stratify`). Importante com classe rara. |
| `from sklearn.linear_model import LogisticRegression` | Modelo de classificação (apesar do nome "regression"). |
| `LogisticRegression(max_iter=1000)` | `max_iter` dá mais rodadas para o algoritmo convergir. |
| `modelo.predict(X_teste)` | Decisão já pronta: `0` ou `1`, com corte fixo em 0,5 na probabilidade. |
| `modelo.predict_proba(X_teste)[:, 1]` | A probabilidade de cada post ser da classe `1`. É o que você usa para mexer no threshold. |
| `(probabilidade >= 0.20).astype(int)` | Aplica um threshold diferente de 0,5: qualquer post com probabilidade a partir de 0,20 vira `1`. |

## Python — avaliar a classificação

| Trecho | Efeito |
|---|---|
| `from sklearn.metrics import confusion_matrix, accuracy_score, precision_score, recall_score, f1_score` | Importa a matriz de confusão e as quatro medidas. |
| `confusion_matrix(y_teste, decisao)` | Tabela 2×2: `[[VN, FP], [FN, VP]]`. Verdadeiro/falso, negativo/positivo. |
| `accuracy_score(...)` | Fração de acertos. Engana quando uma classe é muito mais comum que a outra. |
| `precision_score(..., zero_division=0)` | Dos que o modelo chamou de positivo, quantos eram de verdade. |
| `recall_score(..., zero_division=0)` | Dos positivos reais, quantos o modelo pegou. |
| `f1_score(..., zero_division=0)` | Média equilibrada de precisão e recall. `zero_division=0` evita aviso quando o modelo não prevê nenhum positivo. |

## Python — árvore de classificação

| Trecho | Efeito |
|---|---|
| `from sklearn.tree import DecisionTreeClassifier` | Árvore de decisão para classificar; capta relações não-lineares. |
| `DecisionTreeClassifier(max_depth=4, random_state=42, class_weight="balanced")` | Limita a profundidade; `class_weight="balanced"` faz a árvore dar mais peso à classe rara, para não ignorá-la. |
| `arvore.feature_importances_` | O quanto cada feature contribuiu para as decisões da árvore. Descreve o que o modelo usou, não uma regra causal. |

## Boas práticas

- O rótulo é uma decisão metodológica. Escreva no README qual foi o corte e por quê; ele muda o resultado.
- Nunca avalie um classificador só pela acurácia. Olhe a matriz de confusão e o recall da classe que te interessa.
- O threshold de 0,5 não é sagrado. Escolha o corte de decisão pensando no que você vai fazer com a previsão (evitar alarme falso ou não deixar passar positivo).
- Mesmo cuidado da Aula 11 com vazamento: nada que seja o alvo ou derivado dele entra no `X`.
- `feature_importances_` e coeficientes descrevem associação nos dados vistos, não causa.
