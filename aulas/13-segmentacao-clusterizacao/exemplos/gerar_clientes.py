"""Gera a base sintética de clientes usada na Aula 13.

Não é uma coleta real: é um conjunto inventado, com quatro perfis de cliente
embutidos de propósito (mas SEM uma coluna "segmento" no arquivo final). O
objetivo é que, na aula, `StandardScaler` + `KMeans(n_clusters=4)` consiga
redescobrir aproximadamente esses quatro perfis a partir só do comportamento.

Rode a partir da pasta aulas/13-segmentacao-clusterizacao/:

    uv run python exemplos/gerar_clientes.py

Isso (re)cria dados/clientes.csv. O arquivo já vem pronto no repositório; este
script existe para deixar registrado como ele foi feito e permitir recriá-lo.
"""

from pathlib import Path

import numpy as np
import pandas as pd

RNG = np.random.default_rng(42)  # semente fixa: o arquivo gerado é sempre o mesmo

# Cada perfil é uma função que sorteia `n` clientes. As colunas numéricas saem
# de distribuições normais com média/desvio por perfil, depois recortadas para
# faixas plausíveis. `categoria_preferida` e `canal_preferido` também variam
# por perfil, mas com bastante sobreposição, para não entregar o segmento.

CATEGORIAS = ["eletronicos", "moda", "casa", "mercado", "beleza"]
CANAIS = ["app", "site", "loja"]


def _normal(media, desvio, n, minimo, maximo):
    return np.clip(RNG.normal(media, desvio, n), minimo, maximo)


def fieis_alto_valor(n):
    return pd.DataFrame({
        "meses_como_cliente": _normal(46, 14, n, 12, 84).round(),
        "compras_12m": _normal(19, 5, n, 6, 40).round(),
        "dias_desde_ultima_compra": _normal(18, 12, n, 1, 70).round(),
        "gasto_total_12m": _normal(6800, 2400, n, 1500, 16000).round(-1),
        "ticket_medio": _normal(360, 110, n, 120, 800).round(),
        "pct_compras_com_cupom": _normal(0.08, 0.06, n, 0.0, 0.4).round(3),
        "abriu_email_mkt_pct": _normal(0.58, 0.14, n, 0.15, 0.95).round(3),
        "visitas_site_mes": _normal(15, 6, n, 2, 40).round(),
        "chamados_suporte_12m": _normal(1.0, 1.0, n, 0, 6).round(),
        "devolucoes_12m": _normal(0.6, 0.8, n, 0, 5).round(),
        "categoria_preferida": RNG.choice(CATEGORIAS, n, p=[0.34, 0.10, 0.34, 0.12, 0.10]),
        "canal_preferido": RNG.choice(CANAIS, n, p=[0.35, 0.55, 0.10]),
    })


def cacadores_promocao(n):
    return pd.DataFrame({
        "meses_como_cliente": _normal(22, 12, n, 3, 60).round(),
        "compras_12m": _normal(16, 5, n, 4, 40).round(),
        "dias_desde_ultima_compra": _normal(28, 16, n, 2, 90).round(),
        "gasto_total_12m": _normal(1900, 800, n, 400, 5000).round(-1),
        "ticket_medio": _normal(85, 30, n, 30, 200).round(),
        "pct_compras_com_cupom": _normal(0.72, 0.14, n, 0.3, 0.99).round(3),
        "abriu_email_mkt_pct": _normal(0.36, 0.12, n, 0.1, 0.7).round(3),
        "visitas_site_mes": _normal(11, 5, n, 2, 30).round(),
        "chamados_suporte_12m": _normal(2.4, 1.6, n, 0, 8).round(),
        "devolucoes_12m": _normal(2.6, 1.8, n, 0, 9).round(),
        "categoria_preferida": RNG.choice(CATEGORIAS, n, p=[0.08, 0.32, 0.10, 0.28, 0.22]),
        "canal_preferido": RNG.choice(CANAIS, n, p=[0.70, 0.22, 0.08]),
    })


