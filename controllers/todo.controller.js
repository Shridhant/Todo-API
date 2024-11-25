const { todo } = require("../models/db");
const { z, string, boolean } = require("zod");
const mongoose = require("mongoose");

const todoModel = z.object({
  title: string().max(30),
  description: string(),
  completed: boolean().optional().default(false),
  category: string(),
});

const add = async function (req, res) {
  try {
    const body = req.body;

    const check = todoModel.safeParse(body);
    if (!check.success) {
      return res
        .status(400)
        .json({ msg: "Invalid inputs!", errors: check.error.errors });
    }

    await todo.create({
      title: body.title,
      description: body.description,
      completed: false,
      category: body.category,
    });

    res.json({ msg: "Todo created" });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

const all = async (req, res) => {
  try {
    const response = await todo.find();
    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No todos found" });
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid task ID format" });
    }

    const task = await todo.findById(id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

const markCompleted = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid task ID format" });
    }

    const task = await todo.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    task.completed = !task.completed;
    await task.save();

    res.json({ msg: "Task updated", task });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid task ID format" });
    }

    const updatedData = req.body;

    const task = await todo.findByIdAndUpdate(id, updatedData, { new: true });
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task updated", task });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid task ID format" });
    }

    const task = await todo.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

module.exports = {
  add,
  all,
  getTask,
  markCompleted,
  editTask,
  deleteTask,
};
