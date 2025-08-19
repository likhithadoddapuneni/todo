// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRoutes = require("./server/routes");
const cors = require("cors");
const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  credentials: true
}));
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", todoRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp") // change if using Mongo Atlas
  .then(() => {
    console.log("MongoDB connected");
    // Start server
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch((err) => console.log(err));
