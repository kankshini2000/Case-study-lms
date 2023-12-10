import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCourse() {
  let navigate = useNavigate();

  const { cid } = useParams();

  const [courses, setCourses] = useState({
    cid: "",
    cname: "",
    courseCode: "",
    countTime: "",
    days: "",
  });

  const { cname, countTime, courseCode, days } = courses;

  const onInputChange = (e) => {
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8091/api/v1/course/update/${cid}`,
      courses
    );
    navigate("/courses");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8091/api/v1/course/get/${cid}`
    );
    setCourses(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Course</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">
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
              <label htmlFor="courseTime" className="form-label">
                Course Time
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
              <label htmlFor="courseTime" className="form-label">
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
            <Link className="btn btn-outline-danger mx-2" to="/courses">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
