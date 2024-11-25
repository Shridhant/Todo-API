require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const mongoose = require("mongoose");

dbconnect = mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application on error
  });

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  dbconnect,
  todo,
};
