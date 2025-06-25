const mongoose = require("mongoose");

// Connect MongoDB
const uri =
  "mongodb+srv://zgeming:Eb7XJUbYdAN5mYJm@cluster0.prokdit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
