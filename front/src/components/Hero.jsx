import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/ai.avif";
import img1 from "../assets/a1.jpeg";
import Navbar from './Navbar';
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1B3C53] text-gray-300">
      <Navbar/>
      <div className="min-h-screen max-w-6xl mx-auto pt-20 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10 gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#F9F3EF]">
            Create amazing content <br />
            with <span className="text-[#D2C1B6]">AI tools</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400">
            Unlock the power of AI. Generate stunning visuals, write impactful articles,
            and supercharge your productivity with our suite of intelligent tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <button
              onClick={() => navigate("/ai")}
              className="bg-[#F9F3EF] text-[#1B3C53] font-semibold px-6 py-3 rounded hover:scale-105 transition duration-200"
            >
              Start Creating
            </button>
            <button className="bg-[#456882] text-[#F9F3EF] font-semibold px-6 py-3 rounded shadow hover:scale-105 transition duration-200">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1  flex gap-4 items-center justify-center">
          <img
            src={img}
            alt="AI creativity 1"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img}
            alt="AI creativity 2"
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
