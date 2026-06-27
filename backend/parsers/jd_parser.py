import re

def parse_jd(raw_text: str) -> str:
    """
    Cleans and normalizes job description text.
    Removes excessive whitespace, special characters, etc.
    """
    # Remove multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', raw_text)
    # Remove non-printable characters
    text = re.sub(r'[^\x20-\x7E\n]', '', text)
    return text.strip()