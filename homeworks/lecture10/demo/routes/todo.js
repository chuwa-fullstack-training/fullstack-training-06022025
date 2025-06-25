const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// Render all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.render("index", { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Create a new todo
router.post("/api/todos", async (req, res) => {
  try {
    const { title, priority } = req.body;
    const newTodo = new Todo({
      title,
      priority: priority || "medium",
    });
    await newTodo.save();
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// Toggle todo status
router.put("/api/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a todo
router.delete("/api/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
