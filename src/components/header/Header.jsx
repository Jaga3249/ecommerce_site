import { IconBrandGoogle, IconShoppingCart } from "@tabler/icons-react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import avatarImg from "../../assets/avatar-img.png";
import headerImg from "../../assets/header-logo.png";
import { addUser, removeUser } from "../../redux/ProductSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState("");
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.productData);
  const loginUser=useSelector((state)=>(state?.product?.user[0]?.name))
  const loginUserPhoto=useSelector((state)=>(state?.product?.user[0]?.photo))
  const loginUserEmail=useSelector((state)=>(state?.product?.user[0]?.email))
  // useSelector((state)=>console.log(state))
  console.log("productData", productData);

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const res = await signInWithPopup(auth, provider);
      console.log("res",res)

      dispatch(
        addUser({
          name: res?.user?.displayName,
          photo: res?.user?.photoURL,
          email:res?.user?.email
        })
      ) && toast.success("user is login")
      setShow((prev)=>!prev)
      // setUser(loginUser)
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout=()=>{
    try {
      dispatch(removeUser({
        name: loginUser,
        photo: loginUserPhoto,
        email:loginUserEmail
      })) && toast.error("user logout sucessfully")
      setShow((prev)=>!show)
    
      
    } catch (error) {
      console.log(error)
      
    }
  }
console.log("loginUser",loginUser)
  console.log("user",user)

  useEffect(()=>{
    setUser(loginUser)
  },[loginUser])

  return (
    <div
      className="border-b-[1px] border-gray-400 
     bg-white h-16 sticky top-0 z-20 "
    >
      <div className=" overflow-hidden px-14  h-full   flex items-center justify-between ">
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

          <div className="flex  items-center gap-6 cursor-pointer relative">
            <IconShoppingCart
              className="text-red-800 w-8 h-16  "
              onClick={() => navigate("/cart")}
            />
            <div>
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={loginUserPhoto ? loginUserPhoto : avatarImg}
                alt=""
                className="w-9 h-9 relative rounded-full"
                onClick={() => setShow((prev) => !prev)}
              />
            </div>

            <span
              className="border-[1px] w-6 text-sm text-white   flex justify-center items-center rounded-full 
           absolute left-6 bottom-10 bg-red-500"
            >
              {productData?.length}
            </span>
          </div>

          {/* Login dropdown */}
          {show && (
            <div className=" w-44 py-2 flex flex-col justify-center items-center rounded-md cursor-pointer absolute  top-14  right-10  border-[1px]  bg-white border-gray-300">
              {user ? (
                <>
                  <span
                    className="text-sm hover:bg-gray-300 w-full text-center py-2 font-light"
                    // onClick={handleLogin}
                  >
                    {user}
                  </span>
                  <span className="text-sm hover:bg-gray-300 w-full text-center py-2 font-light" onClick={handleLogout}>
                    LogOut
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="text-sm hover:bg-gray-300 w-full text-center py-2 pl-2 font-light flex  items-center gap-1 "
                    onClick={handleLogin}
                  >
                   <span> <IconBrandGoogle className="w-5"/></span>
                    Sign in with Google
                  </span>
                  {/* <span className="text-sm hover:bg-gray-300 w-full text-center py-2 font-light">
                    Sign in with Github
                  </span> */}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
