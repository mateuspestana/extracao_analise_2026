# Aula 12 — Classificação

Comece por [12-classificacao.ipynb](12-classificacao.ipynb). A aula continua o bloco de aprendizado de máquina: o alvo deixa de ser um número e passa a ser uma categoria ("viralizou" ou "não"). Cobre por que o rótulo é uma decisão sua (definido por um corte, que muda todo o resultado), a `LogisticRegression` com `predict` e `predict_proba`, a matriz de confusão, por que a acurácia engana quando a classe é rara, precisão/recall/F1, o ajuste do threshold como trade-off explícito, e uma árvore de classificação com `class_weight` e `feature_importances_`.

Depois faça [exercicios/exercicio-12-classificacao.ipynb](exercicios/exercicio-12-classificacao.ipynb). Na sua própria coleta, você define e justifica o seu corte de "viralizou", treina a logística, lê a matriz de confusão, testa pelo menos dois thresholds, compara com uma árvore e registra num README o corte escolhido e a favor de quem o modelo erra.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `pandas`, `scikit-learn` e `matplotlib`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `dados/` tem a exportação de exemplo do TikTok (`exportacao.csv`), a mesma da Aula 11, para todo mundo conseguir rodar a aula sem depender da própria coleta.
