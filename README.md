# Comprehensive Patient Health Monitoring and AI-Powered Patient Recommendation System

This project is a Comprehensive Patient Health Monitoring and AI-Powered Patient Recommendation System built using the MERN stack (MongoDB, Express, React, Node.js). The system allows real-time patient management, provides AI-driven health recommendations, and supports scalable RESTful API operations.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)


## Features

- Admin management (Add, Update, Delete)
- Patient management (Add, Update, Delete)
- Doctor management (Add, Update, Delete)
- Appointment scheduling
- Dashboard with key performance indicators (KPIs) and analytics
- Real-time patient data input and monitoring
- AI-powered health recommendations
- JWT authentication and authorization
- User-friendly interface with React
- Secure backend with Node.js and Express
- Scalable database with MongoDB

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js, Flask (for AI model integration)
- **Database:** MongoDB
- **Authentication:** JWT


## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB
- Python (for AI model training)

## Installation
1. Clone the repository:
   
   git clone https://github.com/Sudharsan-Velumani/Comprehensive-Patient-Health-Monitoring-and-AI-Powered-Recommendation-system.git
   cd CPHM

2. Install the server dependencies:

    cd server
    npm install

3. Install the client dependencies:

    cd ../client
    npm install

4. Install the Flask server dependencies:

    cd ../ML
    pip install -r requirements.txt 

5. Set up environment variables:
   Create a .env file in the server directory and add the following:

    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>


## Usage

1. Start the backend server:

    cd server
    npm start

2. Start the frontend server:

    cd ../client
    npm start

3. Start the Flask server:

    cd ../ML
    python app.py

4. Open your browser and navigate to http://localhost:3000.


## API Endpoints

Here are some of the main API endpoints available in the system:
 
  - Please check the Postman API Collection folder for API Endpoints


## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

