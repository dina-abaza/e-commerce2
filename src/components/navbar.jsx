
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 bg-gray-50 shadow transition-all duration-700 ease-in-out
        ${show ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"}`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-6">
        <h2 className="text-2xl text-green-500 uppercase font-bold">shopease</h2>

        {/* روابط التنقل - تظهر فقط في الشاشات المتوسطة وفوق */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/" className="text-black hover:-translate-y-1 transition-transform duration-200">Home</Link>
          <Link to="/products" className="text-black hover:-translate-y-1 transition-transform duration-200">Products</Link>
          <Link to="/about" className="text-black hover:-translate-y-1 transition-transform duration-200">About</Link>
          <Link to="/contact" className="text-black hover:-translate-y-1 transition-transform duration-200">Contact</Link>
        </div>

        {/* أزرار المستخدم - تظهر فقط في الشاشات المتوسطة وفوق */}
        <div className="hidden md:flex gap-3">
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

        {/* زر الهمبرجر - يظهر فقط على الشاشات الصغيرة */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* قائمة منسدلة تظهر لما نضغط الهمبرجر */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 items-end px-6 py-4 bg-gray-100 border-t border-gray-200">
          <Link to="/" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="py-2">Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="py-2">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-2">Contact</Link>

          {user ? (
            <>
              <Link to="/cart" onClick={() => setMenuOpen(false)} className="text-blue-500 py-2">Cart</Link>
              <Link to="/favorites" onClick={() => setMenuOpen(false)} className="text-green-500 py-2">Favorites</Link>
              <button onClick={handleLogout} className="text-red-500 py-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/Login" onClick={() => setMenuOpen(false)} className="text-blue-500 py-2">Sign In</Link>
              <Link to="/Register" onClick={() => setMenuOpen(false)} className="text-green-500 py-2">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
