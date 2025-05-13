import React , { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore"; 

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5000/users", userData);
      console.log("User registered successfully:", response.data);

      login(response.data);
      navigate('/'); 

    } catch (error) {
      console.error("Error:", error);
      setError("Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto p-6 bg-white mt-16">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Register</h2>
      
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full border-b border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border-b border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border-b border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col gap-y-2 items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow"
          >
            Register
          </button>
          <a href="/login" className="text-blue-600 hover:underline">
            Already have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
}
