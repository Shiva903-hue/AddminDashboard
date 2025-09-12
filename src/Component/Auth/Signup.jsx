import React from 'react';

export default function SignUp() {
  
    return (
        <div className=" flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md">
                <h1 className="text-4xl bg-[#fc7e00] text-white font-bold text-center rounded-lg px-6 py-3 mb-8 shadow-md">
                    USER CREATION
                </h1>
                <div className="relative bg-white p-10 rounded-lg shadow-xl w-full">
                    <h2 className="text-center text-[#004aad] text-2xl font-bold mb-6">
                        Create User Account
                    </h2>
                    <form >
                        <div className="mb-5">
                            <label htmlFor="fullname" className="block mb-2 text-sm font-bold text-[#004aad]">
                                Full Name
                            </label>
                            <input type="text" id="fullname" placeholder="Enter your full name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]" />
                        </div>
                         <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-[#004aad]">
                               Email Address
                            </label>
                            <input type="email" id="email" placeholder="Enter your email address" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="username-signup" className="block mb-2 text-sm font-bold text-[#004aad]">
                                Username
                            </label>
                            <input type="text" id="username-signup" placeholder="Choose a username" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password-signup" className="block mb-2 text-sm font-bold text-[#004aad]">
                                Password
                            </label>
                            <input type="password" id="password-signup" placeholder="Create a password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-bold text-[#004aad]">
                               Confirm Password
                            </label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]" />
                        </div>
                        <button type="submit" className="w-full py-3 bg-[#004aad] text-white text-base font-semibold rounded-md cursor-pointer hover:bg-[#003b99] transition-colors duration-300">
                            Create User
                        </button>
                      
                    </form>
                     <div className="absolute bottom-4 right-4 text-xs opacity-50 text-gray-500 font-normal">
                        Sample Watermark
                    </div>
                </div>
            </div>
        </div>
    );
}
