import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const userRole = localStorage.getItem("role");
  //const userId = localStorage.getItem("pid");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const userId = localStorage.getItem("pid"); // Assuming you store userId in local storage
    if (userRole === "USER" && userId) {
      const results = await axios.get(
        `http://localhost:8093/api/v1/tasks/getAll/${userId}`
      );
      console.log(results.data);
      setTasks(results.data);
    } else {
      const results = await axios.get(
        `http://localhost:8093/api/v1/tasks/all/get`
      );
      console.log(results.data);
      setTasks(results.data);
    }
  };

  // const loadTasks = async () => {
  //   const results = await axios.get(`http://localhost:8093/api/v1/tasks/all`);
  //   setTasks(results.data);
  // };

  const deleteTask = async (tid) => {
    await axios.delete(`http://localhost:8093/api/v1/tasks/delete/${tid}`);
    loadTasks();
  };

  return (
    <div className="container py-4">
      <div className="row">
        {tasks.map((task, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Task {index + 1}</h5>
                <p className="card-text">User ID: {task.userId}</p>
                <p className="card-text">Course ID: {task.courseDto.cid}</p>
                <p className="card-text">Course Name: {task.courseDto.cname}</p>
                <p className="card-text">Task ID: {task.tid}</p>
                <p className="card-text">Start Date: {task.startDate}</p>
                <p className="card-text">End Date: {task.endDate}</p>
                <p className="card-text">Hours Per Day: {task.hrsPerdays}</p>
                <div className="btn-group">
                  <Link
                    className="btn btn-primary me-2"
                    to={`/viewtask/${task.userId}`}
                  >
                    View
                  </Link>
                  {userRole === "ADMIN" && (
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => deleteTask(task.tid)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {userRole === "ADMIN" && (
        <div className="text-center">
          <Link className="btn btn-warning mt-3" to="/addtask">
            Add Task
          </Link>
        </div>
      )}
    </div>
  );
}

export default Tasks;
