import React, { useEffect, useState } from "react";
import { useCart } from "../context/ContextData";

const DisplayItem = () => {
  const { handleCartData, userData } = useCart();
  const [getData, setGetData] = useState(null);
  const [error, setError] = useState(null);
  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelect, setColorSelect] = useState("");
  // image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
    setSlideIndex(index);
  };
  //

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("displayItem"));
    setGetData(localData);
  }, [getData]);
  //

  const handleCart = async (id) => {
    try {
      const cartItemData = await handleCartData(id, sizeSelected, colorSelect);
      if (cartItemData === "please login first") {
        setError("Please login first");
      } else if (cartItemData === "please select a color") {
        setError("Please select a color");
      } else if (cartItemData === "please select a size") {
        setError("Please select a size");
      } else {
        setError("");
      }
      console.log("Cart Item Data:", cartItemData);
    } catch (error) {
      console.log("Error fetching cart data:", error);
    }
  };
  
  return (
    <>
      <div className="py-24 px-36" style={{ background: "#5c524c" }}>
        {getData && (
          <div className="flex justify-between items-center flex-row-reverse">
            {/* /////////////// */}
            <div className="details" style={{ width: "400px" }}>
              <div
                className="name-price pb-4 flex flex-col gap-2"
                style={{ borderBottom: ".8px solid #202020" }}
              >
                <h1 className="font-bold text-lg">{getData.name}</h1>
                <p>
                  <span className="font-medium">PKR : </span> {getData.price}
                </p>
              </div>
              <div
                className="color py-4 flex flex-col gap-2"
                style={{ borderBottom: ".8px solid #202020" }}
              >
                <div className="flex gap-4">
                  <p className="font-medium">Color</p>
                  {getData.color.map((color, index) => (
                    <div key={index} className="inline-block mr-2 mb-2">
                      <p
                        className={`w-5 h-5 focus:outline-none rounded-full cursor-pointer  ${
                          color.color === colorSelect
                            ? "border-2 border-blue-500"
                            : "border-2 border-gray-400"
                        }`}
                        style={{
                          backgroundColor: color.color,
                          padding: "2px",
                        }}
                        onClick={() => setColorSelect(color.color)}
                        disabled={color.color === colorSelect}
                        name="color"
                      ></p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <p className="font-medium">Size</p>
                  {getData.size.map((size, index) => (
                    <p
                      key={index}
                      className={`bg-white text-sm py-1 px-2 rounded-full cursor-pointer  ${
                        size.size === sizeSelected
                          ? "text-blue-500 border-2 border-blue-500"
                          : "text-black border-2"
                      }`}
                      onClick={() => setSizeSelected(size.size)}
                      disabled={size.size === sizeSelected}
                      name="size"
                    >
                      {size.size}
                    </p>
                  ))}
                </div>
                <p>
                  <span className="font-medium">Gender : </span>{" "}
                  {getData.gender}
                </p>
                <div className="err">
                  {error && error ? (
                    <p className="py-2 text-red-500">{error}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="addBtn py-6">
                {userData && userData.role === "admin" ? (
                  <button className="w-full text-center bg-blue-500 py-1.5 text-white">
                    Add To Cart
                  </button>
                ) : (
                  <button
                    className="w-full text-center bg-blue-500 py-1.5 text-white"
                    onClick={() => handleCart(getData._id)}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
              <div className="desc flex flex-col gap-4">
                <p className="text-sm">{getData.description}</p>
                <p className="font-medium">COMPOSITION & CARE</p>
                <p className="text-sm">
                  98%COTTON 2%LYCRA <br />
                  MACHINE WASH UP TO 30C/86F, GENTLE CYCLE <br />
                  DO NOT BLEACH <br />
                  IRON UP TO 110C/230F <br />
                  DO NOT IRON DIRECTLY ON PRINTS/EMBROIDERY/EMBELLISHMENTS{" "}
                  <br />
                  DO NOT DRY CLEAN DO NOT TUMBLE DRY
                </p>
              </div>
            </div>
            {/* /////////////// */}
            <div
              className="image-slider py-8 flex justify-between items-center"
              style={{ width: "550px", height: "auto" }}
            >
              <div className="overflow-hidden" style={{ height: "600px" }}>
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(-${slideIndex * 100}%)`,
                    width: "400px",
                    height: "100%",
                  }}
                >
                  {getData.imageUrl.map((image, index) => (
                    <img
                      key={index}
                      src={`http://localhost:8020/uploads/${image}`}
                      alt={`Slide ${index}`}
                      className="object-cover"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-4 justify-center space-x-4 mb-4">
                {getData.imageUrl.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    style={{ width: "100px", height: "100px" }}
                    className={`border-2 ${
                      index === selectedImageIndex
                        ? "border-blue-500"
                        : "border-gray-300"
                    } rounded-sm h-10 w-10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <img
                      src={`http://localhost:8020/uploads/${image}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-fit"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* /////////////// */}
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayItem;
