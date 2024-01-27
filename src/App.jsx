import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { productData } from "./api/Api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import SingleProduct from "./components/product/SingleProduct";

const Layout = () => (
  <div>
    <Header />
    {/* <ScrollRestoration /> */}
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
      // {
      //   path:"/login",
      //   element:<Login/>
      // }
    ],
  },
]);

function App() {
  return (
    <>
      <div className="font-bodyfont">
        <RouterProvider router={router} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
