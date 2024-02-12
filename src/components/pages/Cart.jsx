import { IconArrowLeft, IconX } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
  resetCart,
} from "../../redux/ProductSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState("");
  const productData = useSelector((state) => state.product.productData);
  const [counts, setCounts] = useState(
    Array.from({ length: productData?.length }, () => 1)
  );
  const [payNow, setPayNow] = useState(false);

  const userInfo = useSelector((state) => state?.product?.user);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("please login before checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmount * 100,
      cahrge: 10,
      token: token,
    });
  };

  useEffect(() => {
    let price = 0;
    productData?.map((item) => (price += item.quantity * item.price));
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  return (
    <div className="cursor-pointer">
      <div className="mx-auto max-w-screen-xl w-full sm:py-10 py-2 sm:px-8 px-2 sm:flex  gap-6  hidden">
        {/* left side */}
        <div className="w-2/3  ">
          <h2 className="text-xl  pl-4 font-medium  ">Shopping Cart</h2>
          <div>
            {productData?.map((item, i) => (
              <div key={i} className="flex items-center  gap-8  mt-6">
                {/* product image */}
                <div className="flex items-center">
                  <IconX
                    onClick={() =>
                      dispatch(removeCart(item)) &&
                      toast.error(`${item.title} is removed`)
                    }
                  />
                  <img
                    src={item.image}
                    alt=""
                    className="sm:w-32 w-20 sm:h-32 h-16"
                  />
                </div>
                <h2
                  className="w-40  py-2 px-2"
                  
                >
                  {item.title}
                </h2>
                <p className="w-16 px-2 py-2 sm:block hidden">₹{item.price}</p>
                <div className="flex items-center gap-2 border-[1px] border-gray-100  w-52  py-2 px-2  shadow-md ">
                  <p>Quantity</p>
                  <button
                    className="border-[1px] border-gray-100 px-2 hover:bg-gray-300 rounded-md text-lg"
                    onClick={() => dispatch(decreaseQuantity(item))}
                  >
                    -
                  </button>
                  <span className="border-[1px] border-gray-100 px-3  flex justify-center items-center hover:bg-gray-300 rounded-md text-lg">
                    {item.quantity}
                  </span>
                  <button
                    className="border-[1px]
                   border-gray-100 px-2 hover:bg-gray-300 rounded-md text-lg"
                    onClick={() => dispatch(increaseQuantity(item))}
                  >
                    +
                  </button>
                </div>
                <p className="w-16 px-2 py-2 sm:block hidden">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

            <button
              className="bg-red-400 py-2 px-4 mt-4 ml-6"
              onClick={() =>
                dispatch(resetCart()) && toast.error("Your cart is empty!")
              }
            >
              Reset cart
            </button>
            <p
              onClick={() => navigate("/")}
              className="flex items-center gap-2 mt-4 ml-2"
            >
              <span className="">
                <IconArrowLeft className="text-gray-400 text-lg" />
              </span>
              <span className="text-gray-700">go shopping</span>
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="w-1/3  h-1/2  my-16 py-6  bg-gray-100 shadow-md rounded-lg  ">
          <div className="px-4">
            <h2 className="text-xl text-center font-semibold mb-2">
              Cart Totals
            </h2>
            <p className="text-lg font-medium">
              subtotals{" "}
              <span className="ml-4 text-lg font-normal">₹{totalAmount}</span>
            </p>
            <p className="my-4 text-lg font-medium  ">
              shipping{" "}
              <span className="ml-4 font-normal ">
                Lorem ipsum dolor sit amet.
              </span>
            </p>

            <div className="flex justify-between items-center  border-t-[1px] border-gray-200 my-2 ">
              <h1 className="font-semibold text-lg">Total</h1>
              <span> ₹{totalAmount}</span>
            </div>
          </div>
          <button
            className="bg-black w-2/3 mx-16 py-2 text-white my-2 hover:scale-95 duration-500 ease-in-out"
            onClick={handleCheckout}
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="flex justify-center items-center mt-4">
              <StripeCheckout
                name="Jagannath Tech store" // the pop-in header title
                description="Big Data Stuff" // the pop-in header subtitle
                image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
                amount={totalAmount} // cents
                currency="INR"
                stripeKey="pk_test_51OdAKWSEiI4FOhbP0DIMppqavHmNsrQ0qxJEprD8JTsMM8XiJFe3VGziLp5kNT7mCQo5NXfHArSL1OeO7mwQkzcw00f0uJRWT0"
                label="pay to bazar"
                email={userInfo?.email}
                token={payment}
              ></StripeCheckout>
            </div>
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden overflow-x-hidden flex flex-col gap-2">
       <div className="flex justify-between items-center px-4 py-2">
       <h2 className="pl-2 text-lg font-medium ">Shopping Cart</h2>
        <button className="bg-red-500 px-8 py-2 rounded-sm text-lg"  onClick={() =>
                dispatch(resetCart()) && toast.error("Your cart is empty!")
              }> Reset</button>
       </div>
       {/* product clear  */}
       <div className="  mx-4 py-2 flex  items-center   cursor-pointer   " onClick={() => navigate("/")}>
                <span> <IconArrowLeft className="text-gray-400 text-lg" /></span>
              <p>Go to product page</p>
            
             
              
                
              </div>
        <div className="">
          {productData.map((item,i)=>(
            <div key={i} className="flex flex-col gap-4">
              {/* product detail */}
              <div className="flex items-center justify-between  px-4" >
              <IconX
                    onClick={() =>
                      dispatch(removeCart(item)) &&
                      toast.error(`${item.title} is removed`)
                    }
                  />
              <img src={item.image} alt="" className="w-20" />
              <span>{item.title}</span>
              <span> ₹{item.price}</span>
              </div>
              {/* product quantity */}
              <div>
                <div className="px-4 flex items-center justify-between">
                  {/* increase or decrease quantity section */}
                  <div className="flex gap-4 border-[1px] border-gray-200 p-2 mb-2 shadow-sm rounded-md ">
                    <span>Quantity</span>
                    <div className="flex gap-2">
                      <span className="border-[1px] border-gray-300 px-2 rounded-md" onClick={() => dispatch(increaseQuantity(item))}>+</span>
                      <span className="border-[1px] border-gray-300 px-2 rounded-md"> {item.quantity}</span>
                      <span className="border-[1px] border-gray-300 px-2 rounded-md" onClick={() => dispatch(decreaseQuantity(item))}>-</span>
                    </div>
                  </div>
                  <div>
                  ₹{item.price * item.quantity}
                  </div>
                </div>
              </div>
              
             
            </div>
          ))}
        </div>
        <div className="w-full  flex flex-col justify-center items-center ">
        <button
            className="bg-black px-10 mb-2   py-2 text-white hover:scale-95 duration-500 ease-in-out"
            onClick={handleCheckout}
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="flex justify-center items-center mt-4">
              <StripeCheckout
                name="Jagannath Tech store" // the pop-in header title
                description="Big Data Stuff" // the pop-in header subtitle
                image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
                amount={totalAmount} // cents
                currency="INR"
                stripeKey="pk_test_51OdAKWSEiI4FOhbP0DIMppqavHmNsrQ0qxJEprD8JTsMM8XiJFe3VGziLp5kNT7mCQo5NXfHArSL1OeO7mwQkzcw00f0uJRWT0"
                label="pay to bazar"
                email={userInfo?.email}
                token={payment}
              ></StripeCheckout>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
