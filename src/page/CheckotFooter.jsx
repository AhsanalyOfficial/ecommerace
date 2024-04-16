import React from "react";

export const CheckotFooter = () => {
  return (
    <>
      <div className="w-full " style={{ background: "#584e48" }}>
        <div
          className="flex items-center justify-start px-10 py-2 gap-4 m-auto bg-slate-300 "
          style={{ borderTop: ".5px solid #d1d1d1", width: "90%" }}
        >
          <p className="text-black">Refund Policy</p>
          <p className="text-black">Terms of services</p>
        </div>
      </div>
    </>
  );
};
