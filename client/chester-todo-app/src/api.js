import axios from "axios";
const todoApiUrl = "/api/todos";

const getTodos = async () => {
  return axios.get(todoApiUrl)
    .then(res => res.data)
    .catch(err => err)
}

const completeTodo = async id => {
  console.log("Deleting ID:", id);
  return axios.delete(`${todoApiUrl}/${id}`);
}

const editTodo = async (id, description) => {
  return axios.put(`${todoApiUrl}/${id}`, {
    description
  })
}

const addTodo = async description => {
  return axios.post(todoApiUrl, { description });
}

export default {
  getTodos,
  completeTodo,
  editTodo,
  addTodo
}