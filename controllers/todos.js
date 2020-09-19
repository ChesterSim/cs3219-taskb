const todosRouter = require("express").Router();
const Todo = require("../models/todo");

// let tempTodo = [{ description: "hello", id: 1 }];

todosRouter.get("/", async (request, response) => {
  const todos = await Todo
    .find({});

  response.status(200).json(todos);
})

todosRouter.post("/", async (request, response) => {
  const { description } = request.body;
  const newTodo = new Todo({ description });
  const savedTodo = await newTodo.save();
  response.status(201).json(savedTodo.toJSON()); // HTTP Status code for "Created"
})

todosRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  await Todo.findByIdAndRemove(id);
  response.status(204).end(); // HTTP Status code for "No Content" returned
})

todosRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { description } = request.body;

  const savedTodo = await Todo.findByIdAndUpdate(id, { description }, { new: true });
  response.status(201).json(savedTodo.toJSON());
})

module.exports = todosRouter;