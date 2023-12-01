import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const results = await axios.get("http://localhost:8090/api/v1/user/getAll");
    // console.log(results.data);
    setUsers(results.data);
  };

  const deleteUser = async (pid) => {
    await axios.delete(`http://localhost:8090/api/v1/user/del/${pid}`);
    loadUsers();
  };

  return (
    <div classNameName="container">
      {/* margin top */}
      <div classNameName="py-20">
        <table className="table border shadow">
          <button className="btn btn-outline-light">Add User</button>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">User Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{users.uname}</td>
                <td>{users.email}</td>
                <td>{users.role}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${users.pid}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${users.pid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(users.pid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-warning" to="/adduser">
          Add User
        </Link>
      </div>
    </div>
  );
}

export default User;
