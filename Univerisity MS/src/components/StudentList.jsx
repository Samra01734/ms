import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./StudentList.css";

const StudentList = () => {
  const { students, setStudents } = useContext(AppContext);

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="student-list">
      <h2 className="list-title">Students</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((s) => (
            <li key={s.id} className="student-item">
              <div className="student-info">
                <p className="student-name">{s.name}</p>
                <p className="student-details">
                  {s.email} | {s.degree} | {s.course}
                </p>
              </div>
              <button onClick={() => deleteStudent(s.id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentList;
