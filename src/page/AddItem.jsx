import React, { useState } from "react";
import add from "../assets/add.png";
import "../style/animate.css";
import axios from "axios";

const Additem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState([]);

  const upload = async () => {
    try {
      const formData = new FormData();
      file.forEach((file, index) => {
        formData.append("file", file);
      });
      const res = await axios.post(
        "http://localhost:8020/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
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
      const response = await axios.post("http://localhost:8020/api/items", {
        name,
        description,
        price,
        cat,
        imageUrl: imgUrls,
      });

      console.log(response.data);
      setCat("");
      setName("");
      setDescription("");
      setPrice("");
      setFile(null);
      setImageUrl("");
      setError("");
    } catch (error) {
      setError(
        error.response ? error.response.data.error : "An error occurred"
      );
      console.log("Error uploading", error.message);
    }
  };

  return (
    <>
      <div
        className="main-container pt-36 pb-14 shadow-2xl"
        style={{ width: "100%" }}
      >
        <div
          className="add p-10 flex flex-col gap-10"
          style={{ background: "#ecf0f1", width: "60%", margin: "auto" }}
        >
          <div className="image flex justify-between items-center">
            <div
              className="set flex justify-center items-center shadow-lg rounded-md"
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #eee",
              }}
            >
              <input
                type="file"
                id="file"
                name="file"
                className=""
                onChange={handleImageChange}
                style={{ display: "none" }}
                multiple
              />
              <label htmlFor="file" className="cursor-pointer">
                <img src={add} alt="" />
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
                  <h1>Image Display Here</h1>
                </div>
              )}
            </div>
            {/*  */}
          </div>
          <div className="detail flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="px-6 py-2 rounded-full outline-none"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                description="description"
                id="description"
                placeholder="Description"
                className="px-6 py-2 rounded-full outline-none"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                price="price"
                id="price"
                placeholder="Price"
                className="px-6 py-2 rounded-full outline-none"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="category flex gap-10">
              <div className="flex items-center gap-4 font-medium">
                <input
                  type="radio"
                  name="shirt"
                  id="shirt"
                  value="shirt"
                  checked={cat === "shirt"}
                  className="w-4 h-4"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="">Shirt</label>
              </div>
              <div className="flex items-center gap-4 font-medium">
                <input
                  type="radio"
                  name="pant"
                  id="pant"
                  value="pant"
                  checked={cat === "pant"}
                  className="w-4 h-4"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="">Pant</label>
              </div>
              <div className="flex items-center gap-4 font-medium">
                <input
                  type="radio"
                  name="t_shirt"
                  id="t_shirt"
                  value="t_shirt"
                  checked={cat === "t_shirt"}
                  className="w-4 h-4"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="">T-Shirt</label>
              </div>
              <div className="flex items-center gap-4 font-medium">
                <input
                  type="radio"
                  name="jacket"
                  id="jacket"
                  checked={cat === "jacket"}
                  value="jacket"
                  className="w-4 h-4"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="">Jacket</label>
              </div>
              <div className="flex items-center gap-4 font-medium">
                <input
                  type="radio"
                  name="trouser"
                  id="trouser"
                  checked={cat === "trouser"}
                  value="trouser"
                  className="w-4 h-4"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="">Trouser</label>
              </div>
            </div>
          </div>
          <div className="error">
            {error && (
              <p className="font-bold text-md text-red-600 text-center">
                {error}
              </p>
            )}
          </div>
          <div className="submit flex justify-center">
            <button
              class="bg-gradient-to-r from-purple-400 to-pink-600 px-10 py-2 rounded-full text-white font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
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
