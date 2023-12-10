import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

function Courses() {
  const [courses, setCourses] = useState([]);
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const results = await axios.get(
      `http://localhost:8091/api/v1/course/getAll`
    );
    console.log(results.data);
    setCourses(results.data);
  };

  const deleteCourse = async (cid) => {
    await axios.delete(`http://localhost:8091/api/v1/course/del/${cid}`);
    loadCourses();
  };

  return (
    <div className="container">
      <div className="py-3">
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.cname}</h5>
                  <p className="card-text">Course Code: {course.courseCode}</p>
                  <p className="card-text">Course Days: {course.days}</p>
                  <p className="card-text">Course Time: {course.countTime}</p>
                  <div className="btn-group">
                    <Link
                      className="btn btn-primary me-2"
                      to={`/viewcourse/${course.cid}`}
                    >
                      View
                    </Link>
                    {userRole === "ADMIN" && (
                      <>
                        <Link
                          className="btn btn-outline-primary me-2"
                          to={`/editcourse/${course.cid}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger me-2"
                          onClick={() => deleteCourse(course.cid)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {userRole === "ADMIN" && (
          <div className="container text-center">
            <Link className="btn btn-warning d-inline-block" to="/addcourse">
              Add Course
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
