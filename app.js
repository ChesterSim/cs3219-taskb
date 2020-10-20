require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const todosRouter = require("./controllers/todos");

app.use(cors());
app.use(bodyParser.json());

// Database setup
const mongoDbUri = process.env.ENVIRONMENT === "DEVELOPMENT"
  ? "mongodb://127.0.0.1:27017/todo-app" // 27017 is the default port for MongoDB
  : process.env.MONGOD_URI;
mongoose.connect(mongoDbUri,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log(`Connected to ${process.env.ENVIRONMENT} MongoDB`))
  .catch(err => console.log("Error connecting to MongoDB:", err.message));

// APIs
app.use(express.static('build'));
// app.use("/", express.static(path.join(__dirname, 'build'));
app.use("/api/todos", todosRouter);

module.exports = app;