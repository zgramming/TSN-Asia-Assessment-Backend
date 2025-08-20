
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

2. Copy `.env.example` to `.env` and adjust values as needed:
   ```sh
   cp .env.example .env
   # Edit .env with your preferred values
   ```

3. Build TypeScript:
   ```sh
   npm run build
   ```

4. Start the server:
   ```sh
   npm start
   ```

The backend will be running at `http://localhost:5000` (or the port specified in your `.env`).

## License

MIT
