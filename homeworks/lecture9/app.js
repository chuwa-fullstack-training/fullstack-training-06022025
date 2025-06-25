const express = require("express");
const companyRoutes = require("./routes/company");
const employeeRoutes = require("./routes/employee");
const connectDB = require("./connect");

const PORT = 3005;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB and start server
async function startServer() {
  try {
    await connectDB(); // Connect to database

    // Routes
    app.use("/", companyRoutes);
    // app.use("/", employeeRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
