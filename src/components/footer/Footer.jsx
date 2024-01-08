import React from "react";
import headerImg from "../../assets/header-logo.png";
import citi from "../../assets/citi.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="py-20 bg-black text-[#909090] ">
      <div className="max-w-screen-xl mx-auto">
        {/* card section */}
        <div>
          <div className="bg-black">
            <img src={headerImg} alt="" className="w-32" />
          </div>
          {/* accept card */}
          <div className="flex items-center">
            <img src={citi} alt="" className="w-16 h-10" />
            <img src={visa} alt="" className="w-16" />
            <img src={paypal} alt="" className="w-16" />
            <img src={mastercard} alt="" className="w-16" />
          </div>
          {/* scocial media account */}
          <div>
            <div className="flex">
              <IconBrandGithub />
              <IconBrandLinkedin />
              <IconBrandFacebookFilled />
              <IconBrandYoutube />
            </div>
          </div>
        </div>
        {/* location section */}
        <div></div>
        {/* profile section */}
        {/* subscription  scetion */}
      </div>
    </div>
  );
};

export default Footer;
