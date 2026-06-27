import os
import sys
from dotenv import load_dotenv

# 1. Dynamically find project root path and append to sys.path
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(PROJECT_ROOT)

# 2. Boot up environment configuration immediately
load_dotenv(os.path.join(PROJECT_ROOT, ".env"))

# 3. Safe to import project modules now that the environment is hydrated
from backend.rag.ingest import ingest_courses

if __name__ == "__main__":
    print("🌱 Seeding ChromaDB with course knowledge base...")
    try:
        ingest_courses()
        print("✨ Done! ChromaDB is successfully ready.")
    except Exception as e:
        print(f"❌ Execution failed during ingestion: {e}")
        sys.exit(1)