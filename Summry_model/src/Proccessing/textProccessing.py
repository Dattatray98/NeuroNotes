import os
import string
import random
import re
import unicodedata
import nltk
from nltk.tokenize import sent_tokenize
from embeddings import CreateEmbeddings

nltk.download('punkt_tab')

text_path = 'D:/My_Learning/NeuroNotes/Summry_model/src/media/ZCXyrloaxu.txt'

class TextProcessing:
    def __init__(self, txt_path=text_path):
        self.txt_path = txt_path
        self.text = ""
        self.sentences = []

    def read_text(self):
        with open(self.txt_path, "r", encoding='utf-8') as f:
            self.text = f.read()

    def clean_text(self):
        self.text = unicodedata.normalize("NFKC", self.text)
        self.text = re.sub(r'(\w+)-\n(\w+)', r'\1\2', self.text)
        self.text = re.sub(r'(?<!\n)\n(?!\n)', ' ', self.text)
        self.text = re.sub(r'\[\d+\]', '', self.text)
        self.text = re.sub(r'http\S+', '', self.text)
        self.text = re.sub(r'\s+', ' ', self.text).strip()

    
    def embeddings(self):
        sentences = sent_tokenize(self.text)
        CreateEmbeddings(sentences)
        self.sentences.append(sentences)

    
    def Save_Text(self):     
        chars = string.ascii_letters + string.digits
        random_string = "".join(random.choices(chars, k=10))

        txt_path = (
            f"D:/My_Learning/NeuroNotes/Summry_model/src/media/{random_string}.txt"
        )

        for text in self.sentences:
            open(txt_path, 'a', encoding='utf-8').write(text + '\n')



if __name__ == "__main__":
    TP = TextProcessing()
    TP.read_text()
    TP.clean_text()
    TP.Save_Text()
    TP.embeddings()
