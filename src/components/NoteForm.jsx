import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const NoteForm = () => {
  const { addNote } = useAppContext();
  const [newNoteText, setNewNoteText] = useState("");
  const [newNoteUsername, setNewNoteUsername] = useState("");
  // set color options modal
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const colorOptions = ["#ffffff", "#ff7f0e", "#2ca02c", "#1f77b4", "#d62728"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newNoteText || !newNoteUsername) return null;

    // Usar la función addNote desestructurada
    addNote({
      text: newNoteText,
      username: newNoteUsername,
      color: selectedColor,
    });

    setNewNoteText("");
    setNewNoteUsername("");
    setSelectedColor("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-sm rounded-lg p-4 shadow-lg flex flex-col">
             </Dialog.Trigger>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-8 text-gray-900 shadow">
        <Dialog.Title className="font-bold text-lg mb-1">Crear Post-It</Dialog.Title>
        <Dialog.Description className="mb-4 text-sm">
          Make changes to your profile.
        </Dialog.Description>
        <fieldset className="flex-col gap-3">
          <label className="mb-2 font-normal text-xs px-4">
            Nombre
          </label>
          <input placeholder="Ingresar tu nombre completo" />
        </fieldset>
          {/* <div className="flex items-center justify-between mb-5">
            <Dialog.Title className="font-medium m-0 text-lg">Mi Post-It</Dialog.Title>
            <button className="text-gray-400 hover:text-gray-500">
              <Cross2Icon />
            </button>
          </div> */}
        </Dialog.Content>
      </Dialog.Root>
    </form>
  );
};

export default NoteForm;
