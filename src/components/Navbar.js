import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./users/Users";
import Courses from "./courses/Courses";
import Task from "./tasks/Task";
//import AddUser from "./components/users/AddUser";
//import Users from "./users/Users";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Learning Tracker System</div>
      <div className="nav-items">
        <Link className="btn btn-outline-light" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-light" to="/users" component={Users}>
          Users
        </Link>
        <Link className="btn btn-outline-light" to="/courses">
          Courses
        </Link>
        <Link className="btn btn-outline-light" to="/tasks">
          Tasks
        </Link>
        {/* <Routes>
          <Route>
          <Route  exact path="/" component={Home}/>
          <Route  path="/users" component={Users}/>
          <Route  path="/courses" component={Courses}/>
          <Route  path="/tasks" component={Task}/>
         </Route>
        </Routes> */}
      </div>
    </div>
  );
};

export default Navbar;
