
import React from "react"

export default function Information(){
    return(
        <div className=" w-full max-w-5xl mx-auto px-4 mt-28 flex flex-col gap-y-10">
        
        <div className="text-center ">
          <h2 className="text-3xl font-semibold text-gray-800">Why ShopEase?</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-16">
          <div className=" bg-white rounded shadow-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">High Quality</h3>
            <p>Sourced from top manufacturers for the best quality.</p>
          </div>
          <div className=" bg-white rounded shadow-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p>Reliable and quick delivery for every order.</p>
          </div>
          <div className=" bg-white rounded shadow-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p>Assistance whenever you need it, day or night.</p>
          </div>
        </div>
      </div>
    )
}