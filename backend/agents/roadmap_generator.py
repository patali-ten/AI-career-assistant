from langchain_google_genai import ChatGoogleGenerativeAI
from backend.config import GEMINI_API_KEY, GEMINI_MODEL
import json

llm = ChatGoogleGenerativeAI(model=GEMINI_MODEL, google_api_key=GEMINI_API_KEY)

def generate_roadmap(missing_skills: list, role_title: str) -> list:
    prompt = f"""
    You are a career coach. A student is applying for a "{role_title}" role.
    They are missing these skills: {', '.join(missing_skills)}
    
    Create a realistic week-by-week learning roadmap for the next 8 weeks.
    Return ONLY a JSON array of strings, each being one week's goal.
    Example: ["Week 1: Learn Python basics - variables, loops, functions", "Week 2: ..."]
    
    Return 8 items maximum.
    """
    
    response = llm.invoke(prompt)
    raw = response.content.strip().replace("```json", "").replace("```", "")
    return json.loads(raw)