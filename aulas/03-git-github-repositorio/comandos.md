# Comandos da Aula 3 — Git, GitHub e repositório profissional

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `03-git-github-repositorio.ipynb` explica cada comando em contexto.

Para navegação e criação de pastas (`cd`, `mkdir`), confere na Aula 1, que tem mais desse comando.

## Terminal — configuração inicial do Git

| Comando | Sistema | Efeito |
|---|---|---|
| `git --version` | Windows e Mac | Mostra a versão do Git instalada, confirmando que o Git está disponível. |
| `git config --global user.name "Seu Nome"` | Windows e Mac | Define o nome usado como autoria dos commits, em todos os repositórios do computador. |
| `git config --global user.email "seu-email@exemplo.com"` | Windows e Mac | Define o e-mail usado como autoria dos commits. |

## Terminal — criar e conectar um repositório

| Comando | Efeito |
|---|---|
| `git init` | Transforma a pasta atual num repositório Git. |
| `git status` | Mostra o estado atual do repositório: arquivos novos, alterados ou prontos para commit. |
| `git add <arquivo-ou-pasta>` | Prepara um arquivo ou pasta para entrar no próximo commit. |
| `git commit -m "mensagem"` | Registra uma nova versão com os arquivos preparados, com uma mensagem que descreve a mudança. |
| `git branch -M main` | Renomeia o branch atual para `main`. |
| `git remote add origin <URL_DO_REPOSITORIO>` | Conecta o repositório local a um repositório remoto no GitHub. |
| `git push -u origin main` | Envia os commits locais para o GitHub e associa o branch local ao branch remoto. |

## Terminal — mantendo o repositório atualizado

| Comando | Efeito |
|---|---|
| `git pull` | Traz para o repositório local as mudanças feitas no repositório remoto. |
| `git reset --hard HEAD` | Descarta qualquer alteração local não commitada e volta a pasta ao estado do último commit. Use apenas para resolver conflito ao sincronizar com o material do curso; nunca use num repositório com trabalho próprio não salvo. |

**ATENÇÃO:** `git reset --hard` é destrutivo. Ele apaga alterações que não foram commitadas. Confira `git status` antes de usar.

## Arquivo `.gitignore`

`.gitignore` lista arquivos e pastas que não devem entrar no Git. Itens comuns: `.venv/` (ambiente virtual, recriável), `.env` (pode guardar segredos), `__pycache__/` (arquivos temporários do Python).

### Snippet — `.gitignore` básico

```text
.venv/
.env
__pycache__/
```

## Boas práticas de mensagem de commit

Mensagens descrevem a ação feita, no imperativo ou como um resumo curto da mudança. Exemplo bom: `adiciona leitura inicial de csv`. Exemplo ruim: `update`.
