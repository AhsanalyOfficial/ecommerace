import React from "react";
import { useCart } from "../context/ContextData";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Shipping() {
  const { orderInfo, cartData } = useCart();
  const cartDatas = cartData.filter(
    (cart) => cart.deliveryStatus !== "Success"
  );
  const items = cartData.map((item) => ({
    itemId: item.itemId,
    itemSize: item.size,
    itemColor: item.color,
  }));
  const makePaymentRequest = async () => {
    const stripe = await loadStripe(
      "pk_test_51OoWMwBcu8LTKprZ4VKAm2UQTEMlHEwl7mS2qFXhFneX3Dhu1Up06NXraAns2vAegYy1PyIhDPQWhY6hpI2BAxQ4004zBcY7Sr"
    );
    const body = {
      products: cartDatas,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(
        "http://localhost:8020/api/order/checkout/paymentMethod",
        body,
        {
          withCredentials: true,
          headers: headers,
        }
      );
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log("Error redirecting to checkout:", result.error.message);
      } else {
        await paymentSuccess();
      }
    } catch (error) {
      console.log("Error making payment request:", error.message);
    }
  };

  const paymentSuccess = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8020/api/order/paymentSuccess/${items.itemId}/${items.itemSize}/${items.itemColor}`,
        {
          withCredentials: true,
        }
      );
      console.log("Payment success", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6" style={{ width: "100%" }}>
        <div
          className="flex flex-col gap-6 px-10 py-6"
          style={{ background: "#2f3542" }}
        >
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="w-20">Contact</p>
              <p>{orderInfo && orderInfo[0]?.email}</p>
            </div>
            <Link className="text-white hover:text-blue-500" to="/checkout">
              Change
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="w-20">Phone</p>
              <p>{orderInfo && orderInfo[0]?.phone}</p>
            </div>
            <Link className="text-white hover:text-blue-500" to="/checkout">
              Change
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="w-20">Ship</p>
              <p>{orderInfo && orderInfo[0]?.address}</p>
            </div>
            <Link className="text-white hover:text-blue-500" to="/checkout">
              Change
            </Link>
          </div>
        </div>
        <div className="py-6 btn flex justify-between">
          <Link to="/checkout">
            <button className="bg-blue-700 hover:bg-blue-600">
              Return to Information
            </button>
          </Link>
          <button
            className="bg-blue-700 hover:bg-blue-600"
            onClick={() => {
              makePaymentRequest(), paymentSuccess();
            }}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default Shipping;
