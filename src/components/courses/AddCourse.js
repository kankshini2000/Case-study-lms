import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [courses, setCourses] = useState({
    cid: "",
    cname: "",
    courseCode: "",
    countTime: "",
    days: "",
  });

  const { cid, cname, courseCode, countTime, days } = courses;

  const onInputChange = (e) => {
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8091/api/v1/course/create`, courses);
    navigate("/courses");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Course</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              {/* <label htmlFor="CourseId" className="form-label">
                Course Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Id"
                name="courseId"
                value={courseId}
                onChange={(e) => onInputChange(e)}
              /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="CourseName" className="form-label">
                Course Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Name"
                name="cname"
                value={cname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CourseName" className="form-label">
                Course code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Name"
                name="courseCode"
                value={courseCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CourseTime" className="form-label">
                Course Count Time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Time"
                name="countTime"
                value={countTime}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CourseTime" className="form-label">
                Course Days
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course Time"
                name="days"
                value={days}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
