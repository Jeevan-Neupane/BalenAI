from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
import cv2
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

@app.get("/greet")
def greet():
    return "hello"

def process_video(input_path):
    # Open the video file
    cap = cv2.VideoCapture(input_path)

    # Create a VideoWriter object to save the output video
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    output_path = 'output.mp4'
    out = cv2.VideoWriter(output_path, fourcc, 20.0, (int(cap.get(3)), int(cap.get(4))))

    # Process each frame
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Perform some processing on the frame (you can replace this with your own processing)
        processed_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Write the processed frame to the output video
        out.write(processed_frame)

    # Release resources
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    return output_path

@app.post("/process_video")
async def process_video_endpoint(file: UploadFile = File(...)):
    print(file)
    # Save the uploaded video file
    with open("input_video.mp4", "wb") as video_file:
        video_file.write(file.file.read())
    print(video_file)
    # # Process the video
    # output_path = process_video("input_video.mp4")
    output_path = "output1.mp4"
    # Return the processed video as a response
    # return StreamingResponse(video_file, media_type="video/mp4")
    # return {"message": "hello"}
    def iterfile():  # 
        with open(output_path, mode="rb") as file_like:  # 
            yield from file_like  # 
    print(iterfile())
    return StreamingResponse(iterfile(), media_type="video/mp4")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

