import React from "react";
import logo from "../assets/e_logo.jpg";
import cart from "../assets/cart.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/ContextData";

const Navbar = () => {
  const { selectedItems } = useCart();
  return (
    <>
      <div
        className="navbar flex justify-between px-20 h-20 items-center shadow-md bg-white fixed z-10"
        style={{ width: "100%" }}
      >
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              style={{ width: "160px", height: "45px" }}
              alt=""
              className="object-fill"
            />
          </Link>
        </div>
        <div className="menu flex justify-between items-center gap-8 font-medium">
          <Link to="/">Product</Link>
          <Link to="/?cat=pant">Pant</Link>
          <Link to="/?cat=shirt">Shirt</Link>
          <Link to="/?cat=t_shirt">T-Shirt</Link>
          <Link to="/?cat=jacket">Jacket</Link>
          <Link to="/?cat=trouser">Trouser</Link>
          <Link to="/add">Add Item</Link>
        </div>
        <div className="cart flex justify-between items-center gap-6">
          <div className="item relative">
            <img src={cart} alt="" className="w-10 h-10 object-fill" />
            <Link
              to="/addToCart"
              cart={selectedItems}
              className="addItem absolute -top-1 -right-2 bg-green-400 rounded-full text-white font-bold shadow-xl shadow-green-900"
              style={{ padding: "0px 8px", fontSize: "14px" }}
            >
              {selectedItems.length}
            </Link>
          </div>
          <div className="auth">
            <Link
              to="/register"
              className="font-medium shadow-md px-4 py-2 rounded-full"
            >
              Signup
            </Link>
          </div>
          <div
            className="flex items-center gap-4 px-2 pl-3 profile rounded-full p-1 cursor-pointer shadow-md"
            style={{ border: ".5px solid #ddd" }}
          >
            <h1 className="font-medium">Ahsan Ali</h1>
            <img
              src={profile}
              alt=""
              className="w-10 h-10 object-fill shadow-md rounded-full p-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
