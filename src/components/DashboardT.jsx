import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

function DashboardT() {
  return (
    <>
     <div className="max-w-[1640px] mx-auto p-4 text-white bg-[#191970]">
  <div className="grid sm:grid-cols-2">
    <div className="p-3 order-1 sm:order:2">
      <img
        className="w-full mx-auto rounded-lg"
        src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"
        alt=""
      />
      <div className="w-[200px ] py-3 mx-auto grid grid-cols-2 justify-between">
        <div className="">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">100 +</h1>
          <p className="uppercase font-bold">fieldsofstudy</p>
        </div>
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold">
            choose what you want to learn
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.vitae
            ducimus.
          </p>
        </div>
      </div>
    </div>
    <div className="p-3 order-1 sm:order-2">
      <div className="px-4">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl py-5 font-bold">
          learn new
          <br />
          skills. easily
        </h1>
        <p className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet
          consectetur adipisicing elit. Enim, laudantium?
        </p>
        <div className="bg-white rounded-full h-full my-5 flex items-center mx-auto px-2 w-[300px] sm:w-[400px] lg:w-[500px]">
          <input
            type="text"
            className="bg-transparent p-3 focus:outline-none w-full h-full text-black"
            placeholder="search "
          />

          <AiOutlineArrowRight className="text-black bg-green-600 p-1 rounded-full w-[50px] h-[50px]"  size={15}/>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default DashboardT;
