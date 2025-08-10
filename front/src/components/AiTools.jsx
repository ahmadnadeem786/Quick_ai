import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0e7ff]/90 to-[#f0f9ff]/80 py-16 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e293b] tracking-tight leading-tight">
          Supercharge Your Workflow <br />
          <span className="text-[#D2C1B6]  px-2 py-1 rounded-md">with Smart AI Tools</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Discover intuitive and powerful AI utilities to boost your productivity, creativity, and efficiency.
        </p>
      </div>

      {/* Loading State or Tools Grid */}
      {!isLoaded || !user ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#1b3c53]"></div>
        </div>
      ) : (
        /* Tools Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          {AiToolsData.map((tool, idx) => (
            <div
              key={idx}
              onClick={() => navigate(tool.path)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(tool.path);
                }
              }}
              className="group cursor-pointer rounded-2xl bg-white/30 backdrop-blur-lg border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-5 sm:p-6 max-w-[320px] mx-auto"
              role="button"
              tabIndex={0}
              aria-label={`Explore ${tool.title} tool`}
            >
              {/* Icon Container */}
              <div className="mb-5 w-14 h-14 rounded-lg bg-[#1b3c53]/90 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                <tool.Icon className="w-7 h-7 text-white drop-shadow-sm" />
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{tool.title}</h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base flex-grow line-clamp-3">{tool.description}</p>

              {/* Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(tool.path);
                }}
                className="mt-5 w-full py-2.5 rounded-lg bg-[#1b3c53] text-white font-medium text-sm sm:text-base shadow-sm hover:bg-[#2d5a7a] active:scale-95 transition-all duration-200"
              >
                Explore Tool
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AiTools;