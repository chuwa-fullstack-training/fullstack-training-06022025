const express = require('express');
const app = express();
const port = 3000

const hw1Router = require('./routes/hw1');
const hw2Router = require('./routes/hw2');

app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = app;