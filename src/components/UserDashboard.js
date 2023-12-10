// UserDashboard.js
import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const uname = localStorage.getItem("uname");
  return (
    <div className="container mt-5">
      <h2 className="text-center">User Dashboard</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome, {uname}</h5>
              <p className="card-text">You have access to Tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
