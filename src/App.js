import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/users/Users";
import Courses from "./components/courses/Courses";
import Task from "./components/tasks/Task";
import AddUser from "./components/users/AddUser";
import Footer from "./components/footer/Footer";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:pid" element={<EditUser />} />
        <Route exact path="/viewuser/:pid" element={<ViewUser />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
