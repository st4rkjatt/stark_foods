import React, { useState } from 'react'

import { BsList, BsSearch } from 'react-icons/bs';
import { FaCartArrowDown, FaUserFriends, FaWallet } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import { MdFavorite, MdHelp } from "react-icons/md"
import { TbTruckDelivery } from 'react-icons/tb ';
import { AiFillTag } from "react-icons/ai"
function Navbar() {

  const [nav,setNav]=useState(false)


  return (
    <>
      <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
        <div className='flex items-center'>


          <BsList onClick={()=>setNav(!nav)} size={30} className="cursor-pointer "/>

          <h1 className='text-2xl text-orange-600 font-semibold sm:text-3xl lg:text-4xl px-2'>Stark <span className='font-bold '>Foods</span></h1>

          <div className='hidden lg:flex items-center bg-slate-300 rounded-full py-1  '>
            <p className='bg-black text-white rounded-full px-2 py-2'>Delivery</p>
            <p className='px-2'>Pickup</p>
          </div>


        </div>

        {/* input search */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg-w-[500px]'>
          <BsSearch size={25} />
          <input type="text" className='bg-transparent p-2 focus:outline-none w-full text-red  ' placeholder='Search food' />

        </div>

        {/* cart button */}

        <button className=' bg-black text-white px-4  items-center hidden md:flex  py-1 rounded-full  '>
          <FaCartArrowDown size={20} />&nbsp;Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        <div className={nav?' bg-black/80  w-full h-screen fixed z-10 top-0 left-0 ':" "}> </div>

        {/* drawer menu  */}

        <div className={nav?' fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300 p-4':' fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300 p-4'}>
          <div className='flex  items-center cursor-pointer'>
            <GiCrossMark onClick={()=>setNav(!nav)} size={20} className="right-4 absolute  text-orange-600 " />

            <h2 className='text-2xl  text-orange-600 font-semibold'>Stark <span className='font-bold text-2xl'>Eats</span></h2>

          </div>

          <ul className='text-gray-700 flex flex-col p-4 cursor-pointer '>
            <li className='text-2xl flex p-3'>
              <TbTruckDelivery size={30} />&nbsp;Orders
            </li>
            <li className='text-2xl flex p-3'>
              <MdFavorite size={30} />&nbsp;Favorite
            </li>
            <li className='text-2xl flex p-3'>
              <FaWallet size={30} />&nbsp;Wallat
            </li>
            <li className='text-2xl flex p-3'>
              <MdHelp size={30} />&nbsp;Help
            </li>
            <li className='text-2xl flex p-3'>
              <AiFillTag size={30} />&nbsp;Promotions
            </li>
            <li className='text-2xl flex p-3'>
              <FaUserFriends size={30} />&nbsp;Stark Ones
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;  