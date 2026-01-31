import React from 'react';

const ContactCard = ({ image, Title, text }) => {
  return (
    <div className="flex max-sm:flex-col flex-col gap-9 items-center">
      <div className="w-64 h-64 shadow-xl shadow-amber-400/30 flex bg-gray-200 rounded-3xl flex-col justify-center items-center gap-4 hover:bg-gray-100 transition  duration-300 ease-in-out">
        <img src={image} alt="chat-img" className="w-28" />

        <h2 className="text-gray-900 font-bold text-lg bg-amber-100 border-4 border-amber-300 rounded-lg px-8 py-3 max-w-[70%]">
          {Title}
        </h2>
      </div>

      <p className='w-64 font-medium text-center'>{text}</p>
    </div>
  );
};

export default ContactCard;
