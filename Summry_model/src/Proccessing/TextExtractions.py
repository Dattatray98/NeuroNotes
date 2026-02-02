import fitz # type: ignore
import os
import string
import random


def ExtractText(filePath: str):

    try:
        doc = fitz.open(filePath)

        chars = string.ascii_letters + string.digits

        random_string = "".join(random.choices(chars, k=10))

        txt_path = (
            f"D:/My_Learning/NeuroNotes/Summry_model/src/media/{random_string}.txt"
        )

        os.makedirs(os.path.dirname(txt_path), exist_ok=True)

        extracted_text = ""

        for page in doc:
            extracted_text += page.get_text()

        doc.close()

        print("Writing file to:", txt_path)
        extracted_text.replace("\\n", " ")

        file = open(txt_path, 'a+', encoding="utf-8")

        print(extracted_text)

        line_text = ""
        for line in extracted_text:
            line_text += line

        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(line_text)

        print("✅ File written successfully")

        return extracted_text

    except Exception as e:
        print("server error : ", e)
        raise
