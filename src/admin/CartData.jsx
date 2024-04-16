import React from "react";
import { useCart } from "../context/ContextData";

const cartDataAdmin = () => {
  const { cartDataAdmin } = useCart();
  // console.log(cartDataAdmin);
  return (
    <>
      <div className="w-full py-36">
        <h1 className="text-center py-6 text-3xl text-black">Add to cart</h1>
        <div
          class="relative overflow-x-auto shadow-md sm:rounded-lg m-auto"
          style={{ width: "80%" }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Product name
                </th>
                <th scope="col" className="px-6 py-4">
                  Color
                </th>
                <th scope="col" className="px-6 py-4">
                  Size
                </th>
                <th scope="col" className="px-6 py-4">
                  Category
                </th>
                <th scope="col" className="px-6 py-4">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-4">
                  Price
                </th>
                <th scope="col" className="px-6 py-4">
                  Delivery
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            {cartDataAdmin &&
              cartDataAdmin.map((item, index) => (
                <tbody>
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.color}</td>
                    <td className="px-6 py-4">{item.size}</td>
                    <td className="px-6 py-4">{item.cat || "not found"}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.deliveryStatus}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default cartDataAdmin;
