from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def detectDrops(sentences,embeddings, threshold=0.4):
    drop_points = []
    chunks = []
    current_chunk = [sentences[0]]

    for i in range(len(sentences) - 1):
        similarity = cosine_similarity(
            embeddings[i].reshape(1, -1),
            embeddings[i+1].reshape(1, -1)
        )[0][0]

        if similarity < threshold:
            drop_points.append({
                "index":i,
                "similarity":similarity,
                "transition": f"Sentence {i} to Sentence {i+1}"
            })

            chunks.append(current_chunk)
            current_chunk = [sentences[i+1]]
        else:
            current_chunk.append(sentences[i+1])
    
    if current_chunk:
        chunks.append(current_chunk)
    

    return chunks

