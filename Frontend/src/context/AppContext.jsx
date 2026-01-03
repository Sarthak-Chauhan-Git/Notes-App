import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allNotes, setallNotes] = useState([]);
  const fetchNotes = async () => {
    axios
      .get("http://localhost:8080/readNote")
      .then((res) => {
        setallNotes(res.data);
        console.log("notes data fetched from backend");
      })
      .catch((err) => console.error(err));
  };

  return (
    <AppContext.Provider
      value={{
        allNotes,
        setallNotes,
        fetchNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
