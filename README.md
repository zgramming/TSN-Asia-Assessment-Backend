
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


# TSN Asia Assessment Backend

## Project Overview
TSN Asia Assessment Backend is a RESTful API service for managing assessment forms, questions, and responses. Built with Node.js, TypeScript, Express, Sequelize ORM, and PostgreSQL. The backend is fully dockerized and supports local development with path aliases using `tsx`.

## Tech Stack
- Node.js
- TypeScript
- Express.js
- Sequelize (ORM)
- PostgreSQL
- Docker & Docker Compose
- tsx (runtime for TypeScript)

## Getting Started (from scratch)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above)
- [PostgreSQL](https://www.postgresql.org/) (local or Docker)
- [Git](https://git-scm.com/)


### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/zgramming/TSN-Asia-Assessment-Backend.git
   cd TSN-Asia-Assessment-Backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Copy and configure environment variables:**
   ```sh
   cp .env.example .env
   # Edit .env with your database credentials and preferred settings
   ```

4. **Create the database manually:**
   - Open your PostgreSQL client (psql, PgAdmin, DBeaver, etc.)
   - Run the following command to create the database:
     ```sql
     CREATE DATABASE tsn-assessment;
     ```
   - Make sure your `.env` matches the database name and credentials.

5. **Run database migrations and seeders:**
   ```sh
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
   This will create the necessary tables and insert starter data.

6. **Start the backend server (with automatic reload):**
   ```sh
   npm run dev
   ```
   The server will run at `http://localhost:5000` (or the port specified in your `.env`).

### Troubleshooting
- Make sure your PostgreSQL server is running and accessible with the credentials in `.env`.
- If you use Docker, update your `.env` to use the Docker service name for `DB_HOST` (e.g., `db`).

## Useful Commands
- **Run migrations:** `npx sequelize-cli db:migrate`
- **Run all seeders:** `npx sequelize-cli db:seed:all`
- **Undo last migration:** `npx sequelize-cli db:migrate:undo`
- **Undo all seeders:** `npx sequelize-cli db:seed:undo:all`

## License
MIT
