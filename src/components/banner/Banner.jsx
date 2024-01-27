import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import React, { useState } from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  
  return (
    <div className="   overflow-x-hidden ">
      <div className="   h-[400px] relative ">
        {/* image section */}
        <div
          className={`flex w-[400vw] h-full transition-transform duration-1000   `}
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          <img src={banner1} alt="" className=" w-full object-fill " />
          <img src={banner2} alt="" className=" w-full object-fill" />
          <img src={banner3} alt="" className=" w-full object-fill  " />
          <img src={banner4} alt="" className=" w-full object-fill " />
        </div>
        {/* arrow section */}
        <div className="flex justify-between    absolute bottom-52  px-4  w-full   " >
       
          <span
            className=" border-gray-100 border-[1px] px-4 py-3 rounded-md shadow-md cursor-pointer hover:bg-orange-500"
            onClick={handlePrev}
          >
            <IconArrowLeft />
          </span>
          <span
            className="border-[1px] border-gray-100  px-4 py-3 rounded-md shadow-md cursor-pointer hover:bg-orange-600"
            onClick={handleNext}
          >
            <IconArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
