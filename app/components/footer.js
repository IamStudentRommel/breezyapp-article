import React, { useState } from "react";
import Developers from "../data/developers";

const handleDeveloperClick = (developer) => {
  // console.log(developer.name);
  if (developer.name === "Rommel Hipos") {
    window.open("https://syntaxmelworks.com", "_blank");
  } else {
    alert("Profile not yet shared");
  }
};

const Footer = () => {
  const [hoveredDeveloper, setHoveredDeveloper] = useState(null);

  const handleMouseEnter = (developer) => {
    setHoveredDeveloper(developer);
  };

  const handleMouseLeave = () => {
    setHoveredDeveloper(null);
  };
  return (
    <main>
      <h2 className="text-xl md:text-xl bg-gradient-to-r from-blue-950 to-white text-white py-2 px-4 mb-2 mt-4">
        Developers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
        {Developers.map((developer) => (
          <div
            key={developer.id}
            className="developer-container transform transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg "
            onClick={() => handleDeveloperClick(developer)}
            onMouseEnter={() => handleMouseEnter(developer)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="developer-content bg-white  p-4 rounded-md cursor-pointer flex items-center">
              <img
                src={developer.imageUrl}
                alt={developer.name}
                className={`w-16 h-16 rounded-full mr-4 ${
                  hoveredDeveloper === developer ? "flip" : ""
                }`}
              />
              <div>
                {hoveredDeveloper === developer ? (
                  <a className="font-semibold text-blue-700 italic hover:underline">
                    View Profile
                  </a>
                ) : (
                  <p className="font-semibold text-black italic">
                    {developer.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Footer;
