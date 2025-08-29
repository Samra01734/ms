import React from "react";
import StudentForm from "./StudentForm";
import "./Management.css";

export default function Management() {
  return (
    <div className="management-container">
      <div className="management-card">
        <h1 className="management-title">📋 Management Dashboard</h1>
        <p className="management-subtitle">
          Manage students, teachers, and other university data from here.
        </p>

        <div className="form-section">
          <h2>➕ Add New Student</h2>
          <StudentForm />
        </div>
      </div>
    </div>
  );
}
