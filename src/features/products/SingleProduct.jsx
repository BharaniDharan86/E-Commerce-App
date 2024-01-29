/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/apiProducts";
import { useParams, useSearchParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { useState } from "react";

function SingleProduct() {
  const { id: ids } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["singleProduct", ids],
    queryFn: () => getSingleProduct(ids),
  });

  if (isLoading) return <Skeleton />;
  const {
    id,
    stock,
    price,
    colors,
    category,
    images,
    reviews,
    stars,
    name,
    description,
    company,
  } = data;

  function addNewItem() {
    console.log("Ok");
    dispatch(
      addToCart({
        id,
        productName: name,
        price,
        quantity,
        totalPrice: price * 1,
      })
    );
  }

  return (
    <div>
      <img src={images[0].url} alt="" />
      <div>
        <p className="text-xl tracking-wide font-semibold text-stone-800">
          {name.toUpperCase()}
        </p>
        <p>${(price / 100).toFixed(2)}</p>

        <p className="text-sm font-semibold text-stone-800">
          {company.toUpperCase()}
        </p>
        <p>{description}</p>

        <div className="flex gap-6 p-4">
          <div className="flex gap-3 items-center">
            <button
              className=" rounded-full h-8 w-8 bg-slate-200"
              onClick={() => setQuantity((quantity) => (quantity -= 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="rounded-full h-8 w-8 bg-slate-200"
              onClick={() => setQuantity((quantity) => (quantity += 1))}
            >
              +
            </button>
          </div>
          <Button />
          <Button label="Add to Cart" onClick={addNewItem} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
