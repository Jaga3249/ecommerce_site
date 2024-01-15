import React, { useState } from "react";
import headerImg from "../../assets/header-logo.png";
import { IconShoppingCart } from "@tabler/icons-react";
import avatarImg from "../../assets/avatar-img.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const productData = useSelector((state) => state.product.productData);
  // console.log("productData", productData);

  return (
    <div
      className="border-b-[1px] border-gray-400 
     bg-white  w-screen  h-16 sticky top-0 z-20 "
    >
      <div className="max-w-5xl mx-auto  h-full   flex items-center justify-between ">
        <Link to="/" className="cursor-pointer">
          <img src={headerImg} alt="" className="w-32" />
        </Link>
        <div className="flex gap-6 items-center    ">
          <ul className="flex gap-8 items-center  ">
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Home
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Pages
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Shop
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Element
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Blog
            </li>
          </ul>
          <div className="flex  items-center gap-4 cursor-pointer relative">
            <IconShoppingCart
              className="text-red-800 w-10 h-16  "
              onClick={() => navigate("/cart")}
            />
            <img src={avatarImg} alt="" className="w-9 h-9" />
            <span
              className="border-[1px] w-6 text-sm text-white   flex justify-center items-center rounded-full 
           absolute left-6 bottom-10 bg-red-500"
            >
              {productData.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
