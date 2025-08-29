import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <AppContext.Provider value={{ students, setStudents }}>
      {children}
    </AppContext.Provider>
  );
};
