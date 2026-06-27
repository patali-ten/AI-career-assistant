import PyPDF2
from docx import Document
import io

def parse_cv(file_bytes: bytes, filename: str) -> str:
    """
    Takes raw file bytes and filename, returns plain text string.
    Supports PDF and DOCX formats.
    """
    text = ""
    
    if filename.endswith(".pdf"):
        reader = PyPDF2.PdfReader(io.BytesIO(file_bytes))
        for page in reader.pages:
            text += page.extract_text() or ""
    
    elif filename.endswith(".docx"):
        doc = Document(io.BytesIO(file_bytes))
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
    
    else:
        raise ValueError("Unsupported file type. Please upload PDF or DOCX.")
    
    return text.strip()