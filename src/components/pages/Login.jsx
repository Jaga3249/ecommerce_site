import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from 'react';
import gitImg from "../../assets/github_Icon.png";
import googleImg from "../../assets/google_Icon.png";

const Login = () => {
const auth=getAuth();
const provider=new GoogleAuthProvider;
  const handleGoogleLogin=async()=>{
    const res=await signInWithPopup(auth,provider);
    console.log("res",res)
    
  }

  
  
  return (
    <div className=' py-28 flex flex-col gap-6 justify-center items-center' style={{border:"2px solid red"}}>
      {/* login with google */}
     <div className='flex gap-4  '  >
     <div className='flex justify-center items-center border-2 border-gray-100 px-12  rounded-md cursor-pointer hover:scale-90 duration-500 ease-in-out shadow-md' onClick={handleGoogleLogin}>
        <img src={googleImg} className='w-12' alt="" />
        <span>sign in with Google</span>
      </div>
      <button className='bg-black  text-white rounded-lg min-h-fit px-8 hover:scale-95 duration-500 ease-in-out' >signout</button>
     </div>

{/* Login with github */}
     <div className='flex gap-4  ' >
     <div className='flex justify-center items-center border-2 border-gray-100 px-12  rounded-md cursor-pointer hover:scale-90 duration-500 ease-in-out shadow-md'>
        <img src={gitImg} className='w-12' alt="" />
        <span>sign in with Github</span>
      </div>
      <button className='bg-black  text-white rounded-lg min-h-full px-8 hover:scale-95 duration-500 ease-in-out' >signout</button>
     </div>

    </div>
  )
}

export default Login