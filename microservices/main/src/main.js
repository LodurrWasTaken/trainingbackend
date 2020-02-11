const express = require('express');
const cors = require('cors');
require('./knex');
const controllers = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.use(controllers);

app.listen(3000, () => console.log('[INFO]: main server listening on 3000'));
