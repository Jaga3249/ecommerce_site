import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/ProductSlice";
import { toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = product.title;
  const rootId = String(id).toLowerCase().split(" ").join("");
  const handleClick = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      <div
        className="w-full h-96 overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={product.image}
          alt="product image"
          className="h-full w-full object-cover group-hover:scale-110 duration-500 ease-in-out "
        />
      </div>
      <div className="flex items-center justify-between ic py-2">
        <div>
          <h2 className="text-lg font-medium">
            
            {product.title.length > 15
              ? `${product.title.substring(0, 15)}...`
              : product.title}
          </h2>
        </div>
        <div className="flex items-center justify-between  gap-2 text-lg w-32 overflow-hidden  relative ">
          <div className="flex gap-4 group-hover:translate-x-32  transition-transform duration-700 ">
            <p className="line-through text-lg text-gray-400">
              ₹{product.oldPrice}
            </p>
            <p className="font-semibold text-lg"> ₹{product.price}</p>
          </div>
          <p
            className="w-[150px]  absolute top-0 z-20 transform -translate-x-32 group-hover:translate-x-0 
          transition-transform duration-700 flex items-center text-lg   "
          >
            <span
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product._id,
                    title: product.title,
                    desciption: product.description,
                    quantity: 1,
                    image: product.image,
                    price: product.price,
                  })
                ) && toast.success(`${product.title} is added`)
              }
              className="cursor-pointer"
            >
              
              add To cart
            </span>
            <span>
              <IconArrowRight />
            </span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-lg font-medium">{product.category}</p>
      </div>
      <div className="">
        {product.isNew && (
          <p className=" bg-black  text-white text-center w-20 py-2 rounded-md absolute top-3 right-2 cursor-pointer ">
            Sales
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
