FROM node:10.15
WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3000 3000

CMD ["npm", "run", "debug"]
