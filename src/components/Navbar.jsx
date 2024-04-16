import React, { useEffect, useState } from "react";
import cart from "../assets/cart1.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/ContextData";
import "../style/animate.css";

const Navbar = () => {
  const { userData, logout, cartData } = useCart();
  // sticky
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  const cartDatas = cartData.filter(
    (cart) => cart.deliveryStatus !== "Success"
  );
  useEffect(() => {}, [cartDatas]);
  //
  return (
    <>
      <div
        className={`navbar ${
          isSticky ? "sticky" : ""
        } flex justify-between px-20 py-6 text-white w-full shadow-sm`}
        // style={{ width: "100%", background: "#212121" }}
      >
        <div className="logo">
          <Link to="/home">
            {/* <img
              src={logo}
              style={{ width: "145px", height: "40px" }}
              alt=""
              className="object-fill"
            /> */}
            <h1 className="text-shadow font-bold text-xl">SMART SHOPPING</h1>
          </Link>
        </div>
        {/* ////////////////////////////////// */}
        <div className="menu flex justify-between items-center gap-8 font-medium text-md text-white">
          <Link className="text-shadow" to="/">
            Product
          </Link>
          <Link className="text-shadow" to="/?cat=pant">
            Pant
          </Link>
          <Link className="text-shadow" to="/?cat=shirt">
            Shirt
          </Link>
          <Link className="text-shadow" to="/?cat=t_shirt">
            T-Shirt
          </Link>
          <Link className="text-shadow" to="/?cat=jacket">
            Jacket
          </Link>
          <Link className="text-shadow" to="/?cat=trouser">
            Trouser
          </Link>
          {userData?.role === "admin" ? (
            <Link className="text-shadow" to="/add">
              Add Item
            </Link>
          ) : (
            ""
          )}
        </div>
        {/* ////////////////////////////////// */}
        <div className="cart flex justify-between items-center gap-6">
          <div className="auth pr-4">
            {userData && userData ? (
              <Link onClick={logout} to="/" className="text-shadow font-medium">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="text-shadow font-medium">
                Login
              </Link>
            )}
          </div>
          <div className="flex items-center gap-4 profile rounded-full cursor-pointer shadow shadow-white">
            <img
              src={
                userData && userData
                  ? `http://localhost:8020/uploads/${userData?.userImage}`
                  : profile
              }
              alt=""
              className="w-10 h-10 object-cover shadow-md rounded-full"
            />
          </div>
          <Link to="/cart" className="item relative">
            <img src={cart} alt="" className="w-9 h-9 object-fill" />
            <Link
              to="/cart"
              className="addItem absolute -top-1 -right-2 bg-green-400 rounded-full text-white font-bold shadow-xl shadow-green-900"
              style={{ padding: "0px 7px", fontSize: "12px" }}
            >
              {userData?.role === "admin" ||
              !userData ||
              cartDatas?.length === 0
                ? ""
                : cartDatas?.length}
            </Link>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
