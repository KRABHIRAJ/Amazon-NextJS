import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getBasketTotal, selectBasketItem } from '../features/userSlice';
import Currency from 'react-currency-formatter';
import CheckoutProduct from '../components/CheckoutProduct';


function Checkout() {
    const dispatch = useDispatch();
    const items = useSelector(selectBasketItem);
   
  return (
    <div className='bg-[#EAEDED] w-full h-[100vh] overflow-scroll no-scrollbar '>
          <Navbar />
          <div className='flex flex-col md:flex-row' >
              <div className='bg-white p-3 my-3 flex-[0.6] md:flex-[0.7] xl:flex-[0.75] mx-2 '>
                  <h2 className='text-2xl font-semibold py-3  border-b border-gray-300 '>{items.length === 0 ? "Your Basket is Empty" : `Your Shooping Basket`}</h2>
                  {items.map(({id, category, description, image, price, rating, title}) => {
                      return <CheckoutProduct key={Math.floor(Math.random()*10000) + "schinder" + id + Math.floor(Math.random()*10000)} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                  })}
              </div>
              <div className='bg-white p-3 my-3 mx-3  flex-[0.4] md:flex-[0.3] xl:flex-[0.25] h-fit py-7 px-4'>
                  <div className='flex items-center'>
                    <p className='mx-2 text-lg '>Subtotal({items.length} items): </p>
                      <p className='font-semibold'><Currency
                                    quantity={getBasketTotal(items)}          // Required
                                    currency="INR"            // Optional (USD by default)
                                /></p>
                  </div>
                  <div className='flex mx-2 space-x-2 mb-3'>
                      <input type="checkbox" />
                      <p>This order contains a gift</p>
                  </div>
                  <button className='rounded-lg bg-yellow-400 hover:bg-yellow-500 w-full py-1'>Proceed to Buy</button>
              </div>
          </div>
    </div>
  )
}

export default Checkout;
