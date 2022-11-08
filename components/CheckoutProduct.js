import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../features/userSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(
      REMOVE_FROM_BASKET({
        id,
      })
    );
  };

  const addToBasket = () => {
    dispatch(
      ADD_TO_BASKET({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
      })
    );
  };
  return (
    <div className="flex items-center border-b justify-between py-4">
      <img
        className="h-[180px] w-[150px] object-contain p-5 mr-3"
        src={image}
        alt={"Image" + { id }}
      />

      <div className="flex flex-col flex-grow">
        <div className="flex flex-col">
          <h2 className="text-xl max-w-sm md:max-w-lg  ">{title}</h2>
          <div className="font-bold">
            <Currency
              quantity={price * 40} // Required
              currency="INR" // Optional (USD by default)
            />
          </div>
        </div>
        <p className="text-xs text-green-600 mt-1">In stock</p>
        <p className="text-xs mt-1 ">Eligible for FREE SHIPPING</p>
        <div className="flex space-x-2 items-center mt-1">
          <input className="cursor-pointer" type="checkbox" />
          <p className="text-sm">This will be a gift </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <button onClick={addToBasket} className="btn px-5 text-xs">
          Add to Basket
        </button>
        <button onClick={removeFromBasket} className="btn px-5 text-xs">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
