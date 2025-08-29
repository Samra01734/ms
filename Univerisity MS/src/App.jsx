import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Management from "./components/Management";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import TeacherResults from "./components/TeacherResults";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";  // 👈 import

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/students" element={<StudentForm />} />
        <Route path="/students/list" element={<StudentList />} />
        <Route path="/teacher/results" element={<TeacherResults />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppProvider>
  );
}
