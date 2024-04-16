import React from "react";
import Additem from "./AddItem";
import AddItemByCat from "./AddItemByCat";
import SizeAndColor from "./SizeandColor";
import CartData from "../admin/CartData";

const AddData = () => {
  return (
    <>
      <Additem />
      <AddItemByCat />
      <SizeAndColor />
      <CartData />
    </>
  );
};

export default AddData;
