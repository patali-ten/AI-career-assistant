from langchain_google_genai import ChatGoogleGenerativeAI
from backend.config import GEMINI_API_KEY, GEMINI_MODEL
import json

llm = ChatGoogleGenerativeAI(model=GEMINI_MODEL, google_api_key=GEMINI_API_KEY)

def extract_jd_skills(jd_text: str) -> dict:
    prompt = f"""
    You are an expert technical recruiter. Analyze this job description and extract requirements.
    
    Return ONLY a valid JSON object with this exact structure:
    {{
        "required_skills": ["skill1", "skill2"],
        "preferred_skills": ["skill3"],
        "role_title": "Data Scientist",
        "seniority": "Entry Level"
    }}
    
    JOB DESCRIPTION:
    {jd_text}
    """
    
    response = llm.invoke(prompt)
    raw = response.content.strip().replace("```json", "").replace("```", "")
    return json.loads(raw)