<!-- Add Item -->

// import add from "../assets/add.png";
// import "../style/animate.css";
// import React, { useState } from "react";
// import axios from "axios";
// import { MultiSelectDropdown, SingleSelectDropdown } from "./Selected";
// import { useNavigate } from "react-router-dom";

// const Additem = () => {
// //
// const sizeOptions = [
// { value: "option1", label: "Small" },
// { value: "option2", label: "Medium" },
// { value: "option3", label: "Large" },
// { value: "option4", label: "XL" },
// ];
// const optionsColor = [
// { value: "option1", label: "Black" },
// { value: "option2", label: "Blue" },
// { value: "option3", label: "Red" },
// { value: "option4", label: "White" },
// { value: "option5", label: "Green" },
// ];
// const optionsGender = [
// { value: "option1", label: "Men" },
// { value: "option2", label: "Women" },
// { value: "option3", label: "Child" },
// ];
// const jeansSizeOptions = [
// { value: "option1", label: "28" },
// { value: "option2", label: "30" },
// { value: "option3", label: "32" },
// { value: "option4", label: "34" },
// { value: "option5", label: "36" },
// { value: "option6", label: "38" },
// ];
// const [selectedValues, setSelectedValues] = useState([]);
// const [selectedColor, setSelectedColor] = useState([]);
// const [selectedGender, setSelectedGender] = useState(null);
// const [selectedSizeJeans, setSelectedSizeJeans] = useState([]);
// const handleMultiSelectChange = (selectedOptions) => {
// setSelectedValues(selectedOptions);
// };
// const handleMultiSelectChangeColor = (selectedOptions) => {
// setSelectedColor(selectedOptions);
// };
// const handleMultiSelectChangeGender = (selectedOptions) => {
// setSelectedGender(selectedOptions);
// };
// const handleMultiSelectChangeJeans = (selectedOptions) => {
// setSelectedSizeJeans(selectedOptions);
// };
// //
// const [name, setName] = useState("");
// const [description, setDescription] = useState("");
// const [file, setFile] = useState([]);
// const [price, setPrice] = useState("");
// const [cat, setCat] = useState("");
// const [error, setError] = useState("");
// const [imageUrl, setImageUrl] = useState([]);
// const [stock, setStock] = useState("");
// const upload = async () => {
// try {
// const formData = new FormData();
// file.forEach((file, index) => {
// formData.append("file", file);
// });
// const res = await axios.post(
// "http://localhost:8020/api/upload/multiple",
// formData
// );
// return res.data.filenames;
// } catch (err) {
// console.log("upload files error", err);
// }
// };

// const handleImageChange = (e) => {
// const selectedFiles = Array.from(e.target.files);
// const limitedFiles = selectedFiles.slice(0, 4);
// if (limitedFiles.length > 0) {
// setFile(limitedFiles);
// const urls = limitedFiles.map((file) => URL.createObjectURL(file));
// setImageUrl(urls);
// }
// };

// const handleSubmit = async () => {
// try {
// const imgUrls = await upload();
// let sizeArray = [];
// if (cat === "pant") {
// sizeArray = selectedSizeJeans.map((size) => size.label);
// } else {
// sizeArray = selectedValues.map((size) => size.label);
// }
// const colorArray = selectedColor.map((color) => color.label);
// const genderValue = selectedGender.label;

// const response = await axios.post(
// "http://localhost:8020/api/items/addItem",
// {
// name,
// description,
// price,
// cat,
// imageUrl: imgUrls,
// size: sizeArray,
// color: colorArray,
// stock,
// gender: genderValue,
// },
// {
// withCredentials: true,
// }
// );

// console.log("response data", response.data);
// window.location.reload();
// // setName("");
// // setDescription("");
// // setPrice("");
// // setCat("");
// // setFile([]);
// // setImageUrl([]);
// // setSelectedGender(null);
// // setSelectedColor([]);
// // setSelectedValues([]);
// // setSelectedSizeJeans([]);
// // setStock("");
// // setError("");
// } catch (error) {
// if (
// error.response.status === 402 &&
// error.response.data.message === "Email already exists"
// ) {
// setError("Please provide all fields");
// } else {
// setError(
// error.response ? error.response.data.error : "An error occurred"
// );
// console.log("Error uploading", error.message);
// }
// }
// };

