import React from 'react'

function Heading() {
  return (
    <>
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/* cards */}
        <div className='rounded-xl relative'>
              <div className='absolute w-full h-full   bg-black/50 rounded-xl text-white '>
                <p className='text-xl font-bold px-2 pt-4'>Sun's is Out, Bogo is Out</p>
                <p className='px-2'>Through 8/16</p>
              <button className='bg-white text-black mx-2 absolute bottom-4 py-2 px-2 rounded-lg'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://img.freepik.com/free-photo/mutton-kheema-pav-indian-spicy-minced-meat-served-with-bread-kulcha-garnished-with-green-peas-moody-background-selective-focus_466689-74096.jpg?w=996&t=st=1662031500~exp=1662032100~hmac=2dbfb96683deef60e2c5aea1768f1dd74a5932f8c87945dd5a1adaee0f404bc2" alt="" />
        </div>



        <div className='rounded-xl relative'>
              <div className='absolute w-full h-full   bg-black/50 rounded-xl text-white '>
                <p className='text-xl font-bold px-2 pt-4'>Add new Restuarants</p>
                <p className='px-2'>Add Daily</p>
              <button className='bg-white text-black mx-2 absolute bottom-4 py-2 px-2 rounded-lg'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://wallpaperaccess.com/full/271681.jpg" alt="" />
        </div>



<div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We deliver Dessert</p>
          <p className='px-2'>Teasty Treats</p>
          <button className='bg-white text-black mx-2 absolute bottom-4 py-2 px-2 rounded-lg'>Order Now</button>
        </div>
        
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
    </div>
    
    
    </>
  )
}

export default Heading