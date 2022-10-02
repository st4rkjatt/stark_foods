import React, { useState } from 'react'
import { useEffect } from 'react'
import {data} from "./data/data.js"
function Food() {

        const [foods,setFoods]=useState(data)

        const filterType = (category) => {
            setFoods(
              data.filter((item) => {
                return item.category === category;
              })
            );
          };
        
          //   Filter by price
          const filterPrice = (price) => {
            setFoods(
              data.filter((item) => {
                return item.price === price;
              })
            );
          };


  return (
  <>
  
  <div className='max-w-[1640]  mx-auto px-4 py-12'>
    <h1  className='text-orange-500 text-center text-4xl font-bold mb-10'>Top Rated Menu Items</h1>
    {/* filter row */}

    <div className='flex flex-col md:flex-row justify-between' >
        {/* filter Type */}
        <div>
            <p className="font-bold text-gray-700">Fliter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button    onClick={() => setFoods(data)} className='bg-transparent text-orange-600 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white mx-3 px-4 py-2'>All</button>
                <button   onClick={() => filterType('burger')} className='bg-transparent text-orange-600 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white mx-3 px-4 py-2'>Burgers</button>
                <button    onClick={() => filterType('pizza')} className='bg-transparent text-orange-600 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white mx-3 px-4 py-2'>Pizza</button>
                <button   onClick={() => filterType('salad')} className='bg-transparent text-orange-600 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white mx-3 px-4 py-2'>Salads</button>
                <button className='bg-transparent text-orange-600 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white mx-3 px-4 py-2'>Cury</button>

            </div>
        </div>


        {/* fliter Price */}
        <div>
    <p className='font-bold text-gray-700'>Filter Price</p>
    <div className='flex justify-between w-full  max-w-[390]'>
        <button    onClick={() => filterPrice('$')} className='bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-600  rounded-xl mx-3 px-5 py-2'>$</button>
        <button   onClick={() => filterPrice('$$')} className='bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-600  rounded-xl mx-3 px-5 py-2'>$$</button>
        <button    onClick={() => filterPrice('$$$')} className='bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-600  rounded-xl mx-3 px-5 py-2'>$$$</button>
        <button     onClick={() => filterPrice('$$$$')} className='bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-600  rounded-xl mx-3 px-5 py-2'>$$$</button>
    </div>
        </div>
    </div>


{/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'> 

        {

foods.map((items,index)=>{
    return(
        <>
           <div key={index} className='border shadow-xl rounded-xl hover:scale-105 duration-300'>
                <img className='w-full h-[200px] rounded-t-xl' src={items.image} alt={items.name} />

                <div className='flex justify-between px-4 py-2'>
                <p className='font-bold'>{items.name}</p>
                <p><span className='bg-orange-500 p-2 rounded-full text-white'>{items.price}</span></p>
                </div>
            </div>
        
        </>
    )
})
}

         
         
             
           
        
        </div>

  </div>
  
  
  
  </>
  )
}

export default Food