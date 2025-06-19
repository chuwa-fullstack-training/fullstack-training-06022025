const express = require("express");
const hw1Router = require("./hw1");
const hw2Router = require("./hw2");
const app = express();

const PORT = 3003;
app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
