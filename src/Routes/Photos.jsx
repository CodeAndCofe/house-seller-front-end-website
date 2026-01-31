import React, {useState } from 'react';
import Header from '../Component/Header';
import ImagesRender from '../Component/Images_render';

const Photos = () => {

  const [is_selected, SetIsSelected] = useState(false);

  const [my_src, Setmy_src] = useState("");
  const houseImages = [
    "src/house_images/house.jpg",
    "src/house_images/bath.jpg",
    "src/house_images/bedroom.jpg",
    "src/house_images/ketchen.jpg",
    "src/house_images/livingRoom.jpg",
    "src/house_images/toilet.jpg",
  ];

  function  make_true(src)
  {
    SetIsSelected(true);
    Setmy_src(src);
  }

  function  DisplayImage()
  {
    return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black'>
      <div onClick={() => SetIsSelected(false)} className='absolute top-9 left-9 bg-gray-300 thext-white font-bold text-lg rounded-md flex justify-center items-center px-10 py-3'>
        Back
      </div>
      <div className='w-full h-full bg-red-50 flex flex-col justify-center items-center'>
         <img src={my_src} alt="house image" className='max-w-full h-full'/>
      </div>
    </div>);
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16 tracking-tight">
          Property Gallery
        </h1>
        <div className="
          grid grid-cols-1 gap-6
          sm:grid-cols-2 sm:gap-7
          md:grid-cols-3 md:gap-8
          lg:grid-cols-3 xl:grid-cols-4
        ">
          {is_selected == false ? <ImagesRender houseImages={houseImages} display={make_true}/> :  <DisplayImage />}
        </div>
      </main>
    </div>
  );
};

export default Photos;