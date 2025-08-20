
# TSN Asia Assessment Backend

## Project Overview
TSN Asia Assessment Backend is a RESTful API service for managing assessment forms, questions, and responses. It provides endpoints to create, retrieve, and view details of assessments. The backend is built with Node.js, TypeScript, Express, Sequelize ORM, and PostgreSQL, and is fully dockerized for easy development and deployment.


## Tech Stack
- Node.js
- TypeScript
- Express.js
- Sequelize (ORM)
- PostgreSQL
- Docker & Docker Compose

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above)
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/zgramming/TSN-Asia-Assessment-Backend.git
   cd TSN-Asia-Assessment-Backend
   ```

2. **Copy and edit environment variables:**
   Edit the `.env` file as needed. Default values are provided for local development.

3. **Build and run with Docker Compose:**
   ```sh
   docker-compose up --build
   ```
   This will start both the backend service and a PostgreSQL database.

4. **Access the API:**
   The backend will be running at `http://localhost:5000` (or the port specified in `.env`).

### Manual Local Development (without Docker)

1. Install dependencies:
   ```sh
   npm install
   ```
2. Build TypeScript:
   ```sh
   npm run build
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Example API Usage

## Simple API Documentation

### Get All Assessments
**Endpoint:** `GET /api/assessment`
**Response:**
```json
[
   {
      "id": 1,
      "title": "Customer Satisfaction Survey",
      "description": "Survey for 2025 Q3",
      "createdAt": "2025-08-20T13:30:00.000Z"
   },
   // ...more assessments
]
```

### Get Assessment Detail
**Endpoint:** `GET /api/assessment/:id`
**Response:**
```json
{
   "id": 1,
   "title": "Customer Satisfaction Survey",
   "description": "Survey for 2025 Q3",
   "questions": [
      {
         "id": 101,
         "text": "How satisfied are you with our service?",
         "type": "rating",
         "options": [1, 2, 3, 4, 5]
      }
   ],
   "createdAt": "2025-08-20T13:30:00.000Z"
}
```

### Create Assessment
**Endpoint:** `POST /api/assessment`
**Request Body:**
```json
{
   "title": "Customer Satisfaction Survey",
   "description": "Survey for 2025 Q3",
   "questions": [
      {
         "text": "How satisfied are you with our service?",
         "type": "rating",
         "options": [1, 2, 3, 4, 5]
      }
   ]
}
```
**Response:**
```json
{
   "id": 1,
   "title": "Customer Satisfaction Survey",
   "description": "Survey for 2025 Q3",
   "questions": [
      {
         "id": 101,
         "text": "How satisfied are you with our service?",
         "type": "rating",
         "options": [1, 2, 3, 4, 5]
      }
   ],
   "createdAt": "2025-08-20T13:30:00.000Z"
}
```

## License

MIT
