import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./page/Outlet.jsx";
import Product from "./page/Product.jsx";
import Pant from "./page/Pant.jsx";
import Shirt from "./page/Shirt.jsx";
import T_Shirt from "./page/T_Shirt.jsx";
import Jacket from "./page/Jacket.jsx";
import Trouser from "./page/Trouser.jsx";
import Register from "./page/Register.jsx";
import Login from "./page/Login.jsx";
import Additem from "./page/AddItem.jsx";
import { CartContextProvider } from "./context/ContextData.jsx";
import AddToCart from "./page/AddToCart.jsx";
import DisplayItem from "./page/DisplayItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/pant",
        element: <Pant />,
      },
      {
        path: "/shirt",
        element: <Shirt />,
      },
      {
        path: "/t_shirt",
        element: <T_Shirt />,
      },
      {
        path: "/jacket",
        element: <Jacket />,
      },
      {
        path: "/trouser",
        element: <Trouser />,
      },
      {
        path: "/add",
        element: <Additem />,
      },
      {
        path: "/addToCart",
        element: <AddToCart />,
      },
      {
        path: "/displayData",
        element: <DisplayItem />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
