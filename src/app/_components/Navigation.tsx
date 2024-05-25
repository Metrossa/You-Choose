"use client";
import React from 'react';
import { signIn } from 'next-auth/react';

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center bg-pink-300 h-16 border-b-4 border-black px-8">
      <div className="flex items-center">
        <span className="text-white font-bold">You Choose</span>
        <div className="w-1 h- bg-black ml-6"></div>
      </div>
      <div className="flex items-center space-x-8">
        <a href="/why?" className="text-white">Why?</a>
        <a href="/who?" className="text-white">Who?</a>
        <button onClick={() => signIn('google')} className="bg-black text-white py-2 px-4 rounded">Login</button>
      </div>
    </div>
  );
};

export default NavigationBar;
