import Image from 'next/image';
import React from 'react';
import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/24/outline"
function Navbar() {
    return (
      <div>
            <div className='bg-amazon-color p-3 flex items-center justify-between' >
          <div className='mt-2 flex items-center ' >
              <Image 
                //   loader={src => "https://links.papareact.com/f90"}
                  src="https://links.papareact.com/f90"
                  className='cursor-pointer'
                        
                  width={100}
                  height={40}
                  alt="Amazon Logo"
              />
          </div>
          <div className='hidden sm:flex  h-10 flex-grow  mx-auto'>
                    <input type='text' className='rounded-l-md px-1  outline-none flex-grow ml-5 ' />
                    <div className='bg-yellow-500 w-9 flex items-center  cursor-pointer  justify-center rounded-r-md mr-5'>
                        <MagnifyingGlassIcon
                            className='h-5'
                        />
              </div>
              
              
          </div>
          <div className='text-white flex space-x-4 mx-4 items-center'>
              
              <div className='cursor-pointer hover:underline'>
                  <p className='text-xs'>Hello, Abhiraj </p>
                  <p  className='text-sm font-semibold'>Account & Lists</p>  
              </div>

              <div className='cursor-pointer hover:underline'>
                <p className='text-xs'>Return</p>
                <p className='text-sm font-semibold'>& Orders</p>  
              </div>

              <div className='flex relative space-x-1 cursor-pointer hover:underline items-center '>
                  <ShoppingCartIcon className='h-9' />
                  <div className='absolute h-4 w-4  top-0 right-0 md:right-8 text-xs rounded-full bg-yellow-500 flex items-center justify-center'>{ 0 }</div>
                  <p className='text-sm hidden md:inline-block font-semibold '>Cart</p>
              </div>


          </div>
            </div>
            <div className='hidden bg-[#232F3E] sm:flex items-center space-x-1 px-4 py-2 text-white'>
                <Bars3Icon className='h-5 cursor-pointer' />
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>All</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Sell</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Best Sellers</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Today's Deals</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Mobiles</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Customer Service</p>
                <p className='cursor-pointer font-semibold text-sm py-1 px-2 border-2 border-[#232F3E] hover:border-white'>Electronics</p>

            </div>
      </div>
    
  )
}

export default Navbar;
