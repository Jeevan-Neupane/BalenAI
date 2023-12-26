# Finetuning the ResnetMobilenetV2

## Dataset

https://www.kaggle.com/datasets/vitaminc/cigarette-smoker-detection


## Training
- trained for 10 epochs on colab gpu T4.
- took about an hour
- got 65% accuracy on train set and 78% accuracy on val set


# Finetuning the YOLOV8

## Dataset 
https://universe.roboflow.com/yolo-uujhg/yolo-vljyh/dataset/

## Training
- used ultralytics wrapper to yolov8 for easier training and inference
- 90% accuracy
- took 3 hr to finetune


# FastAPI YOLO Server

A FastAPI server for processing video and image data using YOLO (You Only Look Once) object detection.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fastapi-yolo-server.git
   cd ai/server
   ```
   
2. Install dependencies
```python
pip install -r requirements.txt
```

3. Run fastapi server
```python
uvicorn main:app --reload
```


## Usage
Once the server is running, you can interact with it using HTTP requests. You can use tools like curl, httpie, or any programming language's HTTP library.

## Example:
### Greet Endpoint:

```bash
curl -X GET http://localhost:8000/greet
```
Response:
```hello```


### Process Video Endpoint:
```bash
curl -X POST -F "file=@/path/to/your/video.mp4" http://localhost:8000/process_video
This will process the uploaded video file using YOLO and return a streaming response with the detected objects.
```

### Process Image Endpoint:

```bash
curl -X POST -F "file=@/path/to/your/image.jpg" http://localhost:8000/process_image
This will process the uploaded image file and return a JSON response indicating if smoking is detected.
```