import axios from "axios";

export const productData = async () => {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
};
