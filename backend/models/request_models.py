from pydantic import BaseModel

class AnalyzeRequest(BaseModel):
    cv_text: str           # The extracted text from the CV
    job_description: str   # The raw job description text