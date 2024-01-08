import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="py-10 ">
      <div className=" flex flex-col items-center  gap-3  w-screen   ">
        <h1
          className=" bg-black text-gray-300 w-72 py-3
         cursor-pointer text-lg text-center rounded-md 
         hover:scale-95"
        >
          Shopping EveryDay
        </h1>
        <span className="w-40 h-[3px] bg-black"></span>
        <p className="max-w-[700px] leading-7 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tempore
          sapiente saepe soluta, nobis maxime molestias odit, ipsam animi
          dolores ut molestiae deleniti sequi accusantium accusamus incidunt
          numquam placeat similique.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
