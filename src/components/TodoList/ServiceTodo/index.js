import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";

const ServiceTodo = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // const getTask = async () => {
    //   let response = await axios.get("http://localhost:3003/users");
    //   setTask(response.data);
    // };
    // getTask();
  }, []);
  const getTask = async () => {
    let response = await axios.get("http://localhost:3003/users");
    setTask(response.data);
  };
  getTask();
  const onDelete = async (id) => {
    let response = await axios.delete(`http://localhost:3003/users/${id}`);
    if (response.status === 200) {
      getTask();
    }
  };

  return (
    <div className="get-todo-con">
      <Button className="but" onClick={() => navigate("/addtask")}>
        Add Task
      </Button>

      {task.length > 0 ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>S No.</th> */}
              <th>Task Name</th>
              <th>Task Status</th>
              <th>Edit Task</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {task.map((each, index) => (
              <tr key={index}>
                {/* <td>{each.id}</td> */}
                <td>{each.taskname}</td>
                <td>{each.taskstatus}</td>
                <td>
                  <Button
                    className="btn btn-success"
                    onClick={() =>
                      navigate(`/edittodo/${each.id}`, {
                        state: {
                          id: each.id,
                          taskname: each.taskname,
                          taskstatus: each.taskstatus,
                        },
                      })
                    }
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => onDelete(each.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No Tasks Found</h1>
      )}
    </div>
  );
};

export default ServiceTodo;
