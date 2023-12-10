// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  useLocation();

  const userRole = localStorage.getItem("role");
  const pid = localStorage.getItem("pid");
  const uname = localStorage.getItem("uname");
  console.log(userRole);
  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("pid");
    localStorage.removeItem("uname");
    // Redirect to the login page or any other desired page after logout
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <div className="logo">Learning Tracker System</div>
      <div className="nav-items">
        <Link className="btn btn-outline-light" to="/">
          Home
        </Link>
        {userRole === "ADMIN" && (
          <>
            <Link className="btn btn-outline-light" to="/users">
              Users
            </Link>
            <Link className="btn btn-outline-light" to="/courses">
              Courses
            </Link>
            <Link className="btn btn-outline-light" to="/tasks">
              Tasks
            </Link>
          </>
        )}
        {userRole === "USER" && (
          <Link className="btn btn-outline-light" to="/tasks">
            Tasks
          </Link>
        )}
        {!userRole ? (
          <Link className="btn btn-outline-light" to="/login">
            Login
          </Link>
        ) : (
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
