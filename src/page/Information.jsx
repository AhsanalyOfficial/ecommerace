import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import cities from "cities.json";
import { useCart } from "../context/ContextData";

const Information = () => {
  const { orderInfo } = useCart();
  const [email, setEmail] = useState(orderInfo[0]?.email || "");
  const [fname, setFname] = useState(orderInfo[0]?.f_name || "");
  const [lname, setLname] = useState(orderInfo[0]?.last_name || "");
  const [address, setAddress] = useState(orderInfo[0]?.address || "");
  const [city, setCity] = useState(orderInfo[0]?.city || "");
  const [code, setCode] = useState(orderInfo[0]?.code || "");
  const [phone, setPhone] = useState(orderInfo[0]?.phone || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInfo = async () => {
    try {
      if (!validatePhone(phone)) {
        setError("Phone number is not valid.");
        return;
      }
      await axios.post(
        "http://localhost:8020/api/order/info",
        {
          email: email || orderInfo.email,
          f_name: fname,
          last_name: lname,
          address,
          city,
          code,
          phone,
        },
        {
          withCredentials: true,
        }
      );
      setError("");
      navigate("shipping");
    } catch (error) {
      if (error.response.status === 401) {
        setError("Email address is not valid.");
      } else if (error.response.status === 400) {
        setError("Please fill all the fields");
      } else if (error.response.status === 402) {
        setError("Phone number is not valid.");
      } else {
        setError("An error occurred while processing");
      }
    }
  };
  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^3\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="m-auto flex gap-10">
          <div
            className="p-10"
            style={{ background: "#2f3542", width: "100%" }}
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
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`bg-gray-50 border ${
                    validatePhone(phone) ? "border-gray-300" : "border-red-500"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  required
                />
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Select City</option>
                  {cities
                    .filter((c) => c.country === "PK")
                    .map((c, index) => (
                      <option key={index} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </div>
              {city && (
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              )}
              {/*  */}
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
                  name="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 pb-4">{error}</p>}
            <div className="flex justify-between">
              <Link to="/cart">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Go to Cart
                </button>
              </Link>
              <button
                onClick={handleInfo}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
