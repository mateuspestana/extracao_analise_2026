# Aula 4 — Coleta em redes sociais com Zeeschuimer

Comece por [04-coleta-redes.ipynb](04-coleta-redes.ipynb). A aula instala o Zeeschuimer no Firefox, faz uma coleta demonstrativa numa plataforma social e explora o CSV exportado: quais são as variáveis, nuvem de palavras do texto e das hashtags, download de thumbnails e vídeos, e uma primeira olhada nas métricas (vídeo mais curtido, médias, autor mais frequente).

Depois faça [exercicios/exercicio-04-coleta-redes.ipynb](exercicios/exercicio-04-coleta-redes.ipynb). Ele repete o fluxo com um recorte escolhido por você, sempre com `pandas` (a aula mostra as duas formas, com `csv` e com `pandas`; o exercício fixa o `pandas`), aprofunda a parte de métricas e termina com a documentação da fonte, do período, da consulta realizada e dos limites éticos da coleta.

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `wordcloud`, `matplotlib` e `pandas`). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

**ATENÇÃO:** qualquer arquivo exportado, imagem ou vídeo baixado durante a aula ou o exercício fica em pastas `dados/`, que já estão no `.gitignore` desta pasta. Nunca envie esse conteúdo para o Git.
