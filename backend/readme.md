
# Backend Documentation

This document provides an overview of the backend for our application developed using Node.js, Express.js, and MongoDB.

## Technologies Used

- **Node.js:** A JavaScript runtime for server-side development.
- **Express.js:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing and retrieving data.

## Project Structure
    backend/
    |-- controllers/
    |-- models/
    |-- routes/
    |-- index.js
    |-- .env
    |-- package.json


- **controllers:** Contains the controllers for handling business logic.
- **models:** Defines MongoDB schema and models.
- **routes:** Defines API routes.
- **index.js:** Entry point of the application.
- **.env:** Configuration file for environment variables.
- **package.json:** Project metadata and dependencies.

## Getting Started

1. **Clone the Repository:**
   ```bash
    git clone https://github.com/Jeevan-Neupane/BalenAI.git
    cd BalenAI/backend/
    ```
2.**Install Dependencies:**

   ```bash
    npm install
```
3.**Set Environment Variables:**

Create a .env file and set the following variables:

   ```bash
    PORT=8000
    MONGODB_URI=mongodb://localhost:27017/your-database
```


4.**Run the Application:**

   ```bash
    npm start
```
The server will be running at http://localhost:3000.