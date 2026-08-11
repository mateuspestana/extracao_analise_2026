# Comandos da Aula 1 — Dados, terminal e projetos

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `01-dados-terminal-projetos.ipynb` explica cada comando em contexto.

## Terminal — navegação

| Comando | Sistema | Efeito |
|---|---|---|
| `cd` | Windows (CMD) | Mostra a pasta atual. |
| `pwd` | Mac (Terminal) | Mostra a pasta atual. |
| `dir` | Windows (CMD) | Lista o conteúdo da pasta atual. |
| `ls` | Mac (Terminal) | Lista o conteúdo da pasta atual. |
| `cd <pasta>` | Windows e Mac | Entra na pasta indicada. |
| `cd ..` | Windows e Mac | Sobe um nível na hierarquia de pastas. |

## Terminal — criação de pastas

| Comando | Sistema | Efeito |
|---|---|---|
| `mkdir <nome>` | Windows e Mac | Cria uma pasta nova com o nome indicado. |
| `mkdir data` | Windows e Mac | Cria a subpasta `data`, para guardar dados. |
| `mkdir src` | Windows e Mac | Cria a subpasta `src`, para guardar código. |
| `mkdir docs` | Windows e Mac | Cria a subpasta `docs`, para guardar documentação. |

**Nota:** vários comandos `mkdir` podem ser escritos na mesma linha, separados por espaço. Exemplo: `mkdir data src docs` cria as três pastas de uma vez.

## Python — leitura de arquivo

| Trecho | Efeito |
|---|---|
| `open(caminho, encoding="utf-8")` | Abre um arquivo de texto para leitura, declarando a codificação. |
| `with open(...) as arquivo:` | Abre o arquivo dentro de um bloco que fecha o arquivo sozinho ao terminar. |
| `arquivo.read()` | Lê o conteúdo inteiro do arquivo aberto, como uma única string. |

### Snippet — abrir e ler um arquivo de texto

```python
with open("caminho/do/arquivo.csv", encoding="utf-8") as arquivo:
    print(arquivo.read())
```

Este padrão serve tanto para `.csv` quanto para `.json` quando o objetivo é só olhar o conteúdo bruto do arquivo, sem interpretar sua estrutura. A partir da Aula 2 o curso passa a interpretar CSV como tabela, não como texto solto.
