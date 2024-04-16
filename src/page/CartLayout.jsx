import React from "react";
import { Outlet } from "react-router-dom";
import ChecoutPage from "./ChecoutPage";
import { CheckotFooter } from "./CheckotFooter";
import OrderSummary from "./OrderSummary";

const CartLayout = () => {
  return (
    <>
      <ChecoutPage />
      <div className="w-full" style={{ background: "#584e48" }}>
        <div
          className="flex m-auto gap-4 items-center"
          style={{ width: "90%", background: "#584e48", padding: "20px 0" }}
        >
          <Outlet />

          <OrderSummary />
        </div>
      </div>
      <CheckotFooter />
    </>
  );
};

export default CartLayout;
