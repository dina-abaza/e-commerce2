import React from "react"
export default function Login(){
return(

    <div class=" w-full max-w-md mx-auto mt-20 p-6 bg-white ">
  
  <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>


  <form class="space-y-6">
    <div>
      <input type="email" placeholder="Enter your email" required
             class="mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <input type="password" placeholder="Enter your password" required
             class="mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div class="text-center">
      <button type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow">
        Login
      </button>
    </div>
  </form>
</div>

)
}