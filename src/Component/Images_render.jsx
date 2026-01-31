import React from 'react';

const ImagesRender = ({houseImages, display}) => {
    return (
        <>
             {houseImages.map((src, index) => (
            <div
              key={src}
              onClick={()=> {display(src)}}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white shadow-lg
                transition-all duration-500
                hover:shadow-2xl hover:shadow-gray-400/40
                hover:scale-[1.04] hover:-translate-y-2
                aspect-[4/3] md:aspect-[5/4]  /* helps uniformity */
              "
            >
              <img
                src={src}
                alt={`House view ${index + 1}`}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
                loading="lazy"
              />
              <div className="
                absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                flex items-end p-6
              ">
                <div className="text-white">
                  <p className="font-semibold text-lg">
                    {index === 0 ? "Modern Exterior" : index === 1 ? "Luxury Bathroom" : `Room ${index + 1}`}
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    Click to view larger
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
    );
}

export default ImagesRender;
