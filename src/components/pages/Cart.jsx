import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconX } from '@tabler/icons-react';
import { decreaseQuantity, increaseQuantity, removeCart, resetCart } from '../../redux/ProductSlice';
import { toast } from 'react-toastify';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState("");
  const productData = useSelector((state) => (state.product.productData));
  const [counts, setCounts] = useState(Array.from({ length: productData.length }, () => 1));

  console.log("productData", productData)



  useEffect(() => {
    let price = 0;
    productData.map((item) => (
      price += item.quantity * item.price



    ))
    setTotalAmount(price.toFixed(2))
  }, [productData])

  console.log("total", totalAmount)
  return (
    <div className='cursor-pointer'>
      <div className='mx-auto max-w-screen-xl py-10 px-8 flex gap-6' >
        {/* left side */}
        <div className='w-2/3' >
          <h2 className='text-xl pl-4 font-medium'>Shopping Cart</h2>
          <div>
            {productData.map((item, i) => (
              <div key={i} className='flex items-center justify-between mt-6'>
                <div className='flex items-center'>
                  <IconX onClick={() => dispatch(removeCart(item)) && toast.error(`${item.title} is removed`)} />
                  <img src={item.image} alt="" className='w-32 h-32' />
                </div>
                <h2 className='w-40'>{item.title}</h2>
                <p className='w-10'>₹{item.price}</p>
                <div className='flex items-center gap-2 border-[1px] border-gray-100 px-4 py-2 shadow-md'>
                  <p>Quantity</p>
                  <button className='border-[1px] border-gray-100 px-2 hover:bg-gray-300 rounded-md text-lg' onClick={() => dispatch(decreaseQuantity(item))} >-</button>
                  <span className='border-[1px] border-gray-100 px-2 hover:bg-gray-300 rounded-md text-lg'>{item.quantity}</span>
                  <button className='border-[1px]
                   border-gray-100 px-2 hover:bg-gray-300 rounded-md text-lg'
                    onClick={() => dispatch(increaseQuantity(item))}>+</button>
                </div>
                <p>₹{item.price * item.quantity}</p>

              </div>

            ))}


            <button className='bg-red-400 py-2 px-4 mt-4 ml-6' onClick={() => dispatch(resetCart()) && toast.error("Your cart is empty!")}>Reset cart</button>
            <p className='flex items-center gap-2 mt-4 ml-2'>
              <span className=''><IconArrowLeft className='text-gray-400 text-lg' onClick={() => navigate("/")} /></span>
              <span className='text-gray-700'>go shopping</span>
            </p>
          </div>

        </div>
        {/* right side */}
        <div className='w-1/3 py-6  bg-gray-100 shadow-md rounded-lg'  >
          <div className='px-4'>
            <h2 className='text-xl text-center font-semibold mb-2'>Cart Totals</h2>
            <p className='text-lg font-medium' >subtotals <span className='ml-4 text-lg font-normal'>₹{totalAmount}</span></p>
            <p className='my-4 text-lg font-medium  '>shipping <span className='ml-4 font-normal '>Lorem ipsum dolor sit amet.</span></p>

            <div className='flex justify-between items-center  border-t-[1px] border-gray-200 my-2 '>
              <h1 className='font-semibold text-lg'>Total</h1>
              <span> ₹{totalAmount}</span>
            </div>

          </div>
          <button className='bg-black w-2/3 mx-16 py-2 text-white my-2 hover:scale-95 duration-500 ease-in-out'>proceed to checkout</button>

        </div>
      </div>

    </div>
  )
}

export default Cart