import { Rating } from "@mantine/core";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const [itemDetails, setItemDetails] = useState({});
  const [count, setCount] = useState(1);
  const location = useLocation();

  const handleDecrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleIncrease = () => {
    setCount((prev) => (prev >= 1 ? prev + 1 : prev));
  };
  useEffect(() => {
    setItemDetails(location.state.item);
  }, []);
  console.log("count", count);
  return (
    <div className="w-screen ">
      <div className="mx-auto max-w-screen-xl  my-10 flex gap-6">
        {/* left section */}
        <div className="w-[400px]  relative  ">
          {/* <img src={itemDetails.image} alt="" className="w-full h-full" /> */}
          <ReactImageMagnify
            // className="hover:z-50"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: itemDetails.image, // Use the appropriate image source
              },
              largeImage: {
                src: itemDetails.image, // Provide the large image source
                width: 1200,
                height: 1800,
              },
            }}
          />
          {itemDetails.isNew && (
            <button className="bg-black text-white w-24 py-2 absolute top-2 right-2 ">
              Sales
            </button>
          )}
        </div>

        {/* right section */}
        <div className=" my-auto px-4">
          <h1 className="text-4xl font-semibold">{itemDetails.title}</h1>

          <div className="flex gap-2 my-2">
            <p className="line-through text-gray-400 text-lg">
              ₹{itemDetails.oldPrice}
            </p>
            <p className="text-lg font-medium">₹{itemDetails.price}</p>
          </div>
          <div className=" flex gap-2 items-center">
            <Rating
              value={5}
              fractions={2}
              readOnly
              className="cursor-pointer"
            />
            <span>(1 custumer review)</span>
          </div>

          <p className="max-w-3xl leading-8 tracking-wide my-6">
            {itemDetails.description}
          </p>
          <div className="flex gap-2 w-full cursor-pointer ">
            <div className="flex items-center gap-4 py-2 px-3 border-[1px] border-gray-200 shadow-md">
              <p>Quantity</p>
              <div className="flex gap-4 p-1">
                <button
                  className="text-lg h-7 font-semibold    px-2 hover:bg-gray-300"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="flex justify-center items-center">
                  {count}
                </span>
                <button
                  className="text-lg h-7 font-semibold  px-2 hover:bg-gray-300"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white px-2 py-3">
              add to cart
            </button>
          </div>
          <p className="mt-4">
            Category:
            <span className="ml-2 text-lg font-medium">
              {itemDetails.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
