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
let mongoDbUri;
if (process.env.ENVIRONMENT === "DEVELOPMENT") {
  mongoDbUri = "mongodb://127.0.0.1:27017/todo-app"; // 27017 is the default port for MongoDB
} else {
  mongoDbUri = process.env.MONGOD_URI;
}

mongoose.connect(mongoDbUri,
  { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log(`Connected to ${process.env.ENVIRONMENT} MongoDB`))
  .catch(err => console.log("Error connecting to MongoDB:", err.message));

app.get('/', () => {
  return `<h1>Chester Sim!</h1>`
})
app.use('/api/todos', todosRouter);

module.exports = app;