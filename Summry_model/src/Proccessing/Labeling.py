import ollama
import json

def get_labeling(chunks):
    labels = {}
    batch_size = 16

    for i in range(0, len(chunks), batch_size):
        batch = chunks[i: i+ batch_size]

        formated_input = "\n".join([f"ID {idx}: {text[:200]}" for idx, text in enumerate(batch, start=i)])

        prompt = f"""
        Provide a 10-word semantic label for each text ID below. 
        Return ONLY a JSON object where the key is the ID and label_value is label and text is input text.
        Texts:
        {formated_input}
        """

        response = ollama.chat(
            model="llama3",
            messages=[{
                'role': 'user',
                'content': prompt,
            }],
            format='json'
        )

        batch_labels = json.loads(response.message.content)
        labels.update(batch_labels)

    return labels