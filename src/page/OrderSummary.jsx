import React from "react";
import "../style/animate.css";
import { useCart } from "../context/ContextData";
const OrderSummary = () => {
  const { cartData } = useCart();
  const cartDatas = cartData.filter(
    (cart) => cart.deliveryStatus !== "Success"
  );
  const sub_total = cartDatas.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div
        className="p-6 shadow-lg text-white flex flex-col items-start gap-2"
        style={{ background: "#2f3542", width: "600px" }}
      >
        <h2>Order Summary</h2>
        <div className="w-full flex flex-col gap-6">
          <div
            className="prod-detail"
            style={{ height: "300px", overflow: "auto" }}
          >
            {cartDatas &&
              cartDatas.map((item, index) => (
                <div key={index} className="flex justify-between my-2">
                  <div className="flex gap-2">
                    <div
                      className="img shadow-lg"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={`http://localhost:8020/uploads/${item.cartImage[2]}`}
                        alt=""
                        style={{
                          objectFit: "fill",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="details">
                      <p className="text-sm">{item.name}</p>
                      <p>
                        {" "}
                        {item.color} / {item.size}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">PKR {item.actualPrice}</p>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div
              className="sub flex justify-between pt-2"
              style={{ borderTop: ".1px solid #d1d1d1" }}
            >
              <h3>Subtotal</h3>
              <p>Rs {sub_total}</p>
            </div>
            <div
              className="shipping-tax flex justify-between pb-2"
              style={{ borderBottom: ".1px solid #d1d1d1" }}
            >
              <h3>Shipping & Tax</h3>
              <p>Rs 500</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
