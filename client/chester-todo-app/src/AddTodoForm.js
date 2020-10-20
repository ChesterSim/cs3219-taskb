import React, { useState } from "react";
import api from "./api";

import { Input, Button } from "antd";

const AddTodoForm = ({ todoListRef }) => {
  const [todo, setTodo] = useState("");

  const onAddTodo = async event => {
    event.preventDefault();
    await api.addTodo(todo);
    setTodo("");
    todoListRef.current.getAllTodos();
  }

  return (
    <form style={styles.container} onSubmit={onAddTodo}>
      <label>Todo:</label>
      <Input style={styles.input} value={todo} onChange={(event) => setTodo(event.target.value)} />
      <Button type="primary" htmlType="submit">Add</Button>
    </form>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "30px 0px 20px 0px",
    width: 400
  },
  input: {
    width: 270
  }
}

export default AddTodoForm;