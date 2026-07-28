# Instalando o `uv`

`uv` é o gerenciador de ambientes e pacotes Python usado em todas as aulas do curso. A instalação é feita uma vez por máquina; depois disso, cada projeto só precisa de `uv venv .venv`.

## Windows

Abra o Terminal integrado do VS Code (**preferível**) ou o Prompt de Comando (CMD) e rode:

```cmd
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

## Mac

Abra o Terminal integrado do VS Code (**preferível**) ou o aplicativo Terminal e rode:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Conferindo a instalação

Feche o terminal aberto e abra um novo. O `uv` só entra no PATH em uma sessão nova. Depois rode:

```cmd
uv --version
```

No Mac, o comando é o mesmo. Deve aparecer um número de versão, algo como `uv 0.x.x`.

**ATENÇÃO:** se aparecer `'uv' não é reconhecido` (Windows) ou `command not found` (Mac), feche o VS Code inteiro e abra de novo, não só o terminal. Isso resolve a maior parte dos casos.

## Próximo passo

Com o `uv` instalado, siga o [guia de ambientes e `requirements.txt`](uv-requirements.md) para criar o ambiente de cada projeto.
