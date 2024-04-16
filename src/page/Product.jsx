import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/animate.css";
import { useCart } from "../context/ContextData";

const Product = () => {
  const { handleDisplay } = useCart();
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState("");
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8020/api/items/getItems/cat${cat}`
        );
        setDatas(res.data.items);
        console.log(res.data.items);
      } catch (error) {
        setError("Data not found");
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cat]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8020/api/items/mergeData"
        );
        console.log(res.data.mergedResults);
        return res.data.mergedResults;
      } catch (error) {
        console.log("Error fetching merge data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center gap-10 flex-wrap py-32 px-24"
        style={{ background: "#5c524c" }}
      >
        {datas.map((data, index) => (
          <div
            key={index}
            className="mb-10"
            style={{
              width: "400px",
              height: "auto",
            }}
          >
            <div>
              <div className="productImage relative">
                <img
                  src={`http://localhost:8020/uploads/${data.imageUrl[2]}`}
                  style={{
                    objectFit: "cover",
                    height: "auto",
                    aspectRatio: "2/3",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  alt="product"
                />
                <Link onClick={() => handleDisplay(data._id)} to="/displayData">
                  <div className="productDisplayOverlay absolute"></div>
                </Link>
              </div>
              <div className="details flex flex-col-reverse justify-between mt-6">
                <div className="name-des">
                  <h4 className="text-lg font-bold mb-4 pl-1.5">{data.name}</h4>
                  <p className="text-md font-medium mb-4 pl-1.5">
                    PKR: {data.price}
                  </p>
                  <p className="text-md font-medium mb-4 pl-1.5">
                    Quantity: {data.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {datas ? (
          // ///////////////////////////////////////
          ""
        ) : (
          // ///////////////////////////////////////
          <p className="text-center text-2xl font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default Product;
