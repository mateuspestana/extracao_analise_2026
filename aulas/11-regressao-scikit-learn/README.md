# Aula 11 — Regressão com scikit-learn

Comece por [11-regressao-scikit-learn.ipynb](11-regressao-scikit-learn.ipynb). A aula abre o bloco de aprendizado de máquina: o que é um modelo supervisionado (features `X` e alvo `y`), o que diferencia regressão de classificação, como derivar features de uma coleta de rede social sem cometer vazamento, e o esqueleto fixo do scikit-learn (`train_test_split`, `fit`, `predict`). Treina uma regressão linear e uma árvore de regressão para estimar a taxa de engajamento de um post, compara as duas com um modelo bobo (prever sempre a média), mostra quando transformar o alvo com `log1p` e como ler os coeficientes sem confundir associação com causa.

Depois faça [exercicios/exercicio-11-regressao-scikit-learn.ipynb](exercicios/exercicio-11-regressao-scikit-learn.ipynb). Ele repete o pipeline na sua própria coleta (a mesma das Aulas 5 a 7): construir o alvo, derivar pelo menos três features próprias sem vazamento, treinar a linear e a árvore, comparar com o modelo bobo e registrar num README quais features você usou e por que descartou as de vazamento.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `pandas`, `scikit-learn` e `matplotlib`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `dados/` tem a exportação de exemplo do TikTok (`exportacao.csv`), a mesma usada desde a Aula 5, para todo mundo conseguir rodar a aula sem depender da própria coleta.
