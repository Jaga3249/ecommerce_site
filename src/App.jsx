import { useState } from "react";

import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Cart from "./components/pages/Cart";
import { productData } from "./api/Api";
import SingleProduct from "./components/product/SingleProduct";

const Layout = () => (
  <div>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: productData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="font-bodyfont">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
