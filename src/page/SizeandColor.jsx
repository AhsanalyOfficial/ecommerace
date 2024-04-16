import axios from "axios";
import React, { useState } from "react";
import { useCart } from "../context/ContextData";

const SizeAndColor = () => {
  const {
    colors,
    sizes,
    categorys,
    genders,
    deleteCategory,
    deleteSize,
    deleteColor,
    deleteGender,
  } = useCart();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [colorError, setColorError] = useState("");
  const [cat, setCat] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [error, setError] = useState("");
  // size
  const handleSize = async () => {
    try {
      if (!size) throw new Error("Please enter a size");
      const res = await axios.post("http://localhost:8020/api/items/addSize", {
        size,
      });
      // console.log("Size added:", res.data);
      setSize("");
      setError("");
    } catch (error) {
      setError(error.response ? error.response.data.error : error.message);
    }
  };
  // color
  const handleColor = async () => {
    try {
      if (!color) throw new Error("Please enter a color");
      const res = await axios.post("http://localhost:8020/api/items/addColor", {
        color,
      });
      // console.log("COlor added:", res.data);
      setColor("");
      setColorError("");
    } catch (error) {
      setColorError(error.response ? error.response.data.error : error.message);
    }
  };
  // category
  const handleCategory = async () => {
    try {
      if (!cat) throw new Error("Please enter a category");
      const res = await axios.post(
        "http://localhost:8020/api/items/addCategory",
        {
          cat,
        }
      );
      console.log("Category added:", res.data);
      setCat("");
      setCategoryError("");
    } catch (error) {
      setCategoryError(
        error.response ? error.response.data.error : error.message
      );
    }
  };
  // gender
  const handleGender = async () => {
    try {
      if (!gender) throw new Error("Please enter a gender");
      const res = await axios.post(
        "http://localhost:8020/api/items/addGender",
        {
          gender,
        }
      );
      console.log("Gender added:", res.data);
      setGender("");
      setGenderError("");
    } catch (error) {
      setGenderError(
        error.response ? error.response.data.error : error.message
      );
    }
  };
  return (
    <div
      className="px-36 py-24"
      style={{ width: "100%", background: "#5c524c" }}
    >
      <div
        className="m-auto p-10 shadow-xl flex flex-col gap-2 justify-center"
        style={{ width: "80%", background: "#ecf0f1" }}
      >
        <h2 className="text-center font-bold text-2xl">
          Size, Color and Category
        </h2>
        {/* gender */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-sm text-lg">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              className="w-full px-4 outline-blue-600 rounded-md py-1.5"
              style={{ border: "1px solid #d1d1d1" }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          {genderError && <p className="text-red-600">{genderError}</p>}
          <div className="btn">
            <button className="bg-blue-600 rounded-md" onClick={handleGender}>
              Add Gender
            </button>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {genders &&
              genders.map((data, index) => (
                <button
                  key={index}
                  className="rounded-md relative"
                  style={{ background: "#2c3e50" }}
                >
                  {data.gender}
                  <p
                    className="cursor-pointer absolute -top-1 right-1 hover:text-red-600"
                    onClick={() => deleteGender(data._id)}
                  >
                    x
                  </p>
                </button>
              ))}
          </div>
        </div>
        {/* size */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-sm text-lg">
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              className="w-full px-4 outline-blue-600 rounded-md py-1.5"
              style={{ border: "1px solid #d1d1d1" }}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <div className="btn">
            <button className="bg-blue-600 rounded-md" onClick={handleSize}>
              Add Size
            </button>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {sizes &&
              sizes.map((data, index) => (
                <button
                  key={index}
                  className="rounded-md relative"
                  style={{ background: "#2c3e50" }}
                >
                  {data.size}
                  <p
                    className="cursor-pointer absolute -top-1 right-1 hover:text-red-600"
                    onClick={() => deleteSize(data._id)}
                  >
                    x
                  </p>
                </button>
              ))}
          </div>
        </div>
        {/* color */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium text-lg">
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              className="w-full px-4 outline-blue-600 rounded-md py-1.5"
              style={{ border: "1px solid #d1d1d1" }}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{colorError}</p>}
          <div className="btn">
            <button className="bg-blue-600 rounded-md" onClick={handleColor}>
              Add Color
            </button>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {colors &&
              colors.map((data, index) => (
                <button
                  key={index}
                  className="rounded-md relative"
                  style={{ background: "#2c3e50" }}
                >
                  {data.color}
                  <p
                    className="cursor-pointer absolute -top-1 right-1 hover:text-red-600"
                    onClick={() => deleteColor(data._id)}
                  >
                    x
                  </p>
                </button>
              ))}
          </div>
        </div>
        {/* category */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium text-lg">
              Category
            </label>
            <input
              type="text"
              name="cat"
              id="cat"
              className="w-full px-4 outline-blue-600 rounded-md py-1.5"
              style={{ border: "1px solid #d1d1d1" }}
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{categoryError}</p>}
          <div className="btn">
            <button className="bg-blue-600 rounded-md" onClick={handleCategory}>
              Add Category
            </button>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {categorys &&
              categorys.map((data, index) => (
                <button
                  key={index}
                  className="rounded-md relative"
                  style={{ background: "#2c3e50" }}
                >
                  {data.cat}
                  <p
                    className="cursor-pointer absolute -top-1 right-1 hover:text-red-600"
                    onClick={() => deleteCategory(data._id)}
                  >
                    x
                  </p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeAndColor;
