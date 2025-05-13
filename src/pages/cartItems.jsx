import React, { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 mt-20 flex justify-center items-start">
      <div
        className={`w-full max-w-3xl transition-all duration-700 transform ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Shopping Cart
        </h1>

        {cart.length > 0 ? (
          <div className="flex flex-col gap-6 items-center">
            {cart.map((product) => (
              <div
                key={product.id}
                className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="text-green-600">{product.price} USD</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="w-6 h-6 flex items-center justify-center text-xs bg-gray-300 rounded hover:bg-gray-400"
                      >
                        −
                      </button>
                      <span className="text-sm">{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="w-6 h-6 flex items-center justify-center text-xs bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-600 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Total Price:</h2>
              <p className="text-xl font-semibold text-green-600">
                {getTotalPrice().toFixed(2)} USD
              </p>
            </div>

            <div className="mt-6 w-full flex justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center mt-10">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}
