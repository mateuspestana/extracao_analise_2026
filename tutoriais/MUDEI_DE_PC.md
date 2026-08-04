# Troquei de máquina: recomeçando do zero

Isso serve tanto para quando você troca de computador quanto para os PCs do laboratório, que costumam voltar zerados a cada sessão. Siga os passos na ordem, cada um leva poucos minutos.

## 1. VS Code

Baixe e instale em https://code.visualstudio.com/. Aceite as opções padrão do instalador. Use a loja da Microsoft Store se puder. 

## 2. Git

Siga o [tutorial de instalação do Git](instalar-git.md). Depois, configure seu nome e e-mail (isso se repete a cada máquina nova):

```cmd
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

## 3. `uv`

Siga o [tutorial de instalação do `uv`](instalar-uv.md).

## 4. Baixe de novo o material do curso

```cmd
git clone https://github.com/mateuspestana/extracao_analise_2026.git
```

## 5. Baixe de novo o seu repositório de trabalhos

Se você já tinha criado seu repositório privado (`extracao-dados-trabalhos-SeuNome`) em outra máquina, não crie um novo: clone o que já existe.

```cmd
git clone https://github.com/seu-usuario/extracao-dados-trabalhos-seunome.git
```

**ATENÇÃO:** o GitHub vai pedir autenticação na primeira vez que você clonar ou der `push` numa máquina nova. Siga o fluxo pelo navegador; se aparecer um pedido de usuário/senha no terminal em vez disso, use um *personal access token* no lugar da senha.

## 6. Recrie o ambiente de cada projeto que for usar

Ambientes virtuais (`.venv`) não vêm no `git clone`, você recria localmente. Dentro de cada pasta de aula ou projeto que for abrir:

```cmd
uv venv .venv
```

Se a pasta tiver um `requirements.txt`, instale as dependências também:

```cmd
uv pip install -r requirements.txt
```

## 7. Confira que está tudo certo

Abra a pasta certa no VS Code (**File > Open Folder**) e rode um exemplo simples, como `exemplos/ola.py` da Aula 2, com `uv run`. Se rodar sem erro, a máquina está pronta.

---

Este guia cresce ao longo do semestre. Se uma aula futura exigir instalar mais alguma coisa no sistema, e não só uma biblioteca Python via `requirements.txt` (que já é coberta pelo passo 6), acrescente um passo aqui.

Se bater dúvida no significado de algum comando de Git usado aqui (`clone`, `add`, `commit`, `push`...), consulte o [guia rápido de Git](git-comandos-basicos.md).
