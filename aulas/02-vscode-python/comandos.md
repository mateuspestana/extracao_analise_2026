# Comandos da Aula 2 — VS Code e Python

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `02-vscode-python.ipynb` explica cada comando em contexto.

Para navegação básica de terminal (`cd`, `dir`, `ls`, `mkdir`), confere na Aula 1, que tem mais desse comando.

## Terminal — ambiente com uv

| Comando | Sistema | Efeito |
|---|---|---|
| `uv venv .venv` | Windows e Mac | Cria um ambiente virtual Python isolado, na pasta `.venv`. |
| `uv run <arquivo.py>` | Windows e Mac | Executa um script Python dentro do ambiente virtual do projeto. |
| `uv pip install -r requirements.txt` | Windows e Mac | Instala, no ambiente virtual, as bibliotecas listadas em `requirements.txt`. Repetido nas Aulas 4 a 8; confere na Aula 4, que explica o comando com o fallback `pip install`. |

**Nota:** o curso não usa `uv add`, `uv sync`, `pyproject.toml` nem `uv.lock` neste fluxo introdutório.

## Python — variáveis e saída

| Trecho | Efeito |
|---|---|
| `variavel = valor` | Cria uma variável e guarda um valor nela. |
| `print(valor)` | Mostra um valor no terminal ou na saída da célula. |
| `f"texto {variavel}"` | Cria uma string com o valor de uma variável inserido dentro do texto (f-string). |

## Python — leitura de CSV

| Trecho | Efeito |
|---|---|
| `import csv` | Carrega o módulo padrão do Python para ler e escrever arquivos CSV. |
| `csv.reader(arquivo)` | Cria um leitor que devolve cada linha do CSV como uma lista de valores. |
| `next(leitor)` | Pega a próxima linha do leitor (a primeira chamada pega o cabeçalho). |
| `csv.DictReader(arquivo)` | Cria um leitor que devolve cada linha do CSV como um dicionário, usando o cabeçalho como chaves. |
| `leitor.fieldnames` | Lista os nomes das colunas identificadas pelo `DictReader`. |
| `list(leitor)` | Percorre o leitor inteiro e guarda todas as linhas numa lista. |
| `int(valor)` | Converte um valor de texto para número inteiro. |

### Snippet — ler um CSV como lista de dicionários

```python
import csv

with open("data/publicacoes_exemplo.csv", encoding="utf-8", newline="") as arquivo:
    leitor = csv.DictReader(arquivo)
    linhas = list(leitor)
    colunas = leitor.fieldnames or []

print(f"Linhas de dados: {len(linhas)}")
print(f"Colunas: {', '.join(colunas)}")
```

Este padrão de leitura reaparece, com pequenas variações, nas Aulas 4 e 8. A Aula 5 em diante substitui esse padrão pelo Pandas.
