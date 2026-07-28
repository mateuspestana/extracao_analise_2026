# Instalando o Git

Git é o programa que registra o histórico de versões do seu código. Ele entra em cena a partir da Aula 3, quando você começa a enviar entregas para o GitHub.

## Windows

1. Baixe o instalador em https://git-scm.com/download/win.
2. Execute o instalador. Pode aceitar as opções padrão em todas as telas, sem se preocupar em entender cada uma agora.
3. Na tela sobre o PATH, deixe marcada a opção que já vem selecionada por padrão ("Git from the command line and also from 3rd-party software").

## Mac

Abra o Terminal integrado do VS Code (**preferível**) ou o aplicativo Terminal e rode:

```bash
git --version
```

Se o Git ainda não estiver instalado, o próprio macOS abre uma janela oferecendo instalar as "Command Line Developer Tools". Clique em instalar e espere terminar.

**OBS:** se preferir instalar por conta própria em vez de esperar o macOS perguntar, rode `brew install git` (é preciso ter o Homebrew instalado antes).

## Conferindo a instalação

Feche o terminal e abra um novo. Depois rode:

```cmd
git --version
```

No Mac, o comando é o mesmo. Deve aparecer algo como `git version 2.x.x`.

## Próximo passo

Com o Git instalado, siga a [Aula 3](../aulas/03-git-github-repositorio/03-git-github-repositorio.ipynb) para configurar seu nome, seu e-mail e etc.
