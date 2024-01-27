import { Button, TextInput, rem } from "@mantine/core";
import { IconAt, IconBrandFacebookFilled, IconBrandGithub, IconBrandLinkedin, IconBrandPaypal, IconBrandYoutube, IconHome, IconMapPin, IconUserSquareRounded } from "@tabler/icons-react";
import React from "react";
import citi from "../../assets/citi.png";
import headerImg from "../../assets/header-logo.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
const Footer = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <div className="py-8 bg-black text-[#909090] ">
      <div className="max-w-screen-xl mx-auto flex justify-between ">
        {/* card section */}
        <div>
          <div className="bg-black cursor-pointer">
            <img src={headerImg} alt="" className="w-28" />
          </div>
          {/* accept card */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={citi} alt="" className="w-12 h-10" />
            <img src={visa} alt="" className="w-16 mt-2" />
            <img src={paypal} alt="" className="w-16 mt-2" />
            <img src={mastercard} alt="" className="w-16 mt-2" />
          </div>
          {/* scocial media account */}
          <div className="cursor-pointer">
            <div className="flex gap-3">
              <a href="https://github.com/Jaga3249">
                <IconBrandGithub className="cursor-pointer w-7 hover:bg-gray-400 hover:text-black rounded-full hover:scale-100" />
              </a>
              <a href="https://www.linkedin.com/in/jagannath-behera-09a979208/">
                <IconBrandLinkedin className="cursor-pointer w-7 hover:bg-gray-400 hover:text-black rounded-full  hover:scale-100" />
              </a>

              <IconBrandFacebookFilled className="cursor-pointer w-7 hover:bg-gray-400 hover:text-black rounded-full hover:scale-100" />
              <a href="https://www.youtube.com/">
                <IconBrandYoutube className="cursor-pointer w-7 hover:bg-gray-400 hover:text-black rounded-full hover:scale-100" />
              </a>
            </div>
          </div>
        </div>
        {/* location section */}
        <div className="flex flex-col gap-2 cursor-pointer">
          <h1 className="text-2xl">Locate us</h1>
          <span>Nayapali,Bhubanesar</span>
          <span>
            Mobile:<a href="tel:+918144360244">+918144360244</a>
          </span>
          <span>
            whatsApp:<a href="https://wa.me/8144360244">+918144360244</a>
          </span>
          <span>
            Email:
            <a href="mailto:jagannathbehera0244@gmail.com">
              jagannathbehera0244@gmail.com
            </a>
          </span>
        </div>
        {/* profile section */}
        <div className="flex flex-col gap-2 cursor-pointer">
          <h1 className="text-2xl">Profile</h1>
          <div className="flex gap-1">
            <IconUserSquareRounded className="w-5" />
            <span>my acount</span>
          </div>
          <div className="flex gap-1">
            <IconBrandPaypal className="w-5" />
            <span>checkout</span>
          </div>
          <div className="flex gap-1">
            <IconHome className="w-5" />
            <span>order tracking</span>
          </div>
          <div className="flex gap-1">
            <IconMapPin className="w-5" />
            <span>help & support</span>
          </div>
        </div>
        {/* subscription  scetion */}
        <div className="flex flex-col gap-1 cursor-pointer">
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={icon}
            placeholder="Enter Your email"
            size="md"
          />
          <Button variant="filled" className="bg-gray-600 hover:scale-95 duration-500 ease-in-out "  fullWidth>
            <span className="font-medium ">subscribe</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
