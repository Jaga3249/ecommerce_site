import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/ProductSlice";
const ProductCard = ({ product }) => {

  
  // const { data } = useLoaderData();
  // const [productData,setProductData]=useState(data);
  // console.log("data",data)


  // const serchItem=(query)=>{
  //   console.log("query",query);
  //   // productData.forEach(element => {
  //   //   const serchItem=element.title.includes(query);
  //   //   console.log(serchItem)
  //   // });
  //   const res=productData.filter((item)=>{
  //     // console.log( typeof item.title)
  //     const serchItem=item.title.toLowerCase().includes(query.toLowerCase());
  //     return serchItem
  //   })
  //   setProductData(res);
  //   console.log("res",res)
  // }

  // console.log("data",productData)

  
  // console.log("product",product)
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


     {/* product image*/}
    <div
      className="w-full h-96 sm:px-0 px-2 overflow-hidden cursor-pointer "
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt="product image"
        className="h-full w-full object-cover group-hover:scale-110 duration-500 ease-in-out "
      />
    </div>
    {/* bottom section */}
    <div className="flex items-center justify-between  pt-2 mx-2 sm:mx-0" >
     
        <h2 className="sm:text-lg text-base font-medium  ">
          
          {product.title.length > 15
            ? `${product.title.substring(0, 15)}...`
            : product.title}
        </h2>

      <div className="flex items-center justify-between   text-lg w-32 overflow-hidden  relative ">
        <div className="flex  justify-between items-center w-full sm:px-2 pl-6 group-hover:translate-x-32  transition-transform duration-700 " >
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
              ) && toast.success(`${product.title} is added`,)
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

    <div className="sm:px-0 px-2 mb-2">
      <p className="sm:text-lg text-md font-medium">{product.category}</p>
    </div>

    <div className="">
      {product.isNew && (
        <p className=" bg-black  text-white text-center w-20 py-2 rounded-md absolute top-3 sm:right-2 right-6 cursor-pointer ">
          Sales
        </p>
      )}
    </div>
  </div>
   
  );
};

export default ProductCard;
