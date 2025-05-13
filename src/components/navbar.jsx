
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt
} from "react-icons/fa";
import useAuthStore from "../store/authStore";

export default function Nav() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 bg-gray-50 shadow transition-all duration-700 ease-in-out
        ${show ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"}`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-6">
        
        
        <h2 className="text-2xl text-green-500 uppercase font-bold">shopease</h2>

        
        <div className="flex gap-6 text-lg">
          <Link to="/" className="text-black hover:-translate-y-1 transition-transform duration-200">Home</Link>
          <Link to="/products" className="text-black hover:-translate-y-1 transition-transform duration-200">Products</Link>
          <Link to="/about" className="text-black hover:-translate-y-1 transition-transform duration-200">About</Link>
          <Link to="/contact" className="text-black hover:-translate-y-1 transition-transform duration-200">Contact</Link>
        </div>

        
        <div className="flex gap-3">
          {user ? (
            <>
              <Link
                to="/cart"
                className="flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-400 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 px-3 py-1 rounded-2xl"
              >
                <FaShoppingCart /> Cart
              </Link>
              <Link
                to="/favorites"
                className="flex items-center gap-1 text-white bg-green-400 hover:bg-green-300 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 px-3 py-1 rounded-2xl"
              >
                <FaHeart /> Favorites
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-white bg-red-500 hover:bg-red-400 hover:-translate-y-1 transition-all duration-200 px-3 py-1 rounded-2xl"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/Login"
                className="flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-400 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 px-3 py-1 rounded-2xl"
              >
                <FaUser /> Sign In
              </Link>
              <Link
                to="/Register"
                className="flex items-center gap-1 text-white bg-green-400 hover:bg-green-300 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 px-3 py-1 rounded-2xl"
              >
                <FaLock /> Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
