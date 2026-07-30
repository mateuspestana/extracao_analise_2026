import csv


with open("data/publicacoes_exemplo.csv", encoding="utf-8", newline="") as arquivo:
    leitor = csv.DictReader(arquivo)
    linhas = list(leitor)
    colunas = leitor.fieldnames or []

print("Arquivo: publicacoes_exemplo.csv")
print(f"Linhas de dados: {len(linhas)}")
print(f"Colunas: {', '.join(colunas)}")
