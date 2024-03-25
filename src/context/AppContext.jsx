import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // Función para obtener las Notas
  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase.from("notas").select("*");
      if (error) {
        setError(error.message);
        console.log("Error al obtener las notas", error.message);
      } else {
        setError("");
        setNotes(data || []);
      }
    } catch {
      setError(error.message);
      console.error("Error al obtener las notas", error.message);
    }
  };

  // Función para agregar una nueva nota
  const addNote = async (newNote) => {
    try {
      const { data, error } = await supabase.from("notas").insert([newNote]);
      if (error) {
        setError(error.message);
        console.error("Error al agregar la nota:", error.message);
      } else {
        setError("");
        setNotes([...notes, data[0]]); // Agrega la nueva nota al estado de notas
      }
    } catch (error) {
      setError(error.message);
      console.error("Error al agregar la nota:", error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Almacenar el nombre de usuario en localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log("Nombre de usuario almacenado en localStorage:", storedUsername);
    if(storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Almacenar las notas en localStorage
  useEffect(() => {
    localStorage.item('notes', JSON.stringify(notes)); 
  }, [notes]);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     initializeUser(session);
  //   });

  //   const storedCountryCode = localStorage.getItem("countryCode");
  //   if (storedCountryCode && storedCountryCode !== "undefined")
  //     setCountryCode(storedCountryCode);
  //   else getLocation();

  // }, []);

  return (
    <AppContext.Provider
      value={{ username, setUsername, notes, addNote, error}}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
