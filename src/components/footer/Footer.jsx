import { Button, TextInput, rem } from "@mantine/core";
import {
  IconAt,
  IconBrandFacebookFilled,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandPaypal,
  IconBrandYoutube,
  IconHome,
  IconMapPin,
  IconUserSquareRounded,
} from "@tabler/icons-react";
import React from "react";
import citi from "../../assets/citi.png";
import headerImg from "../../assets/header-logo.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
const Footer = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <div className="py-8 bg-black text-[#909090] hidden ">
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
            <Button
              variant="filled"
              className="bg-gray-600 hover:scale-95 duration-500 ease-in-out "
              fullWidth
            >
              <span className="font-medium ">subscribe</span>
            </Button>
          </div>
        </div>
      </div>
      {/* mobile Menu */}
      <div className="sm:hidden flex flex-col gap-2 bg-black py-10 w-auto " style={{border:"2px solid red"}}>
        {/* company logo and its social media websites */}
        <div className="flex flex-col justify-center px-4">
          <div className="bg-black h-16 cursor-pointer flex justify-center" >
            <img src={headerImg} alt="" className="w-full h-full object-fill" />
          </div>
          {/* accept card */}
          <div className="flex items-center justify-between cursor-pointer px-2">
            <img src={citi} alt="" className="w-12 h-10" />
            <img src={visa} alt="" className="w-16 mt-2" />
            <img src={paypal} alt="" className="w-16 mt-2" />
            <img src={mastercard} alt="" className="w-16 mt-2" />
          </div>
          {/* social media */}
          <div className="cursor-pointer">
            <div className="flex gap-3">
              <a href="https://github.com/Jaga3249">
                <IconBrandGithub className="cursor-pointer w-16 h-10 bg-gray-500 hover:bg-gray-400 rounded-md hover:text-black hover:scale-100" />
              </a>
              <a href="https://www.linkedin.com/in/jagannath-behera-09a979208/">
                <IconBrandLinkedin className="cursor-pointer w-16 h-10 bg-gray-500 hover:bg-gray-400 rounded-md hover:text-black hover:scale-100" />
              </a>

              <IconBrandFacebookFilled className="cursor-pointer w-16 h-10 bg-gray-500 hover:bg-gray-400 rounded-md hover:text-black hover:scale-100"/>
              <a href="https://www.youtube.com/">
                <IconBrandYoutube className="cursor-pointer w-16 h-10 bg-gray-500 hover:bg-gray-400 rounded-md hover:text-black hover:scale-100" />
              </a>
            </div>
          </div>
        </div>
        {/* company address */}
        <div className="flex flex-col items-center gap-2 cursor-pointer  ">
            <h1 className="text-4xl text-gray-400 mx-auto">Locate us</h1>
            <span className="text-gray-600 text-md">Nayapali,Bhubanesar</span>
            <span className="text-gray-600 text-md">
              Mobile:<a href="tel:+918144360244">+918144360244</a>
            </span>
            <span className="text-gray-600 text-md">
              whatsApp:<a href="https://wa.me/8144360244">+918144360244</a>
            </span>
            <span className="text-gray-600  text-md">
              Email:
              <a href="mailto:jagannathbehera0244@gmail.com">
                jagannathbehera0244@gmail.com
              </a>
            </span>
          </div>
       {/* profile section */}
       <div className="flex flex-col gap-2 cursor-pointer">
            <h1 className="text-4xl text-gray-500 text-center">Profile</h1>
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
      </div>
      
     
    </>
  );
};

export default Footer;
