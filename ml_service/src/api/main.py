from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

import ollama  # type: ignore
import torch 


class prompt(BaseModel):
    prompt: str

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/askneo")
def AskNeo(prompt: prompt):
    print(prompt)
    torch.device("cuda")
    torch.cuda.empty_cache()

    first_prompt = f"from this given text {prompt} find all the course names without missing and give as it is course name, just copy paste name nad list the all subject in this given text."

    first_response = ollama.generate(
        model="llama3",
        prompt=prompt.prompt
    )

    second_prompt = f"by using these courses, keywords, Keywords : {first_response.response}, find the unit topics for each course  from this text : {prompt} and give in good structure format like this \"course name bold, unit name semibold, and unit topics \" "

    second_response = ollama.generate(
        model="llama3",
        prompt=second_prompt
    )

    print(second_response.response)
    return second_response.response

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
