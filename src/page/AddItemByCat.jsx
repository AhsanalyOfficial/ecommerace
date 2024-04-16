import React, { useEffect, useState } from "react";
import { SingleSelectDropdown } from "./Selected";
import axios from "axios";
import { useCart } from "../context/ContextData";

export const AddItemByCat = () => {
  const { colors, sizes } = useCart();
  const [item, setItem] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectDetails, setSelectDetails] = useState(null);
  //
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [colorId, setColorId] = useState("");
  const [error, setError] = useState("");
  const handleColor = (selectOption) => {
    setColorValue(selectOption.value);
    setColorId(selectOption.id);
  };
  const handleSize = (selectOption) => {
    setSize(selectOption.value);
    setSizeId(selectOption.id);
  };
  //
  const handleSelectedItemChange = (selectedOptions) => {
    const itemName = selectedOptions.value;
    setSelectedItemId(itemName);
    const selectedItem = item.find((item) => item.name === itemName);
    setSelectDetails(selectedItem);
  };

  // fetch item data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8020/api/items/itemAddByCat",
          {
            withCredentials: true,
          }
        );
        console.log(res.data.item);
        setItem(res.data.item);
      } catch (error) {
        console.error("fetching data error", error);
      }
    };
    fetchData();
  }, []);
  // itemDetails post
  const handleSubmit = async () => {
    try {
      if (!selectDetails) {
        setError("Please select an item.");
        return;
      }
      await axios.post(
        "http://localhost:8020/api/items/itemDetails",
        {
          name: selectDetails.name,
          description: selectDetails.description,
          gender: selectDetails.gender,
          cat: selectDetails.cat,
          itemId: selectDetails._id,
          quantity,
          price,
          createdBy: selectDetails.createdBy,
          modifiedBy: selectDetails.modifiedBy,
          size: { _id: sizeId, size: size },
          color: { _id: colorId, color: colorValue },
          imageUrl: selectDetails.imageUrl,
        },
        {
          withCredentials: true,
        }
      );
      setError("");
    } catch (error) {
      if (error.response.status === 401) {
        setError("Please provide all fields");
      } else if (error.response.status === 404) {
        setError("Item already exists");
      } else {
        setError("An error occurred");
        console.log("Error uploading", error.message);
      }
    }
  };
  return (
    <div
      className="addItem p-36 "
      style={{
        background: "#5c524c",
      }}
    >
      <div
        className="m-auto px-10 py-16 shadow-lg"
        style={{ background: "#ecf0f1", width: "80%" }}
      >
        <div className="main flex flex-wrap items-center gap-4">
          {/* Item Name */}
          <div className="gap-2 flex flex-col text-sm w-72">
            <label htmlFor="" className="font-sm text-lg">
              Name
            </label>
            <SingleSelectDropdown
              name="itemId"
              options={
                item &&
                item.map((item) => ({
                  value: item.name,
                  label: item.name,
                }))
              }
              value={selectedItemId}
              onChange={handleSelectedItemChange}
            />
          </div>
          {/* gender */}
          <div className="gap-2 flex flex-col text-sm">
            <label htmlFor="" className="font-sm text-lg ">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              value={selectDetails?.gender || ""}
              readOnly
              className="px-2 py-2 outline-blue-800"
              style={{ border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>
          {/* category */}
          <div className="gap-2 flex flex-col text-sm">
            <label htmlFor="" className="font-sm text-lg ">
              Category
            </label>
            <input
              type="text"
              name="cat"
              value={selectDetails?.cat || ""}
              readOnly
              className="px-2 py-2 outline-blue-800"
              style={{ border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>
          {/* Description */}
          <div className="gap-2 flex flex-col text-sm w-full">
            <label htmlFor="" className="font-sm text-lg ">
              Description
            </label>
            <textarea
              name="description"
              value={selectDetails?.description || ""}
              readOnly
              className="pl-2 py-2 outline-blue-800"
              style={{ border: "1px solid #ddd", borderRadius: "4px" }}
            />
          </div>

          {/* Size Dropdown */}
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg ">
              Size
            </label>
            <SingleSelectDropdown
              name="size"
              options={
                sizes &&
                sizes.map((item) => ({
                  value: item.size,
                  label: item.size,
                  id: item._id,
                }))
              }
              value={size}
              onChange={handleSize}
            />
          </div>
          {/* Color Input */}
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg ">
              Color
            </label>
            <SingleSelectDropdown
              name="color"
              options={
                colors &&
                colors.map((item) => ({
                  value: item.color,
                  label: item.color,
                  id: item._id,
                }))
              }
              value={colorValue}
              onChange={handleColor}
            />
          </div>
          {/* Price Input */}
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg ">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pl-2 py-2 outline-blue-800"
              style={{ border: "1px solid #d1d1d1", borderRadius: "4px" }}
            />
          </div>
          {/* Quantity Input */}
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg ">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="pl-2 py-2 outline-blue-800"
              style={{ border: "1px solid #d1d1d1", borderRadius: "4px" }}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          {/* button */}
        </div>
        <div className="btn mt-10 flex">
          <button
            className="bg-blue-500 text-white m-0 px-16"
            onClick={handleSubmit}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemByCat;
