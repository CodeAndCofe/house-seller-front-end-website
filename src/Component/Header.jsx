import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className="h-14 flex items-center justify-between fixed top-0 right-0 p-9 bg-white shadow-md z-20 px-6 rounded-b-xl">
      <div className="flex gap-4">
        <Link to="/" className="px-4 py-2 rounded">Home</Link>

        <Link to="/photos" className='px-4 py-2'>
            Photos
        </Link>


        <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-full">
          Contact/Info
        </Link>
      </div>
    </div>
  );
};

export default Header;

//   <div className='flex p-8  py-2 items-center gap-2 bg-white shadow-md rounded-b-md '>
//                 <span>
//                     <img src="src/house_images/whatsapp.png" className='w-[25px]' alt="" />
//                 </span>
//                 <h2>+212 33 33 44 33 89 1</h2>
//             </div>