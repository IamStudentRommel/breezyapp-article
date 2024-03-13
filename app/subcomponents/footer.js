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
    <div className="grid grid-cols-4 gap-2 mt-5">
      {developers.map((developer) => (
        <div key={developer.id} className="border p-4 rounded-md">
          <img
            src={developer.imageUrl}
            alt={developer.name}
            className="mx-auto mb-2 rounded-full"
          />
          <p className="text-center font-semibold">{developer.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
