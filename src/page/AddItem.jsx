import add from "../assets/add.png";
import "../style/animate.css";
import React, { useState } from "react";
import { SingleSelectDropdown } from "./Selected";
import axios from "axios";
import { useCart } from "../context/ContextData";
import { useEffect } from "react";

const Additem = () => {
  //
  const { categorys, genders } = useCart();
  const [gender, setGender] = useState("");
  const [cat, setCat] = useState("");
  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  //
  const handleGender = (selectOption) => {
    setGender(selectOption.value);
  };
  const handleCategory = (selectOption) => {
    setCat(selectOption.value);
  };
  //
  const upload = async () => {
    try {
      const formData = new FormData();
      file.forEach((file, index) => {
        formData.append("file", file);
      });
      const res = await axios.post(
        "http://localhost:8020/api/upload/multiple",
        formData
      );
      return res.data.filenames;
    } catch (err) {
      console.log("upload files error", err);
    }
  };
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const limitedFiles = selectedFiles.slice(0, 4);
    if (limitedFiles.length > 0) {
      setFile(limitedFiles);
      const urls = limitedFiles.map((file) => URL.createObjectURL(file));
      setImageUrl(urls);
    }
  };
  const handleSubmit = async () => {
    try {
      const imgUrls = await upload();
      await axios.post(
        "http://localhost:8020/api/items/newItemAdd",
        {
          name : name,
          description,
          imageUrl: imgUrls,
          gender,
          cat,
        },
        {
          withCredentials: true,
        }
      );
      window.location.reload();
    } catch (error) {
      if (error.response.status === 401) {
        setError("Please provide all fields");
      } else if (error.response.status === 404) {
        setError("Auth required");
      } else if (error.response.status === 403) {
        setError("Choose different name already exist");
      } else {
        setError(
          error.response ? error.response.data.error : "An error occurred"
        );
        console.log("Error uploading", error.message);
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <div
        className="main-container pt-36 pb-14 shadow-2xl w-full"
        style={{ background: "#5c524c" }}
      >
        <div
          className="add p-10 flex flex-col gap-4"
          style={{ background: "#ecf0f1", width: "60%", margin: "auto" }}
        >
          {/* image */}
          <div className="image flex justify-between items-center my-6">
            <div
              className="set flex justify-center items-center shadow-lg rounded-md"
              style={{
                border: ".1px solid #34495e",
              }}
            >
              <input
                type="file"
                id="file"
                name="file"
                className=""
                onChange={handleImageChange}
                style={{ display: "none" }}
                required
                multiple
              />
              <label htmlFor="file" className="cursor-pointer">
                <img
                  src={add}
                  alt=""
                  className="p-8"
                  style={{ width: "150px", height: "150px" }}
                />
              </label>
            </div>
            {/*  */}
            <div className="relative flex">
              {imageUrl &&
                imageUrl.map((url, index) => (
                  <div
                    key={index}
                    className="get w-full shadow-lg flex flex-row justify-between items-center"
                    style={{
                      height: "200px",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src={url}
                      alt=""
                      style={{
                        width: "140px",
                        height: "200px",
                      }}
                    />
                  </div>
                ))}
              {!imageUrl.length && (
                <div
                  className="imageHere absolute top-0 right-0 font-medium text-lime-600"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <h4>Image Display Here</h4>
                </div>
              )}
            </div>
            {/*  */}
          </div>
          {/* details */}
          <div className="detail flex flex-col">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="px-6 py-2 rounded-md outline-blue-500"
                style={{ border: "1.5px solid #ddd" }}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                description="description"
                id="description"
                placeholder="Description"
                className="px-6 py-2 rounded-md outline-blue-500"
                style={{ border: "1.5px solid #ddd" }}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            {/* Gender Dropdown */}
            <div className="gap-2 flex flex-col text-sm w-32">
              <label htmlFor="" className="font-sm text-lg ">
                Gender
              </label>
              <SingleSelectDropdown
                name="gender"
                options={genders.map((item) => ({
                  value: item.gender,
                  label: item.gender,
                }))}
                value={gender}
                onChange={handleGender}
              />
            </div>
            {/* Category Dropdown */}
            <div className="gap-2 flex flex-col text-sm w-32">
              <label htmlFor="" className="font-sm text-lg ">
                Category
              </label>
              <SingleSelectDropdown
                name="size"
                options={categorys.map((item) => ({
                  value: item.cat,
                  label: item.cat,
                }))}
                value={cat}
                onChange={handleCategory}
              />
            </div>
          </div>
          {/* error */}
          <div className="error">
            {error && (
              <p className="font-bold text-md text-red-600 text-center">
                {error}
              </p>
            )}
          </div>
          {/* upload */}
          <div className="submit flex justify-center">
            <button
              className=" text-white font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Additem;
//////////////////////////////////////////////////////////////////////////////////////////////
