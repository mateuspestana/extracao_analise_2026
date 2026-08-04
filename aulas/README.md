# Materiais das aulas

Cada pasta corresponde a uma aula do curso. O notebook principal é a aula completa: abra-o primeiro, siga as instruções e faça o exercício indicado ao final. Antes de cada encontro, atualize este repositório:

```cmd
git pull
```

No Mac ou Linux, use o mesmo comando no Terminal.

As atividades entregues devem ser copiadas e adaptadas no repositório privado de cada estudante. Não faça entregas diretamente neste repositório de materiais.

## Organização

- `01-dados-terminal-projetos/`: arquivos, formatos e navegação no terminal.
- `02-vscode-python/`: ambiente Python com `uv` e leitura de CSV.
- `03-git-github-repositorio/`: versão, sincronização e organização profissional.

## Convenção para ambientes Python

Nos projetos introdutórios do curso, `uv` cria o ambiente virtual com `uv venv .venv` e executa scripts com `uv run`. Quando houver dependências externas, elas serão declaradas em `requirements.txt` e instaladas com `uv pip install -r requirements.txt`; não criamos esse arquivo vazio. Não usamos `uv add`, `uv sync`, `pyproject.toml` nem `uv.lock` neste fluxo. Consulte o [guia de `uv` e requirements](../tutoriais/uv-requirements.md) quando um projeto precisar de uma biblioteca externa.

## Primeira vez nesta máquina?

- [Instalar o `uv`](../tutoriais/instalar-uv.md)
- [Instalar o Git](../tutoriais/instalar-git.md)
- [Troquei de máquina: recomeçando do zero](../tutoriais/MUDEI_DE_PC.md), para quando o computador (inclusive os do laboratório) volta zerado.
- [Quando o `uv` não funciona](../tutoriais/uv_nao_funcionando.md), para quando o computador do laboratório não deixa instalar.
