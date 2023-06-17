from picamera2 import Picamera2, Preview
from datetime import datetime
import glob
#import shutil
import time
import os

# Specifies directory where captured images are stored
images_directory = os.path.expanduser('~/web/SUAS-server/images')

def remove_files_in_dir(directory):
    files = glob.glob(f'{directory}')
    for file in files:
        os.remove(file)

remove_files_in_dir(images_directory)

# # Removes directory if exists
# if os.path.exists(images_directory):
#     shutil.rmtree(images_directory)

# # Creates directory if exists
# if not os.path.exists(images_directory):
#     os.makedirs(images_directory)

# Camera intiialization, configuration, and preview
picam2 = Picamera2()
camera_config = picam2.create_preview_configuration()
picam2.configure(camera_config)
picam2.start_preview(Preview.QTGL)

# Start capturing, 0.1 Sec preview before capture
picam2.start()
time.sleep(0.1)

# Takes hour, minute, second time image is captured 
timestamp = datetime.now().strftime('%H%M%S')

# Stores file
filename = f'../images/image_{timestamp}.jpg'
picam2.capture_file(filename)

# # If you simply want to capture an image, the following is sufficient
# from picamera2 import Picamera2
# picam2 = Picamera2()
# picam2.start_and_capture_file("test.jpg")