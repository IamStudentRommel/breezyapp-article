import React from "react";

const developers = [
  { id: 1, name: "Rommel Hipos", imageUrl: "https://via.placeholder.com/150" },
  {
    id: 2,
    name: "Romeo Costillas",
    imageUrl: "https://via.placeholder.com/150",
  },
  { id: 2, name: "Ko Kogawichi", imageUrl: "https://via.placeholder.com/150" },
  {
    id: 2,
    name: "Aivee Madrelejos",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more developers as needed
];

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {developers.map((developer) => (
        <div key={developer.id} className="flex border p-4 rounded-md">
          <img
            src={developer.imageUrl}
            alt={developer.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{developer.name}</p>
            <p className="text-sm">{/* Add developer details here */}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
