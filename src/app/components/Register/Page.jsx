"use client";

import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/24/outline';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-[780px] bg-blue-500 flex justify-center items-center">
        <img src="/logn&regist.png" alt="Login" className="w-[420px] h-auto" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[60px] leading-[72.3px] text-[#205FFF] font-[600] font-russo text-center mb-[20px]">Flowpos</h1>
        <form className="space-y-4 mx-[73px]">
          <p className="mb-[10px] text-[15px] font-bold">Registration</p>
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
}

export default RegisterForm;