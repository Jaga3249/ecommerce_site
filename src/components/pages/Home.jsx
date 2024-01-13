import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Products from "../product/Products";

import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { data } = useLoaderData();
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="">
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
