import React from 'react'
import { categories } from "./data/data"

function Footer() {

    console.log(categories, "this is catagories")
    return (
        <>
            <div className='max-w-[1640px] px-4 '>
                <h1 className='text-orange-600 text-2xl text-center font-bold'>Top Rated Menu Items</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between gap-3 items-center py-12">
                    {
                        categories.map((item, index) => {
                            return (
                                <>
                                    <div  className="bg-gray-400/20 flex justify-between items-center rounded-lg px-4" >
                                      
                                            <h2 className='sm:text-xl font-bold'>{item.name}</h2>
                                            <img className='w-20' src={item.image} alt={item.name} />
                                        
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
{/* --------------------------------------footer------------------------------------------------------------------------- */}
            <div>

<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
  <div className="sm:flex sm:items-center sm:justify-between">
    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
    <h1 className='text-2xl text-orange-600 font-semibold sm:text-3xl lg:text-4xl px-2'>Stark <span className='font-bold '>Foods</span></h1>

      
    </a>
    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
  </span>
</footer>


            </div>
        </>
    )
}

export default Footer