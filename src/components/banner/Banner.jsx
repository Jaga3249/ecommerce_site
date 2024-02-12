import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import React, { useRef, useState } from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const autoplay = useRef(Autoplay({ delay: 2000 }));
 

  return (
    <div className="   overflow-x-hidden  lg:block  ">
      <div className="   sm:h-[400px] h-[200px] relative sm:block hidden ">
        <div className="sm:block hidden">
          <Carousel
            withIndicators
            height={400}
            style={{ border: "2px solid red" }}
            styles={{
              control: {
                backgroundColor: "white",
              },
            }}
          >
            <Carousel.Slide className="">
              <img src={banner1} alt="" className="w-full h-full" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={banner2} alt="" className="w-full h-full" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={banner3} alt="" className="w-full h-full" />
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>

      {/* mobile device */}
      <div className="sm:hidden">
        <Carousel
          // withIndicators
          height={200}
          plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
          styles={{
            control:{
              backgroundColor:"white"
            }
          }}
          // style={{ border: "2px solid red" }}
        >
          <Carousel.Slide className="">
            <img src={banner1} alt="" className="w-full h-full" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={banner2} alt="" className="w-full h-full" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={banner3} alt="" className="w-full h-full" />
          </Carousel.Slide>
          
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
