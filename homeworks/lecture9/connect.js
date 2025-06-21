const mongoose = require("mongoose");

// Connect MongoDB
const uri =
  "mongodb+srv://zgeming:Eb7XJUbYdAN5mYJm@cluster0.prokdit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(uri, clientOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

module.exports = mongoose;
