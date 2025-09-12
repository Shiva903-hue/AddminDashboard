import React from 'react';

export default function Login() {
  return (
   
    <div className="flex flex-col items-center justify-center p-4">
      
      <h1 className="text-4xl bg-[#fc7e00] text-white font-bold text-center rounded-lg px-6 py-3 mb-8">
        USER LOGIN
      </h1>

      
      <div className="relative bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-center text-[#004aad] text-2xl font-bold mb-6">
          Login
        </h2>
        <form>
         
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-[#004aad] font-bold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
              className="w-full p-2.5 mb-5 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-[#004aad] font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-2.5 mb-5 border border-gray-300 rounded-md"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#004aad] text-white text-base rounded-md cursor-pointer hover:bg-[#003b99]"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4 space-x-2">
            <a href="#" className="text-[#004aad] text-sm no-underline hover:underline">
              Forgot Password?
            </a>
            <span>|</span>
            <a href="#" className="text-[#004aad] text-sm no-underline hover:underline">
              Sign Up
            </a>
          </div>
        </form>

        {/* Watermark */}
        <div className="absolute bottom-4 right-4 opacity-50 text-black font-normal">
          Sample Watermark
        </div>
      </div>
    </div>
  );
}

