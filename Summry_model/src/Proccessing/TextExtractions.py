import fitz


def ExtractText(filePath: str):

    try:
        doc = fitz.open(filePath)

        txt_path = "D:/My_Learning/NeuroNotes/Summry_model/src/media/extracted.txt"
        extracted_text = ""

        for page in doc:
            extracted_text += page.get_text()

        doc.close()

        return extracted_text

    except Exception as e:
        print("server error : ", e)
