import React, { useEffect, useState } from "react";
import { useCart } from "../context/ContextData";
import axios from "axios";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartData } = useCart();
  const [error, setError] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.delete(
  //         `http://localhost:8020/api/items/delete`,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       console.log("delete data", res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const cartDatas = cartData.filter(
    (cart) => cart.deliveryStatus !== "Success"
  );
  useEffect(() => {}, [cartDatas]);
  const incrementQuantity = async (itemId) => {
    try {
      const response = await axios.put(
        `http://localhost:8020/api/cart/incre/${itemId}`
      );
      console.log(response);
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };

  const decrementQuantity = async (itemId) => {
    try {
      const response = await axios.put(
        `http://localhost:8020/api/cart/decre/${itemId}`
      );
      console.log(response);
      if (response.data.cart.quantity === 0) {
        await axios.delete(
          `http://localhost:8020/api/cart/deleteCart/${itemId}`
        );
      }
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };

  const getTotalPrice = () => {
    return cartDatas.reduce((total, item) => total + item.price, 0);
  };

  const getTotalCount = () => {
    return cartDatas.reduce((total, item) => total + item.quantity, 0);
  };

  const getDeliveryTax = () => {
    const count = getTotalCount();
    if (count === 1) {
      return 200;
    } else if (count <= 5) {
      return 500;
    } else if (count <= 10) {
      return 750;
    } else {
      return 0;
    }
  };

  const getSubtotal = () => {
    return getTotalPrice() + getDeliveryTax();
  };

  return (
    <>
      <div
        className="py-40 px-32 flex justify-center gap-20 flex-row-reverse"
        style={{ background: "#5c524c" }}
      >
        {cartDatas.length === 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Your Cart is empty</h1>
            <Link to="/">
              <button className="w-full bg-blue-500 text-white py-1.5">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {cartDatas.length >= "1" ? (
          <div
            className="flex flex-col gap-6 bg-gray-400 p-6 py-8 h-fit shadow-xl"
            style={{
              width: "30%",
              background: "#3b3b3b",
            }}
          >
            <h1 className="font-bold text-center text-xl">Order Summary</h1>
            <div className="details flex flex-col gap-6">
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Items</p>
                <p>{getTotalCount()}</p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Total</p>
                <p>
                  <span className="font-medium">PKR :</span> {getTotalPrice()}
                </p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Delivery Tax</p>
                <p>{getDeliveryTax()}</p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Subtotal</p>
                <p>
                  <span className="font-medium">PKR :</span> {getSubtotal()}
                </p>
              </div>
              <div className="checkout-btn my-2">
                <Link to="/checkout">
                  <button className="w-full py-1.5 bg-blue-500 text-white rounded-md">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {cartDatas.length > 0 ? (
          <div style={{ width: "70%" }}>
            <div className="flex flex-col gap-10">
              {cartDatas &&
                cartDatas.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start p-6"
                    style={{ background: "#3b3b3b" }}
                  >
                    <div
                      className="img"
                      style={{ width: "200px", height: "100%" }}
                    >
                      <img
                        src={`http://localhost:8020/uploads/${data?.cartImage[0]}`}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          aspectRatio: "2/3",
                          height: "auto",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="name-price">
                      <h4 className="text-md font-bold mb-4 pl-1.5 text-white">
                        {data.name}
                      </h4>
                      <p className="text-md font-medium mb-4 pl-1.5">
                        PKR: {data.actualPrice}
                      </p>
                      <p className="text-md font-medium mb-4 pl-1.5">
                        Color : {data.color}
                      </p>
                      <p className="text-md font-medium mb-4 pl-1.5">
                        Size : {data.size}
                      </p>
                    </div>
                    {/* add or minus */}
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => decrementQuantity(data._id)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-none hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 bg-gray-200 text-gray-700">
                        {data.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(data._id)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-none hover:bg-gray-300"
                      >
                        +
                      </button>
                      <p className="text-red-500">{error && error}</p>
                    </div>
                    {/*  */}
                    <div className="total">
                      <p>
                        <span>PKR :</span> {data.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AddToCart;
