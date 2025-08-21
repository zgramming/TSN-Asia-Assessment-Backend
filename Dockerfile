FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Running multiple commands : build, migrate, undo-seed, seed
CMD npm run build && \
    npm run migrate && \
    npm run undo-seed && \
    npm run seed && \
    npm start