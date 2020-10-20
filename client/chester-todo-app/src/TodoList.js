import React, { useEffect, useState, useImperativeHandle } from "react";
import api from "./api";

import Todo from "./Todo";
import { Modal, Input } from "antd";

const TodoList = React.forwardRef((props, ref) => {
  const [todos, setTodos] = useState([]);
  const [isEditModalVisible, setEditModalVisibility] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedId, setEditedId] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      getAllTodos
    }),
    [],
  )

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    const retrievedTodos = await api.getTodos();
    setTodos(retrievedTodos);
  }

  const onComplete = (id) => async () => {
    await api.completeTodo(id);
    getAllTodos();
  }

  const renderTodos = () => {
    return todos.map(todo =>
      <Todo
        todo={todo}
        key={todo.id}
        onComplete={onComplete(todo.id)}
        setEditedDescription={setEditedDescription}
        setEditedId={setEditedId}
        setEditModalVisibility={setEditModalVisibility}
        onConfirmEdit={onConfirmEdit}
      />
    )
  };

  const onConfirmEdit = async () => {
    await api.editTodo(editedId, editedDescription);
    setEditModalVisibility(false);
    setEditedDescription("");
    setEditedId("");
    getAllTodos();
  }

  return (
    <>
      <Modal
        title="Edit todo"
        visible={isEditModalVisible}
        centered
        onOk={onConfirmEdit}
        onCancel={() => setEditModalVisibility(false)}
      >
        <Input value={editedDescription} onChange={event => setEditedDescription(event.target.value)} />
      </Modal>
      {renderTodos()}
    </>
  );
})

export default TodoList;