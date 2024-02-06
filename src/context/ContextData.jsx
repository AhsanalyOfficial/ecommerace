import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const userInfoToken = JSON.parse(localStorage.getItem("userInfoToken")) || {};
  const [userData, setUserData] = useState(userInfoToken);

  /////////////////////////////////////////////////////////////////
  const userLogin = async (input) => {
    try {
      const res = await axios.post(
        "http://localhost:8020/api/user/login",
        input
      );
      if (res.status === 200) {
        console.log("User login successfully");
        setUserData(res.data);
      } else {
        console.log("Unexpected response:", res);
      }
    } catch (error) {
      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message === "User not found"
        ) {
          setError("User not found.");
          console.log("User not found.");
        }
      }
    }
  };
  /////////////////////////////////////////////////////////////////
  const handleCart = async (itemId) => {
    try {
      const res = await axios.get(`http://localhost:8020/api/items/${itemId}`);
      const newItem = res.data;
      setSelectedItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error fetching item:", error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  return (
    <CartContext.Provider
      value={{ handleCart, selectedItems, userLogin, userData }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
