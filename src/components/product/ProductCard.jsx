import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
const ProductCard = ({ product }) => {
  console.log("product", product);
  return (
    <div className="group">
      <div className="w-full h-96 overflow-hidden cursor-pointer">
        <img
          src={product.image}
          alt="product image"
          className="h-full w-full object-cover group-hover:scale-110 duration-500 ease-in-out "
        />
      </div>
      <div className="flex justify-between py-2">
        <div>
          <h2 className="text-lg font-medium">
            {product.title.substring(0, 15)}
          </h2>
        </div>
        <div className="flex items-center justify-between  gap-2 text-lg w-32 overflow-hidden relative ">
          <div className="flex gap-4 group-hover:translate-x-32  transition-transform duration-700 ">
            <p className="line-through text-lg text-gray-400">
              ₹{product.oldPrice}
            </p>
            <p className="font-semibold text-lg"> ₹{product.price}</p>
          </div>
          <p
            className="w-[150px]  absolute top-0 z-20 transform -translate-x-32 group-hover:translate-x-0 
          transition-transform duration-700 flex items-center text-lg   "
          >
            <span> add To cart</span>
            <span>
              <IconArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
