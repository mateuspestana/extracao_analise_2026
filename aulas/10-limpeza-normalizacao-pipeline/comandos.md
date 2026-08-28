# Comandos da Aula 10 — Limpeza, normalização e pipeline de scraping

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `10-limpeza-normalizacao-pipeline.ipynb` explica cada comando em contexto.

Para `uv venv`/`uv pip install -r requirements.txt`, confere na Aula 4, que tem mais desse comando. Para leitura de CSV com Pandas, `df.dtypes` e `df.isna().sum()`, confere na Aula 5. Para `duplicated()` e `drop_duplicates()`, confere também na Aula 5, que tem mais desse comando.

## Python — normalização de texto

| Trecho | Efeito |
|---|---|
| `df["coluna"].str.strip()` | Remove espaço em branco do início e do fim do texto de cada célula. |
| `df["coluna"].str.lower()` | Deixa todo o texto da coluna em minúsculo. |
| `df["coluna"].str.title()` | Deixa a primeira letra de cada palavra maiúscula, o resto minúsculo (`"fiction"` → `"Fiction"`). |
| `df["coluna"].str.replace("texto", "", regex=False)` | Remove (ou troca) um trecho de texto em cada célula da coluna. `regex=False` trata o texto buscado como texto literal, não como padrão. |

## Python — normalização de datas

| Trecho | Efeito |
|---|---|
| `pd.to_datetime(df["coluna"])` | Converte uma coluna de texto para o tipo data (`datetime64`). |
| `pd.to_datetime(df["coluna"], dayfirst=True)` | Mesma conversão, avisando que, em formato ambíguo, o primeiro número é o dia (convenção brasileira). |
| `pd.to_datetime(df["coluna"], format="mixed")` | Aceita formatos de data diferentes linha a linha, em vez de exigir um único padrão fixo. |
| `pd.to_datetime(df["coluna"], errors="coerce")` | Data que não é possível interpretar vira `NaT` (ausente), em vez de travar a conversão inteira. |

## Python — conversão de número disfarçado de texto

| Trecho | Efeito |
|---|---|
| `pd.to_numeric(df["coluna"], errors="coerce")` | Converte texto para número; o que não é número válido vira `NaN`, sem travar a conversão inteira. |

## Python — tratamento de exceções

| Trecho | Efeito |
|---|---|
| `try:` / `except TipoDeErro:` | Tenta rodar o bloco do `try`; se acontecer uma exceção do tipo indicado, roda o bloco do `except` em vez de travar o programa. |
| `except ValueError:` | Captura especificamente erro de conversão de tipo (por exemplo, `float("abc")`). Prefira sempre indicar o tipo esperado, nunca um `except:` genérico. |
| `raise ValueError("mensagem")` | Interrompe a execução de propósito, com uma mensagem clara sobre o que deu errado. Usado na validação de colunas obrigatórias. |

## Estrutura de pastas do pipeline

| Pasta | Papel |
|---|---|
| `dados/raw/` | O que foi coletado, intocado. Nunca se escreve por cima de um arquivo desta pasta. |
| `dados/processed/` | O resultado depois de limpar, normalizar e validar. É para onde o pipeline salva a saída. |

## Boas práticas

- Sempre trabalhe numa cópia (`df = df_bruto.copy()`), nunca no próprio `DataFrame` lido do bruto.
- Remova duplicata (`duplicated()` / `drop_duplicates()`) como passo obrigatório do pipeline, não como escolha pontual.
- Para valor ausente, decida entre descartar a linha, preencher com valor padrão ou manter como está, e deixe a decisão explícita no código e no log.
- Valide colunas obrigatórias (existem? não estão vazias?) antes de salvar o resultado como pronto.
- Nomeie o arquivo de saída de forma diferente do arquivo bruto, e salve sempre em `dados/processed/`, nunca em `dados/raw/`.
- Registre em log quantas linhas entraram, quantas saíram e por quê.
