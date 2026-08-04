# Exemplo de histórico legível

```text
e12ab34 cria estrutura inicial dos trabalhos
f45cd67 documenta execução do projeto de ambiente
```

Boas mensagens descrevem a mudança. Evite mensagens vagas como `update`, `teste` ou `coisas`.

## Sequência de recuperação de contexto

```cmd
git status
git log --oneline
git pull
```

Leia a saída a cada passo. Se o Git informar conflito, pare antes de fazer novos commits e revise os arquivos envolvidos.
