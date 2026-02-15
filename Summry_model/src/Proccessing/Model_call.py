from pydantic import BaseModel
import ollama
from typing import List

class Topic(BaseModel):
    topic_name: str
    search_keyword: List[str]

class Unit(BaseModel):
    unit_name : str
    unit_topics: List[Topic]
    unit_summary: str

class Course(BaseModel):
    cousre_code: str
    cousre_name: str
    unit: List[Unit]
    course_summary: str

class ExtractInfo(BaseModel):
    course: List[Course]

text_path = 'D:/My_Learning/NeuroNotes/Summry_model/src/media/Yz3hf5cjQT.txt'

result = []
with open(text_path, "r", encoding="utf-8") as f:
    Text = f.read()


response = ollama.chat(
    model="llama3",
    messages=[{
        "role": "user",
        'content': f"extract the following structure : {Text}"
    }],
    format=ExtractInfo.model_json_schema(),
    options={
        "temperature" : 0
    }
)



data = ExtractInfo.model_validate_json(response.message.content)
print(data)