import tensorflow as tf 
import numpy as np
import cv2
import subprocess



model = tf.keras.models.load_saved("smoking_classifier.h5")
best_weights = "best.pt"
def run_yolo_detection(video_source: str, save_output: bool = False) -> str:
    """
    Run YOLOv3 object detection on a video source using the specified model.

    Args:
        best_weights (str): Path to the YOLOv3 model file.
        video_source (str): Path or URL of the video source.
        save_output (bool): Whether to save the detection output. Default is False.

    Returns:
        str: Output of the YOLOv3 detection command.
    """
    save_flag = "--save" if save_output else ""

    yolo_command = f"!yolo detect predict model={best_weights} source={video_source} {save_flag}"

    try:
        result = subprocess.run(yolo_command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        return e.stderr

def classify_image(image_content: bytes) -> bool:
    """
    Classify the image content to determine if smoking is detected.

    Args:
        image_content (bytes): The binary content of the image.

    Returns:
        bool: True if smoking is detected, False otherwise.
    """
    image_content = prep_image()
    is_smoking = model.predict(image_content)
    return is_smoking

def prep_image(image_content, img_shape=224, scale=True):
  """
  Reads in an image from file_content, turns it into a tensor and reshapes into
  (224, 224, 3).

  Parameters
  ----------
  filecontent(byte)): file content
  img_shape (int): size to resize target image to, default 224
  scale (bool): whether to scale pixel values to range(0, 1), default True
  """
  # Read in the image
  # Decode it into a tensor
  img = tf.image.decode_jpeg(image_content)
  # Resize the image
  img = tf.image.resize(img, [img_shape, img_shape])
  img = np.expand_dims(img, axis=0)
  if scale:
    # Rescale the image (get all values between 0 and 1)
    return img/255.
  else:
    return img