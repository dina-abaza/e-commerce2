import React ,{ useState } from "react";
import { Products } from "../products";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import useCartStore from "../store/cartStore";
import useFavoritesStore from "../store/favStore";

export default function OurProducts() {
  const [search, setSearch] = useState("");
  const addToCart=useCartStore((state)=>state.addToCart);
  const addToFavorites=useFavoritesStore((state)=>state.addToFavorites);

  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 gap-y-10 mt-20 ">
    
      <input
        type="text"
        placeholder="ابحث عن منتج..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-10 p-2 mt-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />


      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-72 bg-white shadow-md rounded-lg transition transform hover:scale-105 duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-contain rounded-t-lg"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <span className="text-green-600 font-semibold mb-4 block">
                  {product.price}
                </span>

                <div className="flex justify-center items-center gap-2 mt-4">
                  <Link to={`/ProductDetail/${product.id}`}>
                    <button className="p-2 rounded-full text-white bg-green-400 hover:scale-125 transition duration-300">
                      <FaEye />
                    </button>
                  </Link>

                  <button onClick={()=>addToFavorites(product)} className="p-2 rounded-full text-white bg-red-600 hover:scale-125 transition duration-300">
                    <FaHeart />
                  </button>

                  <button onClick={()=>addToCart(product)} className="p-2 rounded-full text-white bg-blue-500 hover:scale-125 transition duration-300">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">
            لا يوجد منتجات مطابقة للبحث.
          </p>
        )}
      </div>
    </div>
  );
}
