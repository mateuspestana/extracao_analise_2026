# Dicionário de dados · desafio de modelagem

Cada linha descreve uma campanha digital **inteiramente sintética** antes da publicação. Não são dados de pessoas, perfis ou organizações reais. Os nomes dos campos ajudam a contar a história do problema; não garantem que a variável seja útil para prever a resposta.

## Arquivos

- `treino.csv`: 40.000 linhas, `id`, 36 variáveis preditoras e `alto_desempenho`.
- `teste.csv`: 20.000 linhas, `id` e as mesmas 36 variáveis, sem resposta.
- `caderno.ipynb`: ponto de partida executável no navegador ou em um ambiente Python local.

`alto_desempenho` é binária: `1` indica desempenho alto segundo o critério sintético do desafio; `0` indica os demais casos. A classe positiva representa cerca de 40% do treino.

## Campos

| Coluna | Significado simulado |
|---|---|
| `id` | Identificador único. Use para relacionar a previsão à linha; retire das variáveis do modelo. |
| `seguidores` | Tamanho aproximado da audiência prévia. |
| `taxa_historica` | Taxa agregada de resposta em campanhas anteriores. |
| `posts_30_dias` | Volume recente de publicações. |
| `idade_perfil_meses` | Tempo de existência do perfil. |
| `investimento` | Investimento planejado na campanha. |
| `tamanho_legenda` | Comprimento estimado do texto. |
| `hashtags` | Número planejado de hashtags. |
| `tempo_medio_video` | Duração média planejada de vídeo. |
| `concorrencia` | Índice de concorrência no horário. Pode conter valores ausentes. |
| `horario_planejado` | Horário planejado em escala contínua. Pode conter valores ausentes. |
| `afinidade_publico` | Índice de afinidade estimada da audiência. |
| `crescimento_recente` | Índice de crescimento anterior à campanha. |
| `tem_video`, `tem_carrossel`, `tem_cta`, `tem_link` | Indicadores binários de formato e elementos da campanha. |
| `tema`, `canal`, `segmento`, `regiao` | Variáveis categóricas de planejamento. |
| `duracao_planejada` | Duração prevista da ação. |
| `densidade_visual` | Índice de densidade visual. Pode conter valores ausentes. |
| `idade_media_publico` | Idade média estimada do público. |
| `cliques_historicos` | Volume anterior de cliques. |
| `frequencia_postagens` | Índice de frequência de publicações. |
| `variedade_vocabulario` | Índice de variedade do texto. |
| `indice_sazonalidade` | Índice sintético de sazonalidade. Pode conter valores ausentes. |
| `tempo_edicao` | Tempo estimado de edição. |
| `cores_criativo` | Medida sintética de cores da peça. |
| `proporcao_mobile` | Proporção estimada de acesso móvel. |
| `media_comentarios` | Média anterior de comentários. |
| `videos_semana` | Volume semanal de vídeos. |
| `taxa_compartilhamento_previa` | Taxa anterior de compartilhamento. Pode conter valores ausentes. |
| `variedade_hashtags` | Índice de variedade das hashtags. |
| `tamanho_titulo` | Comprimento do título. |
| `audiencia_regional` | Índice de alcance regional. |

Há colunas em escalas diferentes, categorias, valores ausentes e sinais sem utilidade para a previsão. Descobrir um preparo adequado faz parte do exercício. Calcule medianas, escalas e seleções **somente** com a parte de treino da sua divisão interna.

## Formato de entrega

O arquivo de previsões deve chamar-se `previsoes.csv` e conter exatamente:

```csv
id,previsao
<id de teste>,0
<outro id de teste>,1
```

Inclua todos os 20.000 IDs de `teste.csv`, uma vez cada, em qualquer ordem. `previsao` aceita apenas `0` ou `1`. O teste público e o privado estão misturados; a divisão e os rótulos ficam exclusivamente com o docente/corretor.
