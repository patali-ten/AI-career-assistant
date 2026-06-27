from fastapi import APIRouter, UploadFile, File, HTTPException
from backend.parsers.cv_parser import parse_cv

router = APIRouter()

@router.post("/upload-cv")
async def upload_cv(file: UploadFile = File(...)):
    if not file.filename.endswith((".pdf", ".docx")):
        raise HTTPException(status_code=400, detail="Only PDF and DOCX files are supported.")
    
    file_bytes = await file.read()
    cv_text = parse_cv(file_bytes, file.filename)
    
    return {"cv_text": cv_text}