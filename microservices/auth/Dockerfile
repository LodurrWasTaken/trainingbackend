FROM node:10.15
WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 4000 4000

CMD ["npm", "run", "debug"]
