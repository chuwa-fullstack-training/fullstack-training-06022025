/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3004;

const userController = require("./controller");

// Set up view engine
app.set("view engine", "pug");
app.set("views", "./views");

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up controller
app.get("/", userController.renderHomePage);
app.post("/create-post", userController.submitContent);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
