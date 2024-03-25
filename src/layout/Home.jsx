import { useState } from "react";
import Note from '../components/Note';
// import NoteForm from "../components/NoteForm";
import {useAppContext} from '../context/AppContext';
// import { supabase } from "../supabaseClient";


const Home = () => {
  const {notes} = useAppContext()
  // console.log(supabase)

    // Estilos para el modal
    // const customStyles = {
    //   content: {
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)',
    //     backgroundColor: 'white', 
    //     border: 'none', 
    //     borderRadius: '10px', 
    //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //     maxWidth: '80%', 
    //     maxHeight: '80%', 
    //     overflow: 'auto', 
    //     transition: 'transform 0.9s ease-in-out',
    //   },
    //   overlay: {
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    //   },
    // };

  return (
    <div className="bg-[#5b7c99a9] max-w-full mx-auto h-screen flex justify-center items-center">
      <div className="relative w-full h-full p-10">
        <Note notes={notes} />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
