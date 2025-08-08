
import React, { useState } from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Products } from "../../products";
import useCartStore from "../../store/cartStore";
import useFavoritesStore from "../../store/favStore";
import { toast } from "react-toastify"; // ✅ استيراد التوست

export default function ProductFilter() {
  const [category, setCategory] = useState("all");
  const addToCart = useCartStore((state) => state.addToCart);
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);

  const filteredProducts =
    category === "all"
      ? Products
      : Products.filter((product) => product.category === category);

  // ✅ التوست عند الإضافة
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("✅ تمت الإضافة إلى السلة", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    toast.success("❤️ تمت الإضافة إلى المفضلة", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col md:flex-row mb-6 gap-4 justify-center items-center">
        <button onClick={() => setCategory("all")} className="bg-blue-500 text-white hover:bg-blue-400">All</button>
        <button onClick={() => setCategory("electronics")} className="bg-blue-500 text-white hover:bg-blue-400">Electronics</button>
        <button onClick={() => setCategory("Women")} className="bg-blue-500 text-white hover:bg-blue-400">Women</button>
        <button onClick={() => setCategory("Men")} className="bg-blue-500 text-white hover:bg-blue-400">Men</button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded p-4 shadow-md flex flex-col items-center justify-center hover:scale-125 transform duration-500"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="font-bold text-lg">{product.title}</h2>
              <span className="text-green-600 font-semibold">${product.price}</span>
              <div className="flex gap-2 mb-2 mt-2">
                <button className="cursor-pointer text-white bg-green-400 hover:scale-125 transition duration-500">
                  <Link to={`/ProductDetail/${product.id}`}>
                    <FaEye />
                  </Link>
                </button>

                <button
                  onClick={() => handleAddToFavorites(product)}
                  className="cursor-pointer text-white bg-red-600 hover:scale-125 transition duration-500"
                >
                  <FaHeart />
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="cursor-pointer text-white bg-blue-500 hover:scale-125 transition duration-500"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
