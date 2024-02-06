import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/ContextData";
import "../style/animate.css";

const Product = () => {
  const { handleCart } = useCart();
  const [items, setItems] = useState([]);
  const [displayItemData, setDisplayItemData] = useState(null);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8020/api/items${cat}`);
      setItems(res.data);
    };
    fetchData();
  }, [cat]);

  const handleData = async (itemId) => {
    try {
      const res = await axios.get(`http://localhost:8020/api/items/${itemId}`);
      setDisplayItemData(res.data);
      localStorage.setItem("displayItemData", JSON.stringify(res.data));
      await handleCart(itemId);
      console.log(res.data);
    } catch (error) {
      console.log("error in display item", error.message);
    }
  };
  return (
    <>
      <div
        className="main flex justify-center pt-36 pb-20"
        style={{ width: "100%" }}
      >
        <div
          className="flex justify-evenly flex-wrap gap-5 gap-y-20 items-center"
          style={{ width: "80%" }}
        >
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center shadow-2xl p-4 rounded-md"
              >
                <div className="flex flex-col gap-2">
                  <div className="productImage relative">
                    <img
                      src={item.imageUrl[0]}
                      alt=""
                      style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                    <Link
                      to={{
                        pathname: "/displayData",
                        state: { displayItemData },
                      }}
                      className="productDisplayOverlay"
                      onClick={() => handleData(item._id)}
                    ></Link>
                  </div>
                  <h1 className="font-bold mt-4">{item.name}</h1>
                  <p>{item.description}</p>
                  <p className="flex gap-2 font-medium">
                    RS:<p className="font-light">{item.price}</p>
                  </p>
                  <button
                    className="font-medium text-white px-3 py-1 rounded-sm bg-green-600"
                    onClick={() => handleData(item._id)}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Product;
