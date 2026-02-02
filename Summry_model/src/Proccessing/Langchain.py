from langchain_community.document_loaders import TextLoader # type: ignore
from langchain_chroma import Chroma #type: ignore
from langchain_openai import OpenAIEmbeddings #type: ignore
from langchain_text_splitters import RecursiveCharacterTextSplitter  #type: ignore

def AskLoop():
    loader = TextLoader("D:/My_Learning/NeuroNotes/Summry_model/src/media/nrSZkTGB2x.txt")
    docs = loader.load()

    text_spliter = RecursiveCharacterTextSplitter(
        chunk_size=100,
        chunk_overlap=20,
        length_function=len,
    )

    chunks = text_spliter.split_text(docs)

    for i in chunks:
        print(i)