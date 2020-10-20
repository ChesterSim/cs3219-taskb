import React, { useRef } from 'react';
import { Layout } from "antd";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

function App() {
  const todoListRef = useRef();
  return (
    <Layout style={styles.container}>
      <Header style={styles.header}>Chester's Todo App</Header>
      <Content>
        <AddTodoForm todoListRef={todoListRef} />
        <TodoList ref={todoListRef} />
      </Content>
    </Layout >
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh"
  },
  header: {
    padding: 20,
    fontSize: 30,
    backgroundColor: "#000",
    color: "#fff"
  }
}

export default App;
