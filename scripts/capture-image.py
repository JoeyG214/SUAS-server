from picamera2 import Picamera2, Preview
from datetime import datetime
import time
import os

images_directory = os.path.expanduser('~/web/SUAS-server/images')

if not os.path.exists('images'):
    os.makedirs(images_directory)

picam2 = Picamera2()
camera_config = picam2.create_preview_configuration()
picam2.configure(camera_config)
picam2.start_preview(Preview.QTGL)
picam2.start()
time.sleep(0.1) # 0.1 Sec preview before capture

# Takes hour, minute, second time image is captured 
timestamp = datetime.now().strftime('%H%M%S')

filename = f'../images/image_{timestamp}.jpg'
picam2.capture_file(filename)

# # If you simply want to capture an image, the following is sufficient
# from picamera2 import Picamera2
# picam2 = Picamera2()
# picam2.start_and_capture_file("test.jpg")