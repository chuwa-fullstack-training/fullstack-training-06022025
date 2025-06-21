const express = require("express");
const companyRoutes = require("./routes/company");
const employeeRoutes = require("./routes/employee");
const mongoose = require("./connect");

const PORT = 3005;
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
