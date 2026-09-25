# Desafio de modelagem · FGV

Esta pasta contém somente o material público do desafio: página, caderno inicial, dicionário e duas bases sintéticas. Acesse a página pelo GitHub Pages depois que o docente a publicar.

## Para estudantes

1. Abra a página e consulte o dicionário.
2. Use o laboratório no navegador ou baixe `caderno.ipynb`, `dados/treino.csv` e `dados/teste.csv`.
3. Separe uma validação dentro do treino rotulado, compare modelos e registre as escolhas no caderno.
4. Reajuste o modelo final com todas as 40.000 linhas rotuladas.
5. Gere `previsoes.csv` com as colunas `id,previsao` para os 20.000 IDs do teste. A página confere o formato e permite baixar o caderno.

O laboratório usa Pyodide com NumPy, pandas e scikit-learn. Na primeira execução, essas bibliotecas são baixadas. O navegador guarda o código editado localmente; baixe o caderno para manter uma cópia.

## Teste local

Na raiz do repositório, rode:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000/desafio-modelagem/`. Abrir o HTML diretamente com `file://` impede o carregamento dos CSVs.

## Correção online

Enquanto não houver um serviço configurado em `config.json`, a página **não recebe submissões nem calcula acurácia**. Ela apenas valida o arquivo localmente. O gabarito e a divisão entre teste público e privado ficam fora desta pasta.
