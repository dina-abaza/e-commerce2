import React from "react";

export default function Header() {
  return (
    <div className="w-full min-h-screen p-8">
    
      <div
        className="w-full h-[690px] sm:h-[500px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/shop.jpg')",
        }}
      >
      
        <div
          className="absolute inset-0 bg-black opacity-40"
          style={{
            filter: "brightness(0.6)",
          }}
        ></div>

      
        <div className="text-center text-white px-4 mt-8 absolute">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
          <p className="text-xl">Quality shopping made simple and affordable.</p>
        </div>
      </div>
    </div>
  );
}
