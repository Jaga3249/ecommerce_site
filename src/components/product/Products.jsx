import { TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [productData, setProductData] = useState(products);

  const serchProduct = (query) => {
    if (query === "") {
      setProductData(products);
      return;
    } else {
      const filterData = productData.filter((item) => {
        const data = item.title.toLowerCase().includes(query.toLowerCase());

        return data;
      });

      setProductData(filterData);
    }
  };

  useEffect(() => {
    // Update productData when products prop changes
    setProductData(products);
  }, [products]);

  return (
    <div className="sm:py-10 py-8 ">
      <div className=" flex flex-col items-center  gap-3     ">
        <h1
          className=" bg-black text-gray-300 sm:w-72 w-[95%]  py-3
         cursor-pointer text-lg text-center rounded-md 
         hover:scale-95"
        >
          Shopping EveryDay
        </h1>
        <span className="w-40 h-[3px] bg-black"></span>
        <p className="sm:max-w-[700px] w-[95%] px-4 leading-8 tracking-normal text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tempore
          sapiente saepe soluta, nobis maxime molestias odit, ipsam animi
          dolores ut molestiae deleniti sequi accusantium accusamus incidunt
          numquam placeat similique.
        </p>
      </div>
      <div className=" sm:ml-8 sm:w-[23%] w-[95%] ml-2 my-2 ">
        <TextInput
          placeholder="Enter product"
          onChange={(e) => serchProduct(e.target.value)}
          label="Search Product"
          styles={{
            label:{
              fontSize:"18px",fontWeight:"400"
            }
          }}
        />
      </div>
      <div className="sm:max-w-screen-xl sm:mx-auto sm:py-10 py-6 sm:grid sm:grid-cols-4 grid-cols-1 sm:gap-5 gap-6 ">
        {productData.map((item, i) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
