/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
function ProductList({ product }) {
  const { id, name, price, image, company, description, category } = product;
  return (
    <div className="flex sm:flex-row flex-col px-4 py-2">
      <div>
        <img
          src={image}
          alt={name}
          className="h-[300px] w-[550px] object-cover rounded-md"
        />
      </div>
      <div className="p-6">
        <p className="text-xl font-semibold">{name.toUpperCase()}</p>
        <span>${price}</span>
        <p>{description.substring(0, 200)}...</p>
        <span className="capitalize">{company}</span>
        <div className="mt-10 flex  gap-x-4 items-center">
          <NavLink to={`${id}`}>
            <button className="bg-[#fbbf24] text-lg px-2 py-1">Details</button>
          </NavLink>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
