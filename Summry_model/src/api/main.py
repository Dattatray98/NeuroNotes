from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from src.Proccessing.downloadFile import DownloadFile
from src.Proccessing.TextExtractions import ExtractText
import os



app = FastAPI()


class item(BaseModel):
    url: str
    filename: str


@app.get("/")
def read_root():
    return {"hello": "world"}


@app.post("/summary")
def GenerateSummary(item: item):

    file_path = DownloadFile(item.url, item.filename)

    print(item.url)

    extracted_text = ExtractText(file_path)
    os.remove(file_path)

    return {"message": "fiel is recieved", "text": extracted_text}
