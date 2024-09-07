import { useState, useRef } from "react";
import React from 'react'
import image from '../assets/image.jpg'
import sideArrow from '../assets/Group 28.png'
import helpIcon from "../assets/Vector.png"
import frame from "../assets/Frame 1000002250.png"

function GalleryCard() {
  const [images, setImages] = useState([`${image}`, `${image}`, `${image}`]);

  const carouselRef = useRef(null);

  const addImage = () => {
    // Replace with the actual URL of the new image
    const newImage = `${image}`;
    setImages([...images, newImage]);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };
  return (
    <div className='h-[316px] w-[720px] flex flex-col bg-[#363C43] rounded-[18.89px] p-4 px-14 relative'>
      <img src={helpIcon} className="w-[24px] h-[24px] absolute top-4 left-2" alt="help" />
      <img src={frame} className=" absolute top-36 left-3" alt="Frame" />
      <div className="flex justify-between items-center text-center mb-4">
        <h2 className="text-white flex items-center justify-center font-medium bg-[#171717] rounded-[20px] h-[60px] w-[169px]  py-3 text-[20px]">Gallery</h2>
        <div className="flex gap-5 ">
          <button
            className="flex items-center justify-center gap-2 px-6 py-2 text-white text-[12px] font-medium rounded-full bg-[#ffffff05] hover:bg-[#ffffff09] shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)]"
            onClick={addImage}
          >
            + ADD IMAGE
          </button>
          <button
            className="bg-custom-gradient h-[45px] w-[45px] flex justify-center items-center rounded-full shadow-xl shadow-slate-500/50 "
            onClick={scrollLeft}
          >
            <img className="rotate-180  " src={sideArrow} alt="" />
          </button>
          <button
            className="bg-custom-gradient flex justify-center items-center  p-2 rounded-full h-[45px] w-[45px] shadow-xl shadow-slate-500/50"
            onClick={scrollRight}
          >
            <img className="" src={sideArrow} alt="" />
          </button>
        </div>
      </div>
      <div ref={carouselRef} className="relative h-[240px] w-full pt-4  pb-3 overflow-hidden  ">
        <div className="flex  space-x-3.5 px-2">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer transition-transform transform-gpu hover:scale-110 hover:-rotate-3 w-[190px] h-[179px]">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover rounded-lg grayscale hover:grayscale-0 transition-transform transform-gpu"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
