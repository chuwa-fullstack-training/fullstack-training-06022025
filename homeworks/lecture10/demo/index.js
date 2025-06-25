const express = require("express");
const todoRoutes = require("./routes/todo");
const connectDB = require("./connect");
const path = require("path");

const PORT = 3005;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB and start server
async function startServer() {
  try {
    await connectDB(); // Connect to database

    // Routes
    app.use("/", todoRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
