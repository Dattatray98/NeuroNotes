from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from Proccessing.downloadFile import DownloadFile


app = FastAPI()


class item(BaseModel):
    url: str
    filename: str





@app.get("/")
def read_root():
    return {"hello": "world"}



@app.post("/summary")
def GenerateSummary(item:item):
    print(item.url)
    print(item.filename)

    DownloadFile(item.url, item.filename)
    
    return {"message":"fiel is recieved"}
