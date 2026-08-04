# Guia rápido de Git

Referência dos comandos que você vai usar no dia a dia a partir da Aula 3. Não é pra decorar, é pra consultar sempre que precisar. Rode todos os comandos abaixo no Terminal integrado do VS Code (**preferível**), no CMD (Windows) ou no Terminal (Mac); a sintaxe é idêntica nos três.

**OBS:** todo comando de `git` só funciona de dentro de uma pasta que já é um repositório (ou seja, que já tem uma pasta oculta `.git` dentro). Se der erro do tipo "not a git repository", confira se você está na pasta certa.

## `git init`: começar um repositório do zero

Transforma a pasta atual num repositório Git. Só roda uma vez, no começo do projeto. Se for clonar um repositório que já existe, não use git init. Use apenas para o que VOCÊ criou.

```bash
git init
```

Cria a pasta `.git`, onde o Git guarda todo o histórico. Você não mexe nela diretamente.

## `git clone`: copiar um repositório que já existe

Quando o repositório já existe no GitHub (por exemplo, o do curso) e você quer uma cópia completa na sua máquina, com todo o histórico incluído.

```bash
git clone https://github.com/usuario/repositorio.git
```

Cria uma pasta nova com o nome do repositório, já configurada como cópia do remoto. Diferente do `git init`, aqui você não parte do zero: puxa tudo que já existe.

**OBS:** é o comando que você usa quando troca de computador (ou pega uma máquina zerada do laboratório) e precisa recuperar o **seu** repositório de trabalhos, criado na Aula 3:

```bash
git clone https://github.com/seu-usuario/extracao-dados-trabalhos-seunome.git
```

**ATENÇÃO:** só use `git clone` quando o repositório ainda não existe na sua máquina. Se a pasta já existe e você só quer trazer as mudanças novas, o comando certo é `git pull` (mais abaixo), não `git clone` de novo.

## `git add`: escolher o que vai entrar no próximo commit

O Git não salva sozinho tudo que você muda. Antes de commitar, você precisa avisar quais arquivos entram nessa "leva".

```bash
git add nome-do-arquivo.py
```

Para adicionar tudo que mudou de uma vez:

```bash
git add .
```

**ATENÇÃO:** `git add .` adiciona literalmente tudo que estiver modificado na pasta atual, incluindo coisa que você talvez não quisesse commitar ainda. Antes de rodar, vale a pena conferir com `git status` (próxima seção) o que vai entrar.

## Bônus: `git status`, pra saber o que está acontecendo

É o que você vai rodar o tempo todo entre os outros comandos, pra ver o que mudou, o que já está marcado com `git add` e o que ainda falta.

```bash
git status
```

## `git commit`: salvar a leva marcada com uma mensagem

Registra no histórico tudo que foi adicionado com `git add`, junto com uma mensagem explicando o que mudou.

```bash
git commit -m "mensagem explicando o que mudou"
```

**OBS:** a mensagem é obrigatória e deve descrever a mudança (ex.: `"Corrige cálculo da média"`), não algo genérico como `"mudanças"` ou `"commit 2"`.

## `git push`: enviar seus commits para o GitHub

Depois de commitar localmente, o `push` manda esse histórico para o repositório remoto (o que fica no GitHub), pra ficar visível pra todo mundo (ou pra você entregar a atividade).

```bash
git push
```

Na primeira vez que você faz push de uma branch nova, o Git costuma pedir pra especificar o destino:

```bash
git push -u origin main
```

Depois disso, `git push` sozinho já basta.

## `git pull`: trazer mudanças do GitHub pra sua máquina

O caminho inverso do `push`. Baixa e já aplica na sua pasta local o que tiver de novo no repositório remoto.

```bash
git pull
```

**OBS:** rode `git pull` sempre antes de começar a trabalhar num repositório compartilhado, pra garantir que você está partindo da versão mais recente.

## `git reset --hard HEAD`: descartar tudo que você mudou desde o último commit

Comando de emergência. Desfaz **todas** as alterações não commitadas na pasta, voltando exatamente ao estado do último commit.

```bash
git reset --hard HEAD
```

**ATENÇÃO:** isso é destrutivo e não tem volta. Tudo que você editou e ainda não commitou some de verdade, não vai pra lixeira nem nada. Só use quando tiver certeza de que quer jogar fora as mudanças (por exemplo, quando bagunçou um exercício e prefere recomeçar do zero).

## Ordem típica do dia a dia

Pra fixar o fluxo mais comum, numa entrega normal da disciplina:

```bash
git pull # para baixar a versão atualizada do meu ou do seu repositório
git add . # quando você fez alguma alteração no SEU repositório
git commit -m "descreve o que você fez" # marca a alteração
git push # envia a alteração
```

## Próximo passo

Se algum desses comandos der erro inesperado ou você travar numa dúvida que se repete, vale abrir uma issue de FAQ (ou perguntar em aula). Pra configurar o Git pela primeira vez, veja [instalar-git.md](instalar-git.md); o passo a passo completo de repositório e GitHub está na [Aula 3](../aulas/03-git-github-repositorio/03-git-github-repositorio.ipynb).
