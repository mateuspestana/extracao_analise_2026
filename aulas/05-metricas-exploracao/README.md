# Aula 5 — Métricas, exploração e hashtags

Comece por [05-metricas-exploracao.ipynb](05-metricas-exploracao.ipynb). A aula troca o `csv.DictReader` da Aula 4 pelo Pandas: carrega a exportação, confere qualidade dos dados, calcula métricas de rede social (com atenção especial aos denominadores), estatística descritiva, filtragem e agrupamento por hashtag, terminando numa tabela-resumo.

Depois faça [exercicios/exercicio-05-metricas-exploracao.ipynb](exercicios/exercicio-05-metricas-exploracao.ipynb). Ele é o **Projeto 2** do curso: repete a análise de métricas e o agrupamento por hashtag com a sua própria coleta da Aula 4 (ou um recorte diferente dela), a partir de uma pergunta analítica definida por você.

Use o `.venv` da raiz do repositório da disciplina e rode `uv pip install -r requirements.txt` a partir da raiz (a aula precisa só de `pandas`, que já entra nesse arquivo). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

**OBS:** `dados/exportacao.csv` desta pasta é uma exportação real do Zeeschuimer (vários perfis do TikTok misturados), pra todo mundo rodar a aula com o mesmo material. No exercício, você troca esse arquivo pela sua exportação real da Aula 4.