// return (
// <>
// <div
// className="main-container pt-36 pb-14 shadow-2xl w-full"
// style={{ background: "#5c524c" }}
// >
// <div
// className="add p-10 flex flex-col gap-10"
// style={{ background: "#ecf0f1", width: "60%", margin: "auto" }}
// >
// <div className="image flex justify-between items-center">
// <div
// className="set flex justify-center items-center shadow-lg rounded-md"
// style={{
//                 width: "200px",
//                 height: "200px",
//                 border: "1px solid #eee",
//               }}
// >
// <input
// type="file"
// id="file"
// name="file"
// className=""
// onChange={handleImageChange}
// style={{ display: "none" }}
// required
// multiple
// />
// <label htmlFor="file" className="cursor-pointer">
// <img src={add} alt="" />
// </label>
// </div>
// {/\* _/}
// <div className="relative flex">
// {imageUrl &&
// imageUrl.map((url, index) => (
// <div
// key={index}
// className="get w-full shadow-lg flex flex-row justify-between items-center"
// style={{
//                       height: "200px",
//                       border: "1px solid #eee",
//                     }}
// >
// <img
// src={url}
// alt=""
// style={{
//                         width: "140px",
//                         height: "200px",
//                       }}
// />
// </div>
// ))}
// {!imageUrl.length && (
// <div
// className="imageHere absolute top-0 right-0 font-medium text-lime-600"
// style={{
//                     width: "200px",
//                     height: "200px",
//                   }}
// >
// <h4>Image Display Here</h4>
// </div>
// )}
// </div>
// {/_ _/}
// </div>
// <div className="detail flex flex-col gap-10">
// <div className="flex flex-col gap-6 pb-10">
// <input
// type="text"
// name="name"
// id="name"
// placeholder="Name"
// className="px-6 py-2 rounded-full outline-none"
// onChange={(e) => setName(e.target.value)}
// required
// />
// <input
// type="text"
// description="description"
// id="description"
// placeholder="Description"
// className="px-6 py-2 rounded-full outline-none"
// onChange={(e) => setDescription(e.target.value)}
// required
// />
// <input
// type="number"
// price="price"
// id="price"
// placeholder="Price"
// className="px-6 py-2 rounded-full outline-none"
// onChange={(e) => setPrice(e.target.value)}
// required
// />
// </div>
// <div
// className="category flex gap-10 pb-6"
// style={{
//                 borderBottom: ".8px solid #bdc3c7",
//               }}
// >
// <div className="flex items-center gap-4 font-medium">
// <input
// type="radio"
// name="shirt"
// id="shirt"
// value="shirt"
// checked={cat === "shirt"}
// className="w-4 h-4"
// onChange={(e) => setCat(e.target.value)}
// required
// />
// <label htmlFor="">Shirt</label>
// </div>
// <div className="flex items-center gap-4 font-medium">
// <input
// type="radio"
// name="pant"
// id="pant"
// value="pant"
// checked={cat === "pant"}
// className="w-4 h-4"
// onChange={(e) => setCat(e.target.value)}
// required
// />
// <label htmlFor="">Pant</label>
// </div>
// <div className="flex items-center gap-4 font-medium">
// <input
// type="radio"
// name="t_shirt"
// id="t_shirt"
// value="t_shirt"
// checked={cat === "t_shirt"}
// className="w-4 h-4"
// onChange={(e) => setCat(e.target.value)}
// required
// />
// <label htmlFor="">T-Shirt</label>
// </div>
// <div className="flex items-center gap-4 font-medium">
// <input
// type="radio"
// name="jacket"
// id="jacket"
// checked={cat === "jacket"}
// value="jacket"
// className="w-4 h-4"
// onChange={(e) => setCat(e.target.value)}
// required
// />
// <label htmlFor="">Jacket</label>
// </div>
// <div className="flex items-center gap-4 font-medium">
// <input
// type="radio"
// name="trouser"
// id="trouser"
// checked={cat === "trouser"}
// value="trouser"
// className="w-4 h-4"
// onChange={(e) => setCat(e.target.value)}
// required
// />
// <label htmlFor="">Trouser</label>
// </div>
// </div>
// </div>
// <div
// className="color-size-gender-stock flex items-end gap-6 pb-6 flex-wrap"
// style={{
//               borderBottom: ".8px solid #bdc3c7",
//             }}
// >
// <div className="gender">
// <h1 className="text-xl font-bold mb-4 pl-1.5">Gender</h1>
// <SingleSelectDropdown
// name="gender"
// options={optionsGender}
// selectedGender={selectedGender}
// onChange={handleMultiSelectChangeGender}
// />
// </div>
// <div className="stock">
// <h1 className="text-xl font-bold mb-4 pl-1.5">Stock</h1>
// <input
// type="number"
// name="stock"
// id="stock"
// placeholder="Stock"
// className="px-3 py-1.5 rounded-md outline-blue-500"
// style={{ border: ".8px solid #bdc3c7" }}
// onChange={(e) => setStock(e.target.value)}
// required
// />
// </div>
// {/_ //////////////////// _/}
// {cat !== "pant" ? (
// <div className="size">
// <h1 className="text-xl font-bold mb-4 pl-1.5">Size</h1>
// <MultiSelectDropdown
// name="size"
// options={sizeOptions}
// selectedValues={selectedValues}
// onChange={handleMultiSelectChange}
// />
// </div>
// ) : (
// <div className="jeans-size">
// <h1 className="text-xl font-bold mb-4 pl-1.5">Size</h1>
// <MultiSelectDropdown
// name="size"
// options={jeansSizeOptions}
// selectedSizeJeans={selectedSizeJeans}
// onChange={handleMultiSelectChangeJeans}
// />
// </div>
// )}
// {/_ //////////////////// \*/}
// <div className="color">
// <h1 className="text-xl font-bold mb-4 pl-1.5">Color</h1>
// <MultiSelectDropdown
// name="color"
// options={optionsColor}
// selectedColor={selectedColor}
// onChange={handleMultiSelectChangeColor}
// />
// </div>
// </div>
// <div className="error">
// {error && (
// <p className="font-bold text-md text-red-600 text-center">
// {error}
// </p>
// )}
// </div>
// <div className="submit flex justify-center">
// <button
// className="bg-gradient-to-r from-purple-400 to-pink-600 px-10 py-2 rounded-full text-white font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
// onClick={handleSubmit}
// >
// Upload
// </button>
// </div>
// </div>
// </div>
// </>
// );
// };

