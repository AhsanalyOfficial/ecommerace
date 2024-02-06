import React, { useEffect, useState } from "react";

const DisplayItem = () => {
  const [storedData, setStoredData] = useState("");
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("displayItemData"));
    setStoredData(storedData);
  }, [storedData]);

  console.log("DisplayItem", storedData);

  return (
    <div>
      {storedData ? (
        <div className="flex justify-center py-20" style={{ width: "100%" }}>
          <div
            className="item p-10 flex justify-between"
            style={{ width: "80%" }}
          >
            <div
              className="itemImages overflow-auto scroll-smooth"
              style={{ width: "400px", height: "450px" }}
            >
              <img
                src={storedData.imageUrl[0]}
                alt=""
                className="shadow-2xl rounded-md"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
              <img
                src={storedData.imageUrl[1]}
                alt=""
                className="shadow-2xl rounded-md"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
              <img
                src={storedData.imageUrl[2]}
                alt=""
                className="shadow-2xl rounded-md"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="itemData flex flex-col gap-4 pt-10 pr-10">
              <h1 className="font-bold text-xl">{storedData.name}</h1>
              <p className="font-medium text-lg">{storedData.description}</p>
              <p className="flex gap-2">
                <p className="font-bold">RS :</p>
                {storedData.price}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default DisplayItem;
