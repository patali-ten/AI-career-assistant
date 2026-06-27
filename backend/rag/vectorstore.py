from langchain_chroma import Chroma
from backend.rag.embeddings import get_embedding_model
from backend.config import CHROMA_DB_PATH

def get_vectorstore():
    return Chroma(
        collection_name="career_resources",
        embedding_function=get_embedding_model(),
        persist_directory=CHROMA_DB_PATH
    )