import React from "react";
import { Link, NavLink } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <>
      <div
        className="w-full flex justify-between"
        style={{ background: "#584e48" }}
      >
        <div style={{ width: "90%" }} className="m-auto relative">
          <Link to="/home">
            <h2 className="font-bold text-2xl pb-4">Go to Homepage</h2>
          </Link>
          <div className="flex items-start">
            <nav className="w-full flex gap-6 bg-slate-300 items-center h-auto py-2 pl-10">
              <NavLink to="/cart" activeClassName="active-link">
                Cart
              </NavLink>
              <NavLink to="/checkout" activeClassName="active-link">
                Information
              </NavLink>
              <NavLink to="/checkout/shipping" activeClassName="active-link">
                Shipping
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
