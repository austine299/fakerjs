import React, { useState } from "react";
import ProductList from "./ProductList";
import Sidebar from "./sidebar/Sidebar";

function Shop() {
  return (
    <div className="flex p-12 gap-6">
      <div className=" hidden sm:flex w-auto sm:w-1/4">
      <Sidebar/>    
      </div>
      <div className="">
        <div className="bg-[]"></div>
        <h1 className="text-gray-600 font-bold text-xl">SHOP PRODUCT</h1>
        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
