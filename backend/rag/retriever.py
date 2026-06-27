from backend.rag.vectorstore import get_vectorstore

def retrieve_resources(skill: str, k: int = 3):
    """
    Given a skill name, find the top k most relevant courses from ChromaDB.
    """
    vectorstore = get_vectorstore()
    results = vectorstore.similarity_search(skill, k=k)
    
    resources = []
    for doc in results:
        resources.append({
            "title": doc.metadata.get("title", ""),
            "url": doc.metadata.get("url", ""),
            "platform": doc.metadata.get("platform", ""),
            "skill_covered": skill
        })
    return resources