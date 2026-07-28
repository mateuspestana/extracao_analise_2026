# Ambientes Python com `uv` e `requirements.txt`

Esta disciplina usa `uv` para criar o ambiente virtual e o comando `uv pip` para instalar as dependências declaradas em `requirements.txt`.

## Regra do curso

- Crie o ambiente com `uv venv .venv`.
- Crie `requirements.txt` apenas quando o projeto precisar de uma biblioteca externa (maior parte dos casos).
- Depois de criar ou alterar essa lista, instale-a com `uv pip install -r requirements.txt`.
- Execute os scripts com `uv run`.

## Projeto sem bibliotecas externas

Dentro da pasta do projeto:

```cmd
uv venv .venv
uv run src/ler_csv.py
```

No Mac, use os mesmos comandos no Terminal.

## Ao adicionar uma biblioteca

Registre a dependência no arquivo. Por exemplo, para usar Pandas, acrescente uma linha `pandas` a `requirements.txt` e execute:

```cmd
uv pip install -r requirements.txt
```

No Mac, o comando é o mesmo depois de ativar o ambiente. Faça commit do `requirements.txt`, mas nunca da pasta `.venv/`.
