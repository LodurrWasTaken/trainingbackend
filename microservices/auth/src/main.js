const express = require('express');
require('./knex');
const controllers = require('./controllers');
const RedisService = require('./services/redis.service');

RedisService.connect();

const app = express();
app.use(express.json());

app.use(controllers);

app.listen(4000, () => console.log('[INFO]: auth server listening on 4000'));
