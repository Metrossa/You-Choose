"use client";
import React from 'react';
import NavigationBar from './_components/Navigation';

const LandingPage = () => {
  return (
    <div className="h-screen">
      <NavigationBar />
      <div className="flex flex-col h-full">
        {/* Top 3 boxes */}
        <div className="flex" style={{ height: '70%' }}>
          <div className="flex-grow border-r-4 border-black bg-yellow-300" style={{ flexBasis: '25%' }}></div>
          <div className="flex-grow-0 border-r-4 border-black bg-pink-300" style={{ flexBasis: '50%' }}></div>
          <div className="flex-grow border-r-2 bg-yellow-300" style={{ flexBasis: '25%' }}></div>
        </div>
        {/* Horizontal line */}
        <div className="border-t-4 border-black"></div>
        {/* Bottom 3 boxes */}
        <div className="flex" style={{ height: '30%' }}>
          <div className="flex-grow border-r-4 border-black bg-pink-300" style={{ flexBasis: '25%' }}></div>
          <div className="flex-grow-0 border-r-4 border-black bg-yellow-300 relative flex items-center justify-center" style={{ flexBasis: '50%' }}>
            <button className="bg-black text-white py-2 px-4 rounded font italic text-2xl">Choose for me</button>
            <button className="text-cream italic underline mt-5 ml-2">wya?</button>
          </div>
          <div className="flex-grow border-r-0 bg-pink-300" style={{ flexBasis: '25%' }}></div>
        </div>
                {/* You */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="relative" style={{ top:'-9%', left: '-25%' }}> {/* Adjust this value to move text left */}
            <h1 className="text-black text-[10vw] absolute font-extrabold" style={{ top: '-10%', left: '-20%', opacity: '0.7', zIndex: '1' }}>YOU</h1>
            <h1 className="text-black text-[10vw] font-extrabold" style={{ top: '0', left: '-10%' }}>YOU</h1>
          </div>
          </div>
                {/* Choose */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="relative" style={{ top:'12%', left: '-25%' }}> {/* Adjust this value to move text left */}
            <h1 className="text-black text-[10vw] absolute font-extrabold" style={{ top: '-10%', left: '0', opacity: '0.7', zIndex: '1' }}>CHOOSE</h1>
            <h1 className="text-black text-[10vw] font-extrabold" style={{ top: '0', left: '0' }}>CHOOSE</h1>
          </div>
          </div>                {/* You */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="relative" style={{ top:'-9%', left: '-24%' }}> {/* Adjust this value to move text left */}
            <h1 className="text-black text-[10vw] absolute font-extrabold" style={{ top: '-10%', left: '-20%', opacity: '0.7', zIndex: '1' }}>YOU</h1>
            <h1 className="text-black text-[10vw] font-extrabold" style={{ top: '0', left: '-10%' }}>YOU</h1>
          </div>
          </div>
                {/* Choose */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="relative" style={{ top:'12%', left: '-24%' }}> {/* Adjust this value to move text left */}
            <h1 className="text-black text-[10vw] absolute font-extrabold" style={{ top: '-10%', left: '0', opacity: '0.7', zIndex: '1' }}>CHOOSE.</h1>
            <h1 className="text-black text-[10vw] font-extrabold" style={{ top: '0', left: '0' }}>CHOOSE.</h1>
          </div>
          <span className="absolute text-black text-3xl font-normal" style={{ top: '40%', left: '26%' }}>idk,</span> {/* Adjust this value to position the smaller text */}
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
