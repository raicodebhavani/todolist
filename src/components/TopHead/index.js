import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const TopHead = () => {
  return (
    <div>
      <div className="todo-header">
        <h1>Todo List</h1>
        <div>
          <ul className="listing">
            <li>
              <Link className="link-list" to="/todolist">
                App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