def novos_pouco_engajados(n):
    return pd.DataFrame({
        "meses_como_cliente": _normal(4, 2.2, n, 1, 12).round(),
        "compras_12m": _normal(3, 1.6, n, 1, 8).round(),
        "dias_desde_ultima_compra": _normal(62, 28, n, 5, 150).round(),
        "gasto_total_12m": _normal(450, 260, n, 60, 1400).round(-1),
        "ticket_medio": _normal(160, 80, n, 40, 400).round(),
        "pct_compras_com_cupom": _normal(0.24, 0.14, n, 0.0, 0.6).round(3),
        "abriu_email_mkt_pct": _normal(0.14, 0.08, n, 0.0, 0.4).round(3),
        "visitas_site_mes": _normal(3, 1.8, n, 0, 10).round(),
        "chamados_suporte_12m": _normal(0.5, 0.7, n, 0, 4).round(),
        "devolucoes_12m": _normal(0.4, 0.6, n, 0, 3).round(),
        "categoria_preferida": RNG.choice(CATEGORIAS, n, p=[0.22, 0.22, 0.18, 0.18, 0.20]),
        "canal_preferido": RNG.choice(CANAIS, n, p=[0.30, 0.45, 0.25]),
    })


def risco_churn(n):
    return pd.DataFrame({
        "meses_como_cliente": _normal(38, 12, n, 14, 72).round(),
        "compras_12m": _normal(2, 1.4, n, 0, 6).round(),
        "dias_desde_ultima_compra": _normal(170, 55, n, 70, 330).round(),
        "gasto_total_12m": _normal(700, 420, n, 80, 2200).round(-1),
        "ticket_medio": _normal(150, 60, n, 40, 350).round(),
        "pct_compras_com_cupom": _normal(0.5, 0.18, n, 0.1, 0.9).round(3),
        "abriu_email_mkt_pct": _normal(0.07, 0.05, n, 0.0, 0.25).round(3),
        "visitas_site_mes": _normal(2, 1.4, n, 0, 8).round(),
        "chamados_suporte_12m": _normal(5.2, 2.2, n, 1, 12).round(),
        "devolucoes_12m": _normal(4.0, 2.0, n, 0, 10).round(),
        "categoria_preferida": RNG.choice(CATEGORIAS, n, p=[0.20, 0.20, 0.20, 0.20, 0.20]),
        "canal_preferido": RNG.choice(CANAIS, n, p=[0.25, 0.40, 0.35]),
    })


TAMANHOS = {
    fieis_alto_valor: 360,
    cacadores_promocao: 330,
    novos_pouco_engajados: 300,
    risco_churn: 220,
}


def main():
    partes = [gerar(n) for gerar, n in TAMANHOS.items()]
    df = pd.concat(partes, ignore_index=True)

    # embaralha as linhas, para os segmentos não ficarem em blocos no arquivo
    df = df.sample(frac=1, random_state=42).reset_index(drop=True)

    # tipos inteiros onde faz sentido
    inteiros = [
        "meses_como_cliente", "compras_12m", "dias_desde_ultima_compra",
        "gasto_total_12m", "ticket_medio", "visitas_site_mes",
        "chamados_suporte_12m", "devolucoes_12m",
    ]
    df[inteiros] = df[inteiros].astype(int)

    df.insert(0, "cliente_id", [f"C{n:05d}" for n in range(1, len(df) + 1)])

    ordem = [
        "cliente_id", "meses_como_cliente", "compras_12m",
        "dias_desde_ultima_compra", "gasto_total_12m", "ticket_medio",
        "categoria_preferida", "canal_preferido", "pct_compras_com_cupom",
        "abriu_email_mkt_pct", "visitas_site_mes", "chamados_suporte_12m",
        "devolucoes_12m",
    ]
    df = df[ordem]

    saida = Path(__file__).resolve().parent.parent / "dados" / "clientes.csv"
    df.to_csv(saida, index=False)
    print(f"{len(df)} clientes salvos em {saida}")


if __name__ == "__main__":
    main()
