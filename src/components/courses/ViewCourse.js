import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCourse() {
  const [courses, setCourse] = useState({
    cid: "",
    cname: "",
    courseCode: "",
    countTime: "",
    days: "",
  });

  const { cid } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8091/api/v1/course/get/${cid}`
    );
    setCourse(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Course Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Course with Id : {courses.cid}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Course Id:</b>
                  {courses.cid}
                </li>
                <li className="list-group-item">
                  <b>Course Name:</b>
                  {courses.cname}
                </li>
                <li className="list-group-item">
                  <b>Course Code:</b>
                  {courses.courseCode}
                </li>
                <li className="list-group-item">
                  <b>Course Time:</b>
                  {courses.countTime}
                </li>
                <li className="list-group-item">
                  <b>Course Days:</b>
                  {courses.days}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/courses"}>
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
