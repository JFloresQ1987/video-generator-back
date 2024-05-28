FROM node:20.13-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4242
CMD [ "npm", "start" ]