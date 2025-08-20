// server/routes.js
const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  login,
  signup
} = require("./controllers");
const authMiddleware = require("./authMiddleware");
// Routes
router.post("/todos", authMiddleware, createTodo);
router.get("/todos",authMiddleware, getTodos);
router.put("/todos/:id", authMiddleware, updateTodo);
router.delete("/todos/:id",authMiddleware, deleteTodo);
router.post("/signup", signup);
router.post("/login", login);


module.exports = router;
