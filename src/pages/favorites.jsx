import React, { useEffect, useState } from "react";
import useFavoritesStore from "../store/favStore";

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 mt-20 flex justify-center items-start">
      <div
        className={`w-full max-w-6xl transition-all duration-700 transform ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          منتجاتك المفضلة ❤️
        </h1>

        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-6 justify-center">
            {favorites.map((product) => (
              <div key={product.id} className="w-64 bg-white shadow-md rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                  <p className="text-green-600 font-semibold mb-2">
                    {product.price} USD
                  </p>
                  <button
                    onClick={() => removeFromFavorites(product.id)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center mt-10">
            لا توجد منتجات مفضلة حاليًا.
          </p>
        )}
      </div>
    </div>
  );
}