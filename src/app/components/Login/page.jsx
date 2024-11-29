"use client";

import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/24/outline';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="md:w-[50%] bg-blue-500 lg:flex md:flex justify-center items-center p-4 hidden md:block">
        <img src="/logn&regist.png" alt="Login" className="w-full max-w-[420px] h-auto" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center p-4">
        <h1 className="text-[40px] md:text-[60px] leading-[72.3px] text-[#205FFF] font-[600] font-russo text-center mb-[20px]">Flowpos</h1>
        <p className="mb-[10px] text-[16px] md:text-[18px] font-bold text-center">Hi, Welcome Back to Flowpos!</p>
        <p className="mb-6 text-[12px] md:text-[14px] text-[#747474] font-[400] text-center">Please login with your account</p>
        <form className="space-y-4 mx-auto max-w-[400px] w-full">
          <div>
            <input 
              type="text" 
              id="storename" 
              name="storename" 
              placeholder="Storename" 
              required 
              className="mt-1 block w-full p-[12px] border font-[400] text-[#BFBFBF] border-[#ACACAC] rounded-[10px]" 
            />
          </div>
          <div>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Username" 
              required 
              className="mt-1 block w-full p-[12px] border font-[400] text-[#BFBFBF] border-[#ACACAC] rounded-[10px]" 
            />
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              name="password" 
              placeholder="Password" 
              required 
              className="mt-1 block w-full p-[12px] border font-[400] text-[#BFBFBF] border-[#ACACAC] rounded-[10px]" 
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
          <div>
            <label htmlFor="role" className="block text-sm text-[14px] text-[#090A0A] font-[600]">Login as:</label>
            <select id="role" name="role" className="mt-1 block w-full p-[12px] border border-[#ACACAC] font[400] rounded-[10px] mb-[15px]">
              <option value="admin">Owner</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#205FFF] text-white font-[600] text-[15px] p-[8px] rounded-[10px] hover:bg-blue-700 transition-all duration-300 ease-in-out">Login</button>
          <p className="mt-4 text-[14px] font-[600] text-[# 000000]">Dont have an account?</p>
          <button type="button" className="w-full bg-[#000000] text-white font-[600] text-[15px] p-[8px] rounded-[10px] hover:bg-gray-700 transition-all duration-300 ease-in-out border-[2px]">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;