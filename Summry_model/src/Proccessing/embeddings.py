from sentence_transformers import SentenceTransformer
from SimilarityDrop import detectDrops
from Labeling import get_labeling
import random
import string
import sqlite3



connection = sqlite3.connect(r"D:\My_Learning\NeuroNotes\Summry_model\src\media\index.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Chunks(
id INTEGER PRIMARY KEY,
chunk_label TEXT,
chunk_text TEXT
)
""")


def UploadChunks(labels, chunks):
    for i in labels:
        cursor.execute('INSERT INTO Chunks (chunk_label) VALUES (?)', (labels[i]))
    
    for i in chunks:
        cursor.execute('INSERT INTO Chunks (chunk_text) VALUES (?)', (chunks[i]))


def CreateEmbeddings(Text: any):

    model = SentenceTransformer("all-MiniLM-L6-v2")

    embeddings = model.encode(Text, batch_size=32, show_progress_bar=True)

    drop_points = detectDrops(Text, embeddings)

    labels = get_labeling(drop_points)

    print(f"Number of embeddings: {len(embeddings)}")
    print(f"Dimensions per embedding: {embeddings[0].shape}")
    print(f"chunks len : {len(drop_points)}")
    # print(f"chunks : {drop_points}")
    print(f"lebles len :{len(labels)}")
    print(f"labels : {labels}")

    # UploadChunks(labels, drop_points)/
    chars = string.ascii_letters + string.digits

    random_string = "".join(random.choices(chars, k=10))

    txt_path = f"D:/My_Learning/NeuroNotes/Summry_model/src/media/{random_string}.txt"

    return embeddings
