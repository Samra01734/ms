import React from "react";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import TeacherResults from "../components/TeacherResults";
import "./Management.css"; // Import the custom CSS

const Management = () => {
  return (
    <div className="management-container">
      <div className="student-section">
        <h2 className="section-title">Student Management</h2>
        <StudentForm />
        <StudentList />
      </div>
      <div className="teacher-section">
        <h2 className="section-title">Teacher Results</h2>
        <TeacherResults />
      </div>
    </div>
  );
};

export default Management;
