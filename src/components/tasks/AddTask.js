import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddTask() {
  let navigate = useNavigate();

  const [tasks, setTasks] = useState({
    startDate: "",
    endDate: "",
    hrsPerdays: "",
  });

  const { startDate, endDate, hrsPerdays } = tasks;

  const onInputChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedCourse);
    console.log(selectedUser);
    try {
      await axios.post(
        `http://localhost:8093/api/v1/tasks/${selectedUser}/${selectedCourse}`,
        tasks
      );
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
    navigate("/tasks");
  };

  // List of Users
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8090/api/v1/user/getAll"
        );
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // List of Courses
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8091/api/v1/course/getAll"
        );
        setCourseList(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSelectCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              {/* User Dropdown */}
              <label htmlFor="userDropdown" className="form-label">
                Select a User:
              </label>
              <select
                id="userDropdown"
                value={selectedUser}
                onChange={handleSelectChange}
                className="form-control"
              >
                <option value="">Select a User</option>
                {userList.map((user) => (
                  <option key={user.pid} value={user.pid}>
                    {user.uname}
                  </option>
                ))}
              </select>

              {selectedUser && (
                <div className="mt-2">
                  <h4>
                    <b>User Details</b>
                  </h4>
                  <p>User ID: {selectedUser}</p>
                </div>
              )}
            </div>
            <div className="mb-3">
              {/* Course Dropdown */}
              <label htmlFor="courseDropdown" className="form-label">
                Select a Course:
              </label>
              <select
                id="courseDropdown"
                value={selectedCourse}
                onChange={handleSelectCourse}
                className="form-control"
              >
                <option value="">Select a Course</option>
                {courseList.map((course) => (
                  <option key={course.cid} value={course.cid}>
                    {course.cname}
                  </option>
                ))}
              </select>

              {selectedCourse && (
                <div className="mt-2">
                  <h4>Course Details</h4>
                  <p>Course ID: {selectedCourse}</p>
                </div>
              )}
            </div>
            <div className="mb-3">
              {/* Start Date */}
              <label htmlFor="StartDate" className="form-label">
                Start Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              {/* End Date */}
              <label htmlFor="EndDate" className="form-label">
                End Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter End Date"
                name="endDate"
                value={endDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              {/* Hours Per Day */}
              <label htmlFor="Hours Per Day" className="form-label">
                Hours Per Day
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Hours Per Day"
                name="hrsPerdays"
                value={hrsPerdays}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-center">
              {/* Submit Button */}
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/Tasks">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
