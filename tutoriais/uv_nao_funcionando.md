# Quando o `uv` não funciona

Em alguns computadores do laboratório da FGV, o `uv` não instala ou não roda direito, mesmo seguindo o [tutorial de instalação](instalar-uv.md). Se isso acontecer com você, não perca tempo tentando resolver na hora: dá pra seguir a aula inteira só com o Python puro.

## Como saber que é isso

Depois de tentar instalar o `uv`, o comando `uv --version` continua dando `comando não encontrado` (ou `'uv' não é reconhecido`), mesmo depois de fechar e abrir o terminal de novo, e até o VS Code inteiro.

**OBS:** isso costuma acontecer por restrição de permissão da máquina do laboratório, não por erro seu. Não precisa insistir, é só usar o caminho alternativo abaixo.

## Criando o ambiente sem `uv`

O Python já vem com um jeito próprio de criar ambiente virtual, o `venv`. Dentro da pasta do projeto, rode:

**Windows (CMD)**
```cmd
python -m venv .venv
.venv\Scripts\activate
```

**Mac (Terminal)**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Você vai ver `(.venv)` aparecer no começo da linha do terminal. É assim que você confere que o ambiente está ativado.

**OBS:** no Windows, se `python` não for reconhecido, tente `py` no lugar.

## Instalando bibliotecas: `pip install` no lugar de `uv pip install`

Com o ambiente ativado, troque `uv pip install -r requirements.txt` por:

```cmd
pip install -r requirements.txt
```

O comando é o mesmo nos dois sistemas, desde que o ambiente esteja ativado.

## Rodando um arquivo: `python arquivo.py` no lugar de `uv run arquivo.py`

Com o ambiente ativado, troque `uv run exemplos/ola.py` por:

```cmd
python exemplos/ola.py
```

**ATENÇÃO:** o ambiente ativado vale só para a sessão atual do terminal. Se você fechar e abrir de novo, rode `.venv\Scripts\activate` (Windows) ou `source .venv/bin/activate` (Mac) de novo antes de instalar ou rodar qualquer coisa.

## Próximo passo

Fora essas trocas (`uv venv` → `python -m venv` + ativar, `uv pip install` → `pip install`, `uv run` → `python`), o resto da aula funciona igual. Volte para o [guia de `uv` e requirements](uv-requirements.md) ou para a aula quando quiser conferir o passo original.
