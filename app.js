const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const todosRouter = require("./controllers/todos");

mongoose.connect("mongodb://127.0.0.1:27017/todo-app", // 27017 is the default port for MongoDB
  { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("Connected to local MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err.message));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todosRouter);

module.exports = app;