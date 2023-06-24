from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()
# feeling: str = "⚡️"
# feeling_count: int = 0

class feeling_model(BaseModel):
    feeling: str
    feeling_count: int

feeling_state : feeling_model = {"feeling": "⚡️", "feeling_count": 0}

@app.get("/")
async def index():
    return {"message": "Hello World"}

@app.get("/feeling")
async def root():
    # global feeling_state
    return feeling_state

@app.put("/feeling/update")
async def create_or_update_feeling(feeling_update: feeling_model) -> feeling_model:
    global feeling_state
    feeling_state = feeling_update
    return feeling_state

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, log_level="info")
