import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const EditTodo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id, taskname, taskstatus } = location.state;
  const [fulltaskname, setFullTaskname] = useState(taskname || "");
  const [fulltaskstatus, setFullStatus] = useState(taskstatus || "");
  const editUpdateTask = async (event) => {
    event.preventDefault();
    const insertTask = {
      taskname: fulltaskname,
      taskstatus: fulltaskstatus,
    };
    let response = await axios.put(
      `http://localhost:3003/users/${id}`,
      insertTask
    );
    if (response.status === 200) {
      navigate("/todolist");
    }
  };

  return (
    <div className="add-todo-task">
      <h1 className="head">Edit Task</h1>
      <Form onSubmit={editUpdateTask}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            name="fulltaskname"
            value={fulltaskname}
            onChange={(event) => setFullTaskname(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status of Task"
            name="fulltaskstatus"
            value={fulltaskstatus}
            onChange={(event) => setFullStatus(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditTodo;
