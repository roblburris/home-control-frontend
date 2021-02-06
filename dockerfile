FROM node:10
WORKDIR /Users/RL/Documents/csprojects/home-control/home-frontend

COPY package*.json ./
RUN npm install -g
COPY . .
EXPOSE 3000

RUN npm install --save-dev typescript @types/react @types/node
RUN npm run build

CMD [ "npm", "run", "start"]
