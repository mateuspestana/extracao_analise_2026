# Extração e Análise de Dados

> Prof. Dr. Matheus C. Pestana (matheus.pestana@fgv.br)

Material da disciplina **Extração e Análise de Dados**, do curso de Comunicação Digital (FGV, 2º período, 2026.2). São 36 encontros, organizados em 8 módulos, do primeiro contato com terminal e Python até um projeto final com backend e frontend.

## Por onde começar

- O material de cada aula está em [`aulas/`](aulas/README.md), uma pasta por encontro (`01-...`, `02-...` etc). O notebook principal de cada pasta é a aula inteira: leia-o primeiro.
- Guias de referência rápida (instalar Git, instalar `uv`, comandos básicos, o que fazer se a máquina travar) estão em [`tutoriais/`](tutoriais/).
- Antes de cada encontro, atualize sua cópia do material com `git pull` (veja o [guia rápido de Git](tutoriais/git-comandos-basicos.md) se precisar relembrar o comando).

**ATENÇÃO:** este repositório é só o material do curso. As suas entregas **não** vão aqui: elas ficam num repositório privado próprio, criado por você na Aula 3 (`extracao-dados-trabalhos-seunome`). Veja a Aula 3 para o passo a passo de como criar e conectar esse repositório.

## Módulos

Cada módulo tem, no mínimo, um trabalho avaliado ao final (projeto ou desafio de entrega). Datas conforme o calendário de 2026.2.

| Módulo | Aulas | Datas | Tema |
|---|---|---|---|
| 1 — Ambiente de desenvolvimento moderno | 1–3 | 29/07 a 05/08 | Terminal, arquivos e formatos de dado; VS Code e Python com `uv`; Git, GitHub e repositório profissional |
| 2 — Redes sociais e análise de métricas | 4–7 | 07/08 a 19/08 | Coleta com Zeeschuimer; métricas e exploração; visualização e storytelling; relatório analítico |
| 3 — Web scraping, automação e limpeza | 8–10 | 21/08 a 28/08 | HTML, `requests` e BeautifulSoup; Playwright e páginas dinâmicas; limpeza e pipeline de scraping |
| 4 — APIs, IA generativa e RAG | 11–13 | 02/09 a 09/09 | REST, JSON e FastAPI; embeddings e busca semântica; chatbot com RAG sobre documentos |
| 5 — Persistência e organização de dados | 14 | 11/09 | SQLite, DuckDB, Parquet, JSON, Supabase e cache |
| — Revisão e A1 | 15–19 | 16/09 a 30/09 | Revisão, atendimento, prova prática e correção comentada |
| 6 — Processamento de Linguagem Natural | 20–22 | 02/10 a 09/10 | Preparação de texto e regex; similaridade, classificação e tópicos; extração estruturada de texto |
| 7 — Dados públicos e abertos | 23–26 | 14/10 a 23/10 | Dados.gov.br, IBGE e TSE; APIs legislativas e de transparência; construção de indicadores; amostragem e representatividade |
| 8 — Projeto final | 27–35 | 28/10 a 27/11 | Escopo e arquitetura; backend; frontend; integração; testes e documentação; checkpoint; ajustes finais; apresentações |
| — Encerramento | 36 | 02/12 (segunda chamada) e 09/12 (substitutiva) | Avaliações finais para quem precisar |

## Convenção de ambiente Python

Os projetos introdutórios usam `uv`: `uv venv .venv` para criar o ambiente e `uv run` para executar scripts. Dependências externas entram em `requirements.txt`, instalado com `uv pip install -r requirements.txt`. Detalhes em [`tutoriais/uv-requirements.md`](tutoriais/uv-requirements.md).

## Autoria e uso de IA

O uso de IA é permitido para explicar, revisar e depurar, mas cada entrega deve declarar como ela foi usada (ferramenta, objetivo, o que foi alterado depois de conferir o resultado). O histórico de commits deve mostrar a evolução do trabalho, não só um commit único no final.
