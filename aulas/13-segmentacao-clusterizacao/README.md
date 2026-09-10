# Aula 13 — Segmentação e clusterização

Comece por [13-segmentacao-clusterizacao.ipynb](13-segmentacao-clusterizacao.ipynb). A aula fecha o bloco de aprendizado de máquina com o caso não-supervisionado: não há resposta pronta, o computador agrupa por semelhança e você interpreta. Cobre por que padronizar com `StandardScaler`, como o `KMeans` forma os grupos, como escolher `k` pela curva do cotovelo e pela silhueta, como perfilar cada cluster com `groupby().mean()` e traduzir para termos de negócio, a visualização com PCA em 2 dimensões, e os limites do método (grupos redondos, sensível às features, cluster é lente e não verdade).

Depois faça [exercicios/exercicio-13-segmentacao-clusterizacao.ipynb](exercicios/exercicio-13-segmentacao-clusterizacao.ipynb). Ele é o **Projeto 3 (case, peso 2)**: na sua coleta de rede social, você cria e justifica uma variável para regressão, cria e justifica o rótulo de "viralizou" para classificação, e segmenta posts, autores ou hashtags, consolidando tudo num README com revisão por pares.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `pandas`, `scikit-learn` e `matplotlib`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

A pasta `dados/` tem `clientes.csv`, uma base sintética de 1.210 clientes com quatro perfis embutidos, usada na prática guiada. `exemplos/gerar_clientes.py` é o script que produz essa base, para deixar registrado como ela foi feita e permitir recriá-la. `dados/exportacao.csv` é a mesma exportação de rede social das Aulas 11 e 12, para quem quiser rascunhar o case antes de usar a própria coleta.
