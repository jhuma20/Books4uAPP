import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4  p-3 my-3 ">
	    <div className="card bg-base-100 w-92 md:w-80 h-96  shadow-xl hover:shadow-slate-500 cursor-pointer duration-300 transition-all flex flex-col hover:scale-105 ">
        <figure className="h-1/2 overflow-hidden">
          <img
            src={item.image}
            alt="images"
			 className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body flex flex-col h-full">
          <h2 className="card-title text-lg font-semibold font-serif flex items-center justify-between">
            {item.name}
            <div className="badge bg-purple-800 border-purple-900 text-white">{item.category}</div>
          </h2>
          <p className="text-gray-600 mt-4">{item.title}</p>
          <div className="card-actions mt-auto flex justify-between items-center">
            <div className="badge badge-outline text-sm px-3 py-1 bg-purple-900 border-purple-950">${item.price}</div>
            <div className="badge badge-outline hover:text-purple-700 duration-300 py-1 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
	 </div>
    </>
  );
}

export default Cards;
