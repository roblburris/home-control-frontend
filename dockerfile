FROM node:10
WORKDIR /Users/RL/Documents/csprojects/react-website

COPY package*.json ./
RUN npm install -g
COPY . .
EXPOSE 3000

RUN npm install --save-dev typescript @types/react @types/node

CMD [ "npm", "run", "dev" ]
