import React, { useState } from "react";
import "./TeacherResults.css";

export default function TeacherResults() {
  const [results, setResults] = useState([
    { id: 1, teacher: "Dr. Ali", subject: "Mathematics", student: "Ahsan", marks: 85 },
    { id: 2, teacher: "Dr. Sana", subject: "Physics", student: "Hira", marks: 92 },
  ]);

  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  const [student, setStudent] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teacher || !subject || !student || !marks) {
      return alert("Please fill all fields");
    }

    const newResult = {
      id: Date.now(),
      teacher,
      subject,
      student,
      marks: parseInt(marks),
    };

    setResults([...results, newResult]);

    // reset
    setTeacher("");
    setSubject("");
    setStudent("");
    setMarks("");
  };

  const deleteResult = (id) => {
    setResults(results.filter((r) => r.id !== id));
  };

  return (
    <div className="results-container">
      <h1 className="results-title">📊 Teacher Results</h1>

      <div className="results-form">
        <h2>Add New Result</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Teacher name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
          <button type="submit">Add Result</button>
        </form>
      </div>

      <div className="results-list">
        <h2>Results List</h2>
        <ul>
          {results.length === 0 ? (
            <p>No results added yet.</p>
          ) : (
            results.map((r) => (
              <li key={r.id} className="result-item">
                <div>
                  <strong>{r.student}</strong> — {r.subject} ({r.teacher})  
                  <span className="marks"> Marks: {r.marks}</span>
                </div>
                <button onClick={() => deleteResult(r.id)} className="delete-btn">
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
