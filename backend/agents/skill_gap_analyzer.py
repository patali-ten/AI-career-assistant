def analyze_gaps(cv_data: dict, jd_data: dict) -> dict:
    cv_skills = set(s.lower() for s in cv_data.get("skills", []))
    required = jd_data.get("required_skills", [])
    preferred = jd_data.get("preferred_skills", [])
    
    matched = []
    missing = []
    gaps = []
    
    all_jd_skills = required + preferred
    
    for skill in all_jd_skills:
        if skill.lower() in cv_skills:
            matched.append(skill)
        else:
            missing.append(skill)
            importance = "High" if skill in required else "Medium"
            gaps.append({"skill": skill, "importance": importance})
    
    total = len(all_jd_skills)
    match_score = int((len(matched) / total) * 100) if total > 0 else 0
    
    return {
        "match_score": match_score,
        "matched_skills": matched,
        "missing_skills": missing,
        "gaps": gaps
    }