import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTask() {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTask = async () => {
      const result = await axios.get(
        `http://localhost:8093/api/v1/tasks/getAll/${userId}`
      );
      console.log(result);
      setTasks(result.data);
      console.log(tasks);
    };
    loadTask();
  }, [userId]);

  // useEffect(() => {
  //   // loadTask();
  // }, [tasks]);

  return (
    <div>
      {tasks.map((task, index) => (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Task Details</h2>
              {/* {tasks.map((task) => ( */}
              <div className="card" key={task.tid}>
                <div className="card-header">
                  Details of Task with Id : {task.userId}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>User Id:</b>
                      {task.userId}
                    </li>
                    <li className="list-group-item">
                      <b>Course Id:</b>
                      {task.courseDto.cid}
                    </li>
                    <li className="list-group-item">
                      <b>Course name:</b>
                      {task.courseDto.cname}
                    </li>
                    <li className="list-group-item">
                      <b>Task Id:</b>
                      {task.tid}
                    </li>
                    <li className="list-group-item">
                      <b>Start Date:</b>
                      {task.startDate}
                    </li>
                    <li className="list-group-item">
                      <b>End Date:</b>
                      {task.endDate}
                    </li>
                    <li className="list-group-item">
                      <b>Hours per Day:</b>
                      {task.hrsPerdays}
                    </li>
                  </ul>
                </div>
              </div>
              {/* ))} */}
              <Link className="btn btn-primary my-2" to={"/tasks"}>
                Back to Tasks
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
