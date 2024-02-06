import React from "react";
import { useCart } from "../context/ContextData";
import cartLogo from "../assets/cartlog.jpg";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { selectedItems } = useCart();
  const subTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div
        className="flex justify-between items-center pb-20 pt-36 px-20"
        style={{ background: "#deebfb" }}
      >
        <div className="logo" style={{ width: "50%" }}>
          <img
            src={cartLogo}
            alt=""
            style={{ width: "550px", height: "500px", objectFit: "fill" }}
          />
        </div>
        <div className="content" style={{ width: "50%" }}>
          <div style={{ width: "550px" }} className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Friday Deals</h1>
            <p className="font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              veritatis quisquam saepe ratione tempora nemo.
            </p>
            <Link
              className="py-1.5 rounded-md shadow-lg mt-6 max-w-max px-6 font-bold text-white transition-all hover:px-10"
              style={{ background: "#3498db" }}
              to="/"
            >
              Go to
            </Link>
          </div>
        </div>
      </div>
      <div
        className="main flex justify-center py-20"
        style={{ background: "#ecf0f1", width: "100%" }}
      >
        <div className="cart p-10 flex flex-col gap-6" style={{ width: "80%" }}>
          <h1 className="text-start font-bold text-4xl py-6">Shopping Cart</h1>
          {selectedItems &&
            selectedItems.map((item, index) => (
              <div
                key={index}
                className="cart-item flex justify-between items-start gap-4 shadow-xl p-6 rounded-md"
                style={{ backgroundColor: "#95a5a6" }}
              >
                <div className="item-image">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="shadow-2xl rounded-md"
                    style={{
                      width: "250px",
                      height: "275px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="cart-data flex flex-col gap-4 pt-2">
                  <h1 className="font-bold text-xl">{item.name}</h1>
                  <p className="font-medium text-lg">{item.description}</p>
                  <p className="flex gap-2">
                    <p className="font-bold">RS :</p>
                    {item.price}
                  </p>
                </div>
                <button className="text-2xl font-bold text-green-700 top-2 right-6 hover:text-red-500">
                  X
                </button>
              </div>
            ))}
          {selectedItems.length === 0 && (
            <div>
              <h1 className="text-start font-bold text-xl text-red-500">
                Empty Cart
              </h1>
            </div>
          )}
          {selectedItems.length > 0 && (
            <div
              className="subtotal shadow-2xl rounded-md  w-96 p-6 text-white"
              style={{ background: "#95a5a6" }}
            >
              <h1 className="font-bold text-2xl ">Order Summary</h1>
              <div className="sunDetail mt-6 flex flex-col gap-4">
                <p className="font-medium flex justify-between">
                  Total Items :{" "}
                  <p className="font-light bg-gray-500 px-2 rounded-md">
                    {selectedItems.length}
                  </p>
                </p>
                <p className="font-medium flex justify-between">
                  Subtotal :{" "}
                  <p className="font-light bg-gray-500 px-2 rounded-md">
                    {subTotal}
                  </p>{" "}
                </p>
                <button
                  className="py-1.5 rounded-md shadow-lg mt-6"
                  style={{ background: "#3498db" }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
