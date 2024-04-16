import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const userInfoToken =
    JSON.parse(localStorage.getItem("userInfoToken")) || null;
  const [userData, setUserData] = useState(userInfoToken);
  const [colors, setColors] = useState([]);
  const [genders, setGenders] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categorys, setCategorys] = useState([]);
  /////////////////////////////////////////////////////////////////
  // gender
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8020/api/items/getGender",
          {
            withCredentials: true,
          }
        );
        setGenders(res.data.gender);
      } catch (error) {
        console.log("Error fetching data gender:", error);
      }
    };
    fetchData();
  }, [genders]);
  const deleteGender = async (id) => {
    try {
      await axios.delete(`http://localhost:8020/api/items/deleteGender/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };
  /////////////////////////////////////////////////////////////////
  // color
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8020/api/items/getColor",
          {
            withCredentials: true,
          }
        );
        setColors(res.data.color);
      } catch (error) {
        console.log("Error fetching data color:", error);
      }
    };
    fetchData();
  }, [colors]);
  const deleteColor = async (id) => {
    try {
      await axios.delete(`http://localhost:8020/api/items/deleteColor/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };
  /////////////////////////////////////////////////////////////////
  // size
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8020/api/items/getSize", {
          withCredentials: true,
        });
        setSizes(res.data.size);
      } catch (error) {
        console.log("Error fetching data size:", error);
      }
    };
    fetchData();
  }, [sizes]);
  const deleteSize = async (id) => {
    try {
      await axios.delete(`http://localhost:8020/api/items/deleteSize/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };
  /////////////////////////////////////////////////////////////////
  // category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8020/api/items/getCategory",
          {
            withCredentials: true,
          }
        );
        setCategorys(res.data.category);
      } catch (error) {
        console.log("Error fetching data category:", error);
      }
    };
    fetchData();
  }, [categorys]);
  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8020/api/items/deleteCategory/${id}`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log("Error incrementing quantity", error);
    }
  };
  /////////////////////////////////////////////////////////////////
  const login = async (input) => {
    try {
      const res = await axios.post(
        "http://localhost:8020/api/user/login",
        input,
        {
          withCredentials: true,
        }
      );
      console.log("context user data", res.data.user);
      setUserData(res.data.user);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          return "Please provide all fields";
        } else if (error.response.status === 404) {
          return "User not found";
        }
        return "Password is incorrect";
      }
    }
  };
  /////////////////////////////////////////////////////////////////
  const logout = async () => {
    try {
      await axios.get("http://localhost:8020/api/user/logout", {
        withCredentials: true,
      });
      setUserData(null);
      window.location.reload();
    } catch (error) {
      console.log("Error logout", error.message);
    }
  };
  ////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (userData === null) {
      localStorage.removeItem("userInfoToken");
    } else {
      localStorage.setItem("userInfoToken", JSON.stringify(userData));
    }
  }, [userData]);
  ////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get("http://localhost:8020/api/user/token", {
          withCredentials: true,
        });
        return res;
      } catch (error) {
        localStorage.removeItem("userInfoToken");
      }
    };
    fetchToken();
  }, []);
  ////////////////////////////////////////////////////////////////////
  // display item
  const display = JSON.parse(localStorage.getItem("displayItem")) || null;
  const [displayItem, setDisplayItem] = useState(display);
  const handleDisplay = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8020/api/items/display/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log("context item data display", res.data.item);
      setDisplayItem(res.data.item);
    } catch (error) {
      console.log("Error fetching data item:", error);
    }
  };
  useEffect(() => {
    if (displayItem === null) {
      localStorage.removeItem("displayItem");
    } else {
      localStorage.setItem("displayItem", JSON.stringify(displayItem));
    }
  }, [displayItem]);
  ////////////////////////////////////////////////////////////////////
  // cart functionality
  const [cartData, setCartData] = useState([]);
  const handleCartData = async (id, size, color) => {
    try {
      const res = await axios.get(
        `http://localhost:8020/api/cart/addToCart/${id}`,
        {
          params: { size, color },
          withCredentials: true,
        }
      );
      console.log("cart item data", res.data);
      return res.data.item;
    } catch (error) {
      if (error.response.status === 404) {
        return "please login first";
      } else if (error.response.status === 401) {
        return "please select a color";
      } else if (error.response.status === 402) {
        return "please select a size";
      } else {
        return "An error occurred";
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8020/api/cart/getCarts", {
          withCredentials: true,
        });
        setCartData(res.data.cart);
      } catch (error) {
        console.log("Error fetching data cart:", error);
      }
    };
    fetchData();
  }, [cartData]);
  ////////////////////////////////////////////////////////////////////
  const [cartDataAdmin, setCartDataAdmin] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8020/api/cart/getCartsByAdmin",
          {
            withCredentials: true,
          }
        );
        setCartDataAdmin(res.data.cartDatas);
      } catch (error) {
        console.log("Error fetching data cart:", error);
      }
    };
    fetchData();
  }, [cartDataAdmin]);
  ////////////////////////////////////////////////////////////////////
  // get order info
  const [orderInfo, setOrderInfo] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8020/api/order/getInfo", {
          withCredentials: true,
        });
        setOrderInfo(res.data.orderInfo);
      } catch (error) {
        console.log("Error fetching order info:", error);
      }
    };
    fetchData();
  }, [orderInfo]);
  ////////////////////////////////////////////////////////////////////
  return (
    <CartContext.Provider
      value={{
        login,
        logout,
        userData,
        colors,
        sizes,
        categorys,
        genders,
        deleteCategory,
        deleteSize,
        deleteColor,
        deleteGender,
        handleDisplay,
        handleCartData,
        cartData,
        cartDataAdmin,
        orderInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
