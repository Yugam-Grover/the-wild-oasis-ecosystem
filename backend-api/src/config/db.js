const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Wild-Oasis-api")
  .then(() => console.log("Connected to MongoDB via Mongoose successfully!"))
  .catch((err) => console.error("Mongoose connection error:", err));
