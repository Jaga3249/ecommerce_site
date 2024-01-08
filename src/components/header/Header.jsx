import React from "react";
import headerImg from "../../assets/header-logo.png";
import { IconShoppingCart } from "@tabler/icons-react";
import avatarImg from "../../assets/avatar-img.png";

const Header = () => {
  return (
    <div
      className="border-b-[1px] border-gray-400 
     bg-white  w-screen  h-16 sticky top-0 z-20 "
    >
      <div className="max-w-5xl mx-auto  h-full   flex items-center justify-between ">
        <div className="cursor-pointer">
          <img src={headerImg} alt="" className="w-32" />
        </div>
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
          <div className="flex  items-center gap-4 cursor-pointer">
            <IconShoppingCart className="text-red-800 w-10 h-16 relative " />
            <img src={avatarImg} alt="" className="w-9 h-9" />
          </div>
          <span
            className="border-[1px] w-6 text-sm text-white   flex justify-center items-center rounded-full 
           absolute -top-[1px] right-40 bg-red-500"
          >
            {0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
