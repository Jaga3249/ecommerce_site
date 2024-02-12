import { IconBaselineDensityMedium, IconBrandGoogle, IconShoppingCart } from "@tabler/icons-react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useState } from "react";
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
  // const loginUser=useSelector((state)=>(state?.product?.user[0]?.name))
  // const loginUserPhoto=useSelector((state)=>(state?.product?.user[0]?.photo))
  // const loginUserEmail=useSelector((state)=>(state?.product?.user[0]?.email))



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

  

  // useEffect(()=>{
  //   setUser(loginUser)
  // },[loginUser])

  return (
    <div
      className="border-b-[1px] sm:border-gray-400  
     bg-white h-16  sticky top-0 z-20    "
    >
      <div className=" overflow-hidden sm:px-14  h-full sm:flex   items-center justify-between  hidden ">
      <div className="flex items-center gap-10">
      <Link to="/" className="cursor-pointer " >
          <img src={headerImg} alt="" className="w-32" />
        </Link>
       
            <span className="text-2xl font-medium cursor-pointer hover:text-orange-500 hover:underline underline-offset-8">
              Home
            </span>
      </div>
           
         
        <div className="flex gap-6 items-center    ">
         

          <div className="flex  items-center gap-6 cursor-pointer relative">
            <IconShoppingCart
              className="text-red-800 w-8 h-16  "
              onClick={() => navigate("/cart")}
            />
            <div>
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={ avatarImg}
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
                  
                </>
              )}
            </div>
          )}
        </div>
      </div>



      {/* mobile Device */}
      <div className="sm:hidden flex items-center justify-between h-full px-2">
        {/* three bar */}
       <div className="flex items-center">
       <IconBaselineDensityMedium className=" w-10  cursor-pointer" size={28}/>
       </div>

        {/* cart */}
        <div className="text-gray-600  flex relative">
        <IconShoppingCart size={35} className="" onClick={()=>navigate("/cart")}/>
        <span className="w-5 h-5 text-white   bg-red-500 flex justify-center items-center rounded-full absolute 
        -top-2 -right-2"> {productData?.length}</span>
        </div>
        {/* userLogo */}
        <div className="w-10">
          <motion.img whileTap={{scale:0.63}} src={avatarImg} alt="" sizes="lg"  />
        </div>
      </div>
    </div>
  );
};

export default Header;
