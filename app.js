"use strict";

const express = require('express');
const config = require('./config/config');
const APIManager = require('./managers/APIManager');

const app = express();
const port = process.env.PORT || config.server.port;

new APIManager(app);

app.listen(port, () => {
  console.log(`App listening on: http://localhost:${port}`);
});