from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

import ollama 


class prompt(BaseModel):
    prompt: str

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/askneo")
def AskNeo(prompt: prompt):

    response = ollama.generate(
        model="llama3",
        prompt=prompt.prompt
    )

    return {response["response"]}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
