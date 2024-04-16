import React from "react";

export const Success = () => {
  return (
    <div
      className="full flex justify-center items-center"
      style={{ height: "100vh", background: "#584e48" }}
    >
      <div
        className="m-auto max-w-max p-4 shadow-xl animate-jump-in
        animate-once
        animate-duration-1000
        animate-delay-500
        animate-ease-in"
        style={{ background: "#3498db" }}
      >
        <h1 className="text-white text-shadow" style={{ fontSize: "30px" }}>
          Payment Successfully
        </h1>
      </div>
    </div>
  );
};
