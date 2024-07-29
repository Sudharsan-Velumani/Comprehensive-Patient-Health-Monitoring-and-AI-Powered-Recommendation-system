import React, { useState } from "react";
import "./Diebetes-prediction.css";

const DiabetesPredictor = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heartDisease: "",
    smoking: "",
    bmi: "",
    hbg4: "",
    glucose: "",
  });

  const [predictionResult, setPredictionResult] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const genderNumeric = formData.gender === "male" ? 0 : formData.gender === "female" ? 1 : 2;
    const hypertensionNumeric = formData.hypertension === "yes" ? 1 : 0;
    const heartNumeric = formData.heartDisease === "yes" ? 1 : 0;
    let smokingNumeric;
    switch (formData.smoking) {
      case "never":
        smokingNumeric = 0;
        break;
      case "ever":
        smokingNumeric = 3;
        break;
      case "current":
        smokingNumeric = 1;
        break;
      case "not current":
        smokingNumeric = 2;
        break;
    }

    const preparedData = {
      gender: genderNumeric,
      age: parseInt(formData.age),
      hypertension: hypertensionNumeric,
      heart_disease: heartNumeric,
      smoking_history: smokingNumeric,
      bmi: parseFloat(formData.bmi),
      HbA1c_level: parseFloat(formData.hbg4),
      blood_glucose_level: parseFloat(formData.glucose),
    };

    fetch("http://localhost:5000/diabetes/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(preparedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prediction result:", data);
        setPredictionResult("Predicted Result: " + data.prediction);
        setRecommendation("Recommendation: " + data.recommendation);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      
      <div className="container">
        <h2 className="title">Diabetes Predictor</h2>
        <form id="diabetes-form" onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="gender" className="label">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="select"
            >
              <option value="">select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age" className="label">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Hypertension:</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="hypertension"
                  value="yes"
                  checked={formData.hypertension === "yes"}
                  onChange={handleChange}
                  className="radio-input"
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="hypertension"
                  value="no"
                  checked={formData.hypertension === "no"}
                  onChange={handleChange}
                  className="radio-input"
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="label">Heart Disease:</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="heartDisease"
                  value="yes"
                  checked={formData.heartDisease === "yes"}
                  onChange={handleChange}
                  className="radio-input"
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="heartDisease"
                  value="no"
                  checked={formData.heartDisease === "no"}
                  onChange={handleChange}
                  className="radio-input"
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="smoking" className="label">
              Smoking History:
            </label>
            <select
              name="smoking"
              id="smoking"
              value={formData.smoking}
              onChange={handleChange}
              className="select"
            >
              <option value="">select</option>
              <option value="never">Never</option>
              <option value="ever">Ever</option>
              <option value="current">Current</option>
              <option value="not current">Not current</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bmi" className="label">
              BMI:
            </label>
            <input
              type="number"
              step="any"
              name="bmi"
              id="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hbg4" className="label">
              Haemoglobin level (g/dL):
            </label>
            <input
              type="number"
              step="any"
              name="hbg4"
              id="hbg4"
              value={formData.hbg4}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="glucose" className="label">
              Glucose level (mg/dL):
            </label>
            <input
              type="number"
              step="any"
              name="glucose"
              id="glucose"
              value={formData.glucose}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Predict
          </button>
        </form>
        {predictionResult && (
          <div className="result">
            {predictionResult}
          </div>
        )}
        {recommendation && (
          <div className="recommendation">
            {recommendation}
          </div>
        )}
      </div>
    </>
  );
};

export default DiabetesPredictor;
