import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AddTodo = () => {
  const navigate = useNavigate();
  const [taskname, setTaskname] = useState("");
  const [taskstatus, setStatus] = useState("");

  const createPostAddTask = async (event) => {
    event.preventDefault();
    const insertTask = {
      taskname: taskname,
      taskstatus: taskstatus,
    };
    let response = await axios.post("http://localhost:3003/users", insertTask);
    if (response.status === 201) {
      navigate("/todolist");
    }
  };

  return (
    <div className="add-todo-task">
      <h1 className="head">Add Task</h1>
      <Form onSubmit={createPostAddTask}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            name="taskname"
            onChange={(event) => setTaskname(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status of Task"
            name="taskstatus"
            onChange={(event) => setStatus(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
