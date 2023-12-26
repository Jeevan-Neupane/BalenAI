from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
import cv2
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import run_yolo_detection, classify_image

app = FastAPI()

@app.get("/greet")
def greet():
    return "hello"

@app.post("/process_video")
async def process_video_endpoint(file: UploadFile = File(...)):
    # Save the uploaded video file asynchronously
    async with open("input_video.mp4", "wb") as video_file:
        video_file.write(await file.read())
    
    # Run YOLO detection asynchronously
    output_path = await run_yolo_detection("input_video.mp4", save_output=True)

    async def iterfile():
        async with open(output_path, mode="rb") as file_like:
            yield await file_like.read()
    
    return StreamingResponse(iterfile(), media_type="video/mp4")

@app.post("/process_image")
async def process_image(file: UploadFile = File(...)):
    content = await file.read()
    is_smoking = classify_image(content)
    return {"is_smoking": is_smoking}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
