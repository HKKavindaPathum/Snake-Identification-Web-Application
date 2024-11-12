from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image as keras_image
from PIL import Image
import io
from snake_info import snake_data  # Importing snake data

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load your trained model
model = tf.keras.models.load_model('D:/my project/Code/Snake-Identification-Web-Application/backend/trained_model.h5')

@app.route('/api/upload', methods=['POST'])
def upload_image():
    # Check if an image file is included in the request
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Read the image file
    img = Image.open(file.stream).convert('RGB')

    # Resize the image to the target size (256x256)
    img = img.resize((256, 256))

    # Convert the image to a numpy array
    img_array = keras_image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Predict using the model
    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions, axis=1)[0]

    # Debugging output for predictions
    print(f"Raw prediction values: {predictions}")
    print(f"Predicted class index: {predicted_class_index}")

    # Get snake information from snake_data based on the predicted class index
    snake_info = snake_data.get(predicted_class_index, {"name": "Unknown", "venom": "Unknown", "region": "Unknown", "danger_level": "Unknown"})

    return jsonify({"snake": snake_info})

if __name__ == '__main__':
    app.run(debug=True)
