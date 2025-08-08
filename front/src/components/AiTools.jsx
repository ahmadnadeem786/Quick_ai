import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <section className="bg-gradient-to-br from-[#f0eae2] to-[#d8cfc5] py-20 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-extrabold text-[#1B3C53] leading-tight">
          Supercharge Your Workflow <br />
          with Smart AI Tools
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-xl max-w-2xl mx-auto">
          Boost productivity, creativity, and efficiency using our intuitive and powerful AI utilities.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
          >
            {/* Card Body */}
            <div className="p-6 flex flex-col justify-between h-full">
              {/* Icon Box */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#1B3C53] text-white mb-6 transition-transform duration-300 group-hover:scale-110">
                <tool.Icon className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-semibold text-[#1B3C53] mb-2">{tool.title}</h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {tool.description}
              </p>

              {/* CTA */}
              <button
                className="mt-auto w-fit bg-[#1B3C53] text-white text-sm px-4 py-2 rounded-md hover:bg-[#163445] transition-colors duration-200"
              >
                Explore Tool
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiTools;
