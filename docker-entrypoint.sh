#!/bin/sh
# Wait for the database to be ready
until npx sequelize-cli db:migrate; do
  echo "Waiting for database migrations to succeed..."
  sleep 2
done
npx sequelize-cli db:seed:all
npm run dev
