import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 University MS</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/management">Management</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/students/list">Student List</Link></li>
        <li><Link to="/teacher/results">Teacher Results</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
