import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

function User() {
  const [users, setUsers] = useState([]);
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const results = await axios.get("http://localhost:8090/api/v1/user/getAll");
    setUsers(results.data);
  };

  const deleteUser = async (pid) => {
    await axios.delete(`http://localhost:8090/api/v1/user/del/${pid}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-3">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.uname}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">User Role: {user.role}</p>
                  <div className="btn-group">
                    <Link
                      className="btn btn-primary me-2"
                      to={`/viewuser/${user.pid}`}
                    >
                      View
                    </Link>
                    {userRole === "ADMIN" && (
                      <>
                        <Link
                          className="btn btn-outline-primary me-2"
                          to={`/edituser/${user.pid}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger me-2"
                          onClick={() => deleteUser(user.pid)}
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
            <Link className="btn btn-warning d-inline-block" to="/adduser">
              Add User
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
