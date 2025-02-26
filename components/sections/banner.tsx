"use client";

import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-gradient-to-r from-green-50 to-green-200 rounded-xl shadow-md">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Wise Eye: Visionary Solutions for Enhanced Elderly Care
          </h1>

          <p className="text-green-700 mb-8 md:text-lg">
            Wise Eye presents an innovative suite of cutting-edge solutions
            crafted specifically to enhance and revolutionize elderly care. By
            integrating state-of-the-art technologies and intelligent systems,
            Wise Eye endeavors to provide comprehensive, proactive, and
            personalized support for the well-being and safety of the elderly
            population, setting new standards in the domain of caregiving and
            monitoring solutions.
          </p>

          <button
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={() => console.log("Read More clicked")}
          >
            Read More 👋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;