import { useState } from "react";

import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/pages/Cart";
import { productData } from "./api/Api";

const Layout = () => (
  <div>
    <Header />
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
