# Aula 7 — Relatório analítico de redes sociais

Comece por [07-relatorio-analitico.ipynb](07-relatorio-analitico.ipynb). A aula revisa o pipeline completo (origem → tratamento → análise → comunicação) e ensina a estrutura de um relatório analítico: pergunta, dados, método, achados, limitações e recomendações, com um exemplo preenchido a partir da tabela e do gráfico das Aulas 5 e 6. Também cobre decisões metodológicas, revisão por pares e os erros de raciocínio mais comuns nessa etapa (correlação com causalidade, gráfico sem fonte, conclusão maior que a amostra).

Depois faça [exercicios/exercicio-07-relatorio-analitico.ipynb](exercicios/exercicio-07-relatorio-analitico.ipynb). Ele é o **Projeto 2**, a entrega final do módulo: regenera a tabela-resumo e os gráficos com a sua própria coleta (a mesma dos Projetos 2, nas Aulas 5 e 6) e preenche o relatório em `exercicios/RELATORIO-modelo.md`.

Um exemplo de relatório já preenchido, com os dados sintéticos da aula, está em [exemplos/relatorio-exemplo.md](exemplos/relatorio-exemplo.md).

Use `uv venv .venv` e `uv pip install -r requirements.txt` (a aula precisa de `pandas` e `matplotlib`, só para recarregar a tabela e o gráfico já conhecidos). O exercício tem seu próprio `requirements.txt` dentro de `exercicios/`, porque essa pasta é copiada isoladamente para o repositório de trabalhos.

**OBS:** `dados/exportacao.csv` desta pasta é o mesmo exemplo que foi usado nas Aulas 5 e 6, para todo mundo conseguir rodar a aula sem depender da própria coleta. No exercício, você troca esse arquivo pela sua exportação real (ou a mesma já usada nos exercícios anteriores).
