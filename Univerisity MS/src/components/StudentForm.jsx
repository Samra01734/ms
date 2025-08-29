import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./StudentForm.css";

export default function StudentForm() {
  const { students, setStudents } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !degree || !course) {
      return alert("Please fill all fields");
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      degree,
      course,
    };

    setStudents([...students, newStudent]);

    // reset fields
    setName("");
    setEmail("");
    setDegree("");
    setCourse("");
  };

  return (
    <div className="student-form-wrapper">
      <div className="student-form-card">
        <h2>📘 Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Degree</label>
            <input
              type="text"
              placeholder="Enter degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              placeholder="Enter course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
