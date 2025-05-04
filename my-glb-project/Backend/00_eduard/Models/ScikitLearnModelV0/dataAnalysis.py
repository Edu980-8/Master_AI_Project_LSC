import os
from PIL import Image
import matplotlib.pyplot as plt
from collections import defaultdict
import numpy as np
import pandas as pd
import seaborn as sns
import kagglehub

# Descargar la última versión del dataset
path = kagglehub.dataset_download("danielrey96/colombian-sign-language-lsc-alphabet")
print("Path to dataset files:", path)

stats = defaultdict(list)

# Recorremos las carpetas principales del dataset
for folder in os.listdir(path):
    folder_path = os.path.join(path, folder)

    if not os.path.isdir(folder_path):
        continue

    # Recorremos las carpetas de cada letra
    for letter in os.listdir(folder_path):
        letter_path = os.path.join(folder_path, letter)

        if not os.path.isdir(letter_path):
            continue

        # Recorremos las imágenes de cada letra
        for img_name in os.listdir(letter_path):
            if not img_name.endswith('.jpg'):
                continue

            img_path = os.path.join(letter_path, img_name)

            try:
                with Image.open(img_path) as img:
                    img = img.convert("L")  # Escala de grises
                    img_array = np.array(img)

                    stats['section'].append(folder)      # Sección: 'Todas'
                    stats['letter'].append(letter)       # Letra: 'A', 'B', etc.
                    stats['width'].append(img.width)
                    stats['height'].append(img.height)
                    stats['mean'].append(np.mean(img_array))
                    stats['std'].append(np.std(img_array))

            except Exception as e:
                print(f"Error procesando {img_path}: {e}")

# Convertimos a DataFrame
df = pd.DataFrame(stats)
print(df.head())

# Estadísticas generales
print("\nTotal de imágenes:", len(df))
print("\nCantidad de imágenes por letra:\n", df['letter'].value_counts().sort_index())
print("\nTamaño promedio (px):\n", df[['width', 'height']].mean())
print("\nIntensidad media global:", df['mean'].mean())
print("Desviación estándar global:", df['std'].mean())

# Histograma de intensidades medias
plt.figure(figsize=(10, 5))
plt.hist(df['mean'], bins=50, color='skyblue', edgecolor='black')
plt.title("Distribución de intensidades medias por imagen")
plt.xlabel("Intensidad media (0–255)")
plt.ylabel("Frecuencia")
plt.grid(True)
plt.tight_layout()
plt.show()

# Estilo bonito de gráficos
sns.set(style="whitegrid")

plt.figure(figsize=(14, 6))
sns.boxplot(x='letter', y='mean', data=df, palette="Set3")

plt.title("Distribución de intensidades medias por letra")
plt.xlabel("Letra del alfabeto")
plt.ylabel("Intensidad media (0–255)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