// export default Additem;
////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";
import { useCart } from "../context/ContextData";
import { SingleSelectDropdown } from "./Selected";

export const AddItemByCat = () => {
  const { item } = useCart();
  const [itemName, setItemName] = useState("");
  const [size, setSize] = useState("");

  const singleItemName = (selectedOptions) => {
    setItemName(selectedOptions);
    setSize(selectedOptions);
  };
  // name
  const selectItemNames = item.map((data) => ({
    label: data.name,
    value: data.name,
  }));
  // size
  const sizeOption = [
    { value: "option1", label: "Small" },
    { value: "option2", label: "Medium" },
    { value: "option3", label: "Large" },
    { value: "option4", label: "XL" },
    { value: "option4", label: "XXL" },
  ];
  // color
  console.log("item names", selectItemNames);

  return (
    <>
      <div className="addItem p-36 bg-gray-900">
        <div className="main flex flex-wrap items-center gap-4">
          <div className="gap-2 flex flex-col text-sm w-44">
            <label htmlFor="" className="font-sm text-lg text-white">
              Item Name
            </label>
            <SingleSelectDropdown
              name="item"
              options={selectItemNames}
              itemName={itemName}
              onChange={singleItemName}
            />
          </div>
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg text-white">
              Size
            </label>
            <SingleSelectDropdown
              name="item"
              options={sizeOption}
              size={size}
              onChange={singleItemName}
            />
          </div>
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg text-white">
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              className="pl-2 py-2 outline-blue-500"
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="pl-2 py-2 outline-blue-800"
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="gap-2 flex flex-col text-sm w-32">
            <label htmlFor="" className="font-sm text-lg text-white">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="pl-2 py-2 outline-blue-800"
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
