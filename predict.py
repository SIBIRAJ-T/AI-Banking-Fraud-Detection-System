from flask import Blueprint, request, jsonify
import joblib
import numpy as np

predict_routes = Blueprint('predict', __name__)

model = joblib.load("ml/model.pkl")

@predict_routes.route('/predict', methods=['POST'])
def predict():
    data = request.json

    features = np.array([[
        data['amount'],
        data['location'],
        data['time']
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "fraud": bool(prediction)
    })