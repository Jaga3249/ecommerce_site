import React, { useState } from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import { IconArrowRight } from "@tabler/icons-react";
import { IconArrowLeft } from "@tabler/icons-react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  // console.log("currentslide", currentSlide);
  return (
    <div className="   overflow-x-hidden">
      <div className="   h-[400px] relative">
        {/* image section */}
        <div
          className={`flex w-[400vw] h-full transition-transform duration-1000  `}
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          <img src={banner1} alt="" className="w-screen h-full object-fill " />
          <img src={banner2} alt="" className="w-screen h-full object-fill" />
          <img src={banner3} alt="" className="w-screen h-full object-fill  " />
          <img src={banner4} alt="" className="w-screen h-full object-fill " />
        </div>
        {/* arrow section */}
        <div className="flex justify-between  w-screen  absolute bottom-52  px-4    " >
       
          <span
            className="border-2 border-orange-500 px-4 py-3 rounded-md cursor-pointer hover:bg-orange-500"
            onClick={handlePrev}
          >
            <IconArrowLeft />
          </span>
          <span
            className="border-2 border-orange-500  px-4 py-3 rounded-md cursor-pointer hover:bg-orange-600"
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
