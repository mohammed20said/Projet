FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]