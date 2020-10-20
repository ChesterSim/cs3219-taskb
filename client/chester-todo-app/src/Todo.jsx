import React from "react";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";

const Todo = ({
  todo,
  onComplete,
  setEditedDescription,
  setEditedId,
  setEditModalVisibility,
}) => {

  const openEditModal = () => {
    setEditedDescription(todo.description);
    setEditedId(todo.id);
    setEditModalVisibility(true);
  }

  return (
    <div style={styles.container}>
      <div>
        {todo.description}
      </div>
      <div style={styles.actions}>
        <div onClick={onComplete} style={styles.icon}>
          <CheckCircleOutlined style={{ color: "#4DE377", fontSize: 20 }} />
        </div>
        <div onClick={openEditModal} style={styles.icon}>
          <EditOutlined style={{ color: "#56B3D0", fontSize: 20 }} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: 400,
    padding: "15px 0px",
    borderStyle: "solid",
    borderWidth: "0px 0px 1px 0px",
    borderColor: "#fff"
  },
  actions: {
    display: "flex",
    marginLeft: 10,
    width: 70,
    justifyContent: "space-between"
  },
  icon: {
    cursor: "pointer"
  }
}

export default Todo;