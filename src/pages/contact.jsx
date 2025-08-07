import React from "react";

import { FaEnvelope } from "react-icons/fa";


export default function Contact(){
    return(

        <div className="mt-24">   
            
    <div>
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-8">
        Have questions or need help? Send us a message and our team will get back to you shortly.
      </p>
      
     </div>
            
            
            <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    
      <div className="flex justify-center mb-6">
        <FaEnvelope className="text-blue-500 text-4xl" />
      </div>

      <form action="https://formspree.io/f/YOUR_FORM_ID " method="POST" className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea name="message" placeholder="Write your message" required rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <div className="text-center">
          <button type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow">
            Send Message
          </button>
        </div>
      </form>
    </div>

        </div>

    )
}