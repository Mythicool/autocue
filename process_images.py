from rembg import remove
from PIL import Image
import os

images = [
    "certifiedoremium.png",
    "checkemblem.png",
    "clipboard.png",
    "dollarsign.png",
    "handshake.png",
    "logo.png",
    "route66.png",
    "satisfaction.png"
]

base_path = "public/images"

for img_name in images:
    input_path = os.path.join(base_path, img_name)
    if os.path.exists(input_path):
        print(f"Processing {img_name}...")
        try:
            input_image = Image.open(input_path)
            output_image = remove(input_image)
            output_image.save(input_path)
            print(f"Successfully processed {img_name}")
        except Exception as e:
            print(f"Failed to process {img_name}: {e}")
    else:
        print(f"File not found: {input_path}")
