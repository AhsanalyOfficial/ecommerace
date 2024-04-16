import React from "react";
// import { useCart } from "../context/ContextData";
import { Link } from "react-router-dom";

const Checkout = () => {
  // const { cartDataAdmin } = useCart();
  return (
    <>
      <div className="w-full py-20" style={{ background: "#584e48" }}>
        <div
          className="flex gap-2 m-auto py-2 mb-2"
          style={{ width: "90%", borderBottom: ".5px solid #d1d1d1" }}
        >
          <Link to="" className="text-white">
            Cart
          </Link>
          <Link to="/information" className="active text-blue-500">
            Information
          </Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/payment">Payment</Link>
        </div>
        <div className="m-auto flex gap-10" style={{ width: "90%" }}>
          <form
            className="p-10"
            style={{ width: "70%", background: "#3b3b3b" }}
          >
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <div className="flex justify-between">
              <Link to="/cart">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Go to Cart
                </button>
              </Link>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continou Shopping
              </button>
            </div>
          </form>
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
                <p></p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Total</p>
                <p>
                  <span className="font-medium">PKR :</span>
                </p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Delivery Tax</p>
                <p></p>
              </div>
              <div
                className="flex justify-between pb-4 px-2"
                style={{ borderBottom: ".6px solid #202020" }}
              >
                <p>Subtotal</p>
                <p>
                  <span className="font-medium">PKR :</span>
                </p>
              </div>
              <div className="checkout-btn my-2">
                <Link to="/">
                  <button className="w-full py-1.5 bg-blue-500 text-white rounded-md">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
