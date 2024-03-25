import "../App.css";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons";

const Header = () => {
  // const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className="flex flex-col justify-center items-center text-center p-6 header">
      <h1 className="text-3xl font-bold font-montserrat">
        Agrega tu{' '}<span className="text-indigo-500">Post-It</span>{' '}para que los
        demás lo puedan ver.
      </h1>
          <button className="bg-[#457099] text-white mt-4 shadow py-2 px-3 shadow-lg text-sm rounded-md font-montserrat font-medium">
            Crear mi Post-It
            {/* <PlusCircledIcon/> */}
          </button>
    </header>
  );
};

export default Header;
