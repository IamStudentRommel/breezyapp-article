import React from "react";

const developers = [
  { id: 1, name: "Rommel Hipos", imageUrl: "/assets/mel.png" },
  {
    id: 2,
    name: "Romeo Costillas",
    imageUrl: "/assets/romeo.png",
  },
  { id: 3, name: "Ko Kogawichi", imageUrl: "https://via.placeholder.com/150" },
  {
    id: 4,
    name: "Aivee Madrelejos",
    imageUrl: "/assets/aivee.png",
  },
];

const handleDeveloperClick = (developer) => {
  console.log(developer.name);
  if (developer.name === "Rommel Hipos") {
    window.open("https:syntaxmelworks.com", "_blank");
  }
};

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {developers.map((developer) => (
        <div
          key={developer.id}
          className="developer-container transform transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          <div
            className="developer-content bg-white p-4 rounded-md cursor-pointer flex items-center"
            onClick={() => handleDeveloperClick(developer)}
          >
            <img
              src={developer.imageUrl}
              alt={developer.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-black italic">
                {developer.name}
              </p>
              {/* <p className="text-sm">{}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
