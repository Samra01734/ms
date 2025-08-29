import React from "react";
import "./Home.css"; // custom css

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🎓 Welcome to University Management System</h1>
        <p>Manage Students, Teachers, and Results all in one place</p>
      </header>

      <section className="home-sections">
        <div className="card">
          <h2>👩‍🎓 Students</h2>
          <p>Register new students and manage student records.</p>
        </div>
        <div className="card">
          <h2>👨‍🏫 Teachers</h2>
          <p>View and manage teacher’s results and performance.</p>
        </div>
        <div className="card">
          <h2>🏫 Management</h2>
          <p>University-wide management and administration tools.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
