// import { useAppContext } from "../context/AppContext";
import {postItsData} from '../users';

const Note = () => {
  const notes = postItsData;
  console.log(notes)

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-6 md:grid-cols-6 gap-4 mx-auto'>
        {notes && notes.map((n, i) => (
          <div key={i} className='flex-shrink-0 w-40 h-full shadow rounded-lg bg-gray-200 p-4 mb-4 mr-4 font-reenieBeane'>
            <p className='font-bold text-xl'>{n.username}</p>
            <p className='text-xl font-medium text-gray-600'>{n.text}</p>
            <p className='text-gray-800'>{n.country}</p>
            <p className='text-gray-800'>{n.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
