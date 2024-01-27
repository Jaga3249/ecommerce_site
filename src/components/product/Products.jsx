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
    <div className="py-10 ">
      <div className=" flex flex-col items-center  gap-3     ">
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
      <div className=" ml-8 w-[23%] ">
        <TextInput
          placeholder="Enter"
          onChange={(e) => serchProduct(e.target.value)}
          label="Search"
        />
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-5">
        {productData.map((item, i) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
