'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MOD 9: malacok-27');
});

app.listen(PORT);