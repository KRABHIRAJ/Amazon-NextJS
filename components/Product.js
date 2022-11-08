import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET} from "../features/userSlice";

function Product({ id, title, price, description, category, image, rating }) {
  const dispatch = useDispatch();
  const addToBasket = (e) => {
    e.preventDefault();

    dispatch(ADD_TO_BASKET({
      id,
      title,
      price,
      description,
      category,
      image,
      rating
    }))
  }
  return (
      <div className="relative bg-white m-5 px-10 py-6 rounded-md flex flex-col">
          <p className="absolute top-3 right-7 text-xs text-gray-400 capitalize">{category}</p>
          <Image className="object-contain mx-auto my-5 cursor-pointer h-[150px]" src={image} height={220} width={150} alt="pdt Image" />
          <h2 className="font-semibold cursor-pointer line-clamp-2 ">{ title }</h2>
          <p className="line-clamp-2 text-sm text-gray-600 mb-2 mt-1 ">{description}</p>
          <div className="flex ">
            {Array(Math.round(rating.rate)).fill().map((_, i) => {
                return <StarIcon key={i} className="h-5 text-yellow-400 my-1" />
            } )}
          </div>
          <div className="font-bold" >
          <Currency
            quantity={price*40}          // Required
            currency="INR"            // Optional (USD by default)
          />
          </div>
          
      {/* 
          {hasPrime &&
              <div className="flex items-center space-x-3">
                  <img className="h-10  " src="https://links.papareact.com/fdw" alt="prime" />
                  <p className="text-xs text-gray-400">FREE Next-day Delivery</p>
              </div>
          } */}

          <button onClick={addToBasket} className=" py-1 my-2 rounded-md bg-gradient-to-b from-yellow-200 to-yellow-400 active:bg-yellow-600 ">Add to Basket</button>
          
    </div>
  )
}

export default Product
