import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/users/Users";
import Courses from "./components/courses/Courses";
import AddCourse from "./components/courses/AddCourse";
import ViewCourse from "./components/courses/ViewCourse";
import EditCourse from "./components/courses/EditCourse";
import AddUser from "./components/users/AddUser";
import Footer from "./components/footer/Footer";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";
import AddTask from "./components/tasks/AddTask";
import ViewTask from "./components/tasks/ViewTask";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:pid" element={<EditUser />} />
        <Route exact path="/viewuser/:pid" element={<ViewUser />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exactl path="/addcourse" element={<AddCourse />} />
        <Route exact path="/editcourse/:cid" element={<EditCourse />} />
        <Route exact path="/viewcourse/:cid" element={<ViewCourse />} />
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/addtask" element={<AddTask />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/viewtask/:userId" element={<ViewTask />} />
        <Route exact path="/user-dashboard" element={<UserDashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
