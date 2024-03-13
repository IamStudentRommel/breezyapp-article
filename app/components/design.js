"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../subcomponents/title";
import imagesData from "../data/design.json";

export default function Design() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imagesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imagesData.length - 1 : prevSlide - 1
    );
  };
  return (
    <main>
      <Title />
      <div className="max-w-4xl mx-auto px-4 md:px-0 mt-10">
        {/* <h1 className="text-2xl md:text-2xl font-bold mb-4 ">Design Concept</h1> */}
        <h2 className="text-center text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4">
          {imagesData[currentSlide].title}
        </h2>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <img
              className="max-h-96 h-auto w-auto mx-auto block mb-5 mt-2"
              src={imagesData[currentSlide].src}
              alt={imagesData[currentSlide].description}
            />
            <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full focus:outline-none"
                onClick={prevSlide}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full focus:outline-none"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="text-md mb-4 italic">
          {imagesData[currentSlide].description}
        </div>
      </div>
    </main>
  );
}
