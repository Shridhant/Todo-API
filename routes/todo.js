const express = require("express");

const {
  add,
  all,
  getTask,
  markCompleted,
  editTask,
  deleteTask,
} = require("../controllers/todo.controller");

const router = express.Router();

router.get("/bulk", all);

router.get("/:id", getTask);

router.post("/", add);

router.put("/:id", editTask);

router.put("/:id/complete", markCompleted);

router.delete("/:id", deleteTask);

module.exports = router;
