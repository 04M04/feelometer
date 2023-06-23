from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()
feeling: str = "⚡️"

class FeelingUpdate(BaseModel):
    feeling: str

@app.get("/")
async def index():
    return {"message": "Hello World"}

@app.get("/feeling")
async def root():
    return {"feeling": feeling}

@app.put("/feeling/update")
async def create_or_update_feeling(feeling_update: FeelingUpdate) -> str:
    global feeling
    feeling = feeling_update.feeling
    return feeling

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, log_level="info")
