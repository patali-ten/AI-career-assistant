from pydantic import BaseModel
from typing import List

class Resource(BaseModel):
    title: str
    url: str
    platform: str          # e.g. "Coursera", "YouTube"
    skill_covered: str

class SkillGap(BaseModel):
    skill: str
    importance: str        # "High", "Medium", "Low"
    resources: List[Resource]

class AnalysisResult(BaseModel):
    match_score: int                  # e.g. 72 (meaning 72% match)
    matched_skills: List[str]         # Skills you already have
    missing_skills: List[str]         # Skills the JD needs but CV lacks
    skill_gaps: List[SkillGap]        # Detailed gap info with resources
    roadmap: List[str]                # Step-by-step learning plan
    summary: str                      # One paragraph AI summary