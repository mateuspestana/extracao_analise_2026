# Comandos da Aula 13 — Segmentação e clusterização

Este arquivo lista os comandos usados nesta aula. Cada comando tem uma descrição objetiva. Use este arquivo como referência rápida, não como material de estudo principal. O notebook `13-segmentacao-clusterizacao.ipynb` explica cada comando em contexto.

Para leitura de CSV, `describe()` e `groupby().mean()`, confere na Aula 5. Para o esqueleto do scikit-learn (`fit`/`predict`), confere nas Aulas 11 e 12.

## Python — preparar e padronizar os dados

| Trecho | Efeito |
|---|---|
| `clientes.select_dtypes("number")` | Fica só com as colunas numéricas (deixa texto de fora). |
| `from sklearn.preprocessing import StandardScaler` | Importa o padronizador. |
| `X_padronizado = StandardScaler().fit_transform(X)` | Transforma cada coluna para média 0 e desvio 1, para todas pesarem igual na distância. |

## Python — KMeans

| Trecho | Efeito |
|---|---|
| `from sklearn.cluster import KMeans` | Importa o algoritmo de agrupamento. |
| `KMeans(n_clusters=4, n_init=10, random_state=42)` | Pede 4 grupos; `n_init=10` roda 10 vezes e fica com o melhor; `random_state` deixa reproduzível. |
| `grupos = kmeans.fit_predict(X_padronizado)` | Treina e já devolve o número do cluster (0 a k-1) de cada linha. |
| `kmeans.inertia_` | Soma das distâncias de cada ponto ao centro do seu grupo. Cai sempre que `k` aumenta; usada na curva do cotovelo. |
| `kmeans.cluster_centers_` | As coordenadas dos centros dos grupos (na escala padronizada). |

## Python — escolher `k` e avaliar

| Trecho | Efeito |
|---|---|
| `from sklearn.metrics import silhouette_score` | Importa a medida de silhueta. |
| `silhouette_score(X_padronizado, labels)` | De -1 a 1: quão bem separados os grupos estão. Perto de 1 é ótimo, perto de 0 é ambíguo. Escolhe-se o `k` de maior silhueta. |
| laço de `k` guardando `inertia_` e `silhouette_score` | Gera a curva do cotovelo e a curva de silhueta para comparar vários `k`. |

## Python — interpretar e visualizar

| Trecho | Efeito |
|---|---|
| `clientes.groupby("cluster")[colunas_num].mean()` | Média de cada característica dentro de cada grupo. É a base para descrever o que cada cluster é. |
| `clientes["cluster"].map({0: "nome", 1: "nome", ...})` | Traduz o número do cluster para um rótulo legível, a partir da leitura do perfil. |
| `from sklearn.decomposition import PCA` | Importa a redução de dimensão. |
| `PCA(n_components=2).fit_transform(X_padronizado)` | Comprime todas as features em 2 eixos, só para plotar os grupos num gráfico de dispersão. |

## Boas práticas

- Sempre padronize (`StandardScaler`) antes de clusterizar. Sem isso, a coluna de maior escala domina.
- Não decore "cluster 2 = fiéis". As etiquetas 0/1/2/3 são arbitrárias e podem sair em ordem diferente; mapeie para nomes toda vez pela leitura do perfil.
- Justifique a escolha de `k` (cotovelo, silhueta), e assuma quando ela é uma decisão sua e não um valor óbvio.
- Um cluster só vale depois que você o descreve em palavras e ele faz sentido de negócio. Silhueta baixa + perfil sem sentido = a segmentação não capturou nada real.
- A escolha das features muda o resultado. Não existe "a" segmentação certa; existe a que responde à sua pergunta.
