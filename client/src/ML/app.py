from flask import Flask, request, jsonify, make_response
import pickle
import pandas as pd
from flask_cors import CORS
import logging

# Instantiate the app
app = Flask(__name__)

# Apply CORS to the entire app
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Load the model
try:
    model = pickle.load(open('model.pkl', 'rb'))
    app.logger.info("Model loaded successfully")
except Exception as e:
    app.logger.error(f"Error loading model: {e}")

@app.route('/')
def index():
    return "Welcome to the Diabetes Predictor API"

@app.route('/diabetes/predict', methods=['POST'])
def predict():
    try:
        # Parsing the incoming JSON data
        data = request.get_json()
        app.logger.debug(f"Received data: {data}")

        # Extracting the features
        features = [
            data['gender'],
            data['age'],
            data['hypertension'],
            data['heart_disease'],
            data['smoking_history'],
            data['bmi'],
            data['HbA1c_level'],
            data['blood_glucose_level']
        ]
        
        # Converting to DataFrame
        df = pd.DataFrame([features], columns=[
            'gender', 'age', 'hypertension', 'heart_disease',
            'smoking_history', 'bmi', 'HbA1c_level', 'blood_glucose_level'
        ])
        app.logger.debug(f"Data prepared for prediction: {df}")

        # Predicting the result
        prediction = model.predict(df)
        result = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'
        
        # Simple recommendation logic
        recom = 'You are already healthy!'
        if data['blood_glucose_level'] > 120:
            recom = 'Try controlling your carbs intake and lower down the calories'

        return make_response(jsonify({'prediction': result, 'recommendation': recom}))
    except Exception as e:
        app.logger.error(f"Error during prediction: {e}")
        return make_response(jsonify({'error': 'An error occurred during prediction'}), 500)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
