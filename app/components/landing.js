"use client";
import React, { useState, useEffect } from "react";
import Article from "./overview";
import Designs from "./design";
import Architecture from "./architecture";

const NavItem = ({ label, selected, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`text-white font-semibold ${
        selected ? "border-b-2 border-white" : ""
      } px-3 py-2`}
    >
      {label}
    </a>
  );
};

const ArrowUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Function to handle scroll event and toggle visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Adjust this value based on your needs
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full w-10 h-10 ${
        isVisible ? "block" : "hidden"
      } flex justify-center items-center`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("Overview");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item);
  };

  // Render different components based on the selected item
  const renderContent = () => {
    switch (selectedItem) {
      case "Overview":
        return <Article />;
      case "Designs":
        return <Designs />;
      case "Architecture":
        return <Architecture />;
    }
  };
  return (
    <nav className="bg-black-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img src="/assets/crimehate.png" alt="Logo" className="h-0" />
        </div>
        <div className="flex justify-center space-x-4">
          <NavItem
            label="Overview"
            selected={selectedItem === "Overview"}
            onClick={() => handleItemClick("Overview")}
          />
          <NavItem
            label="Designs"
            selected={selectedItem === "Designs"}
            onClick={() => handleItemClick("Designs")}
          />
          <NavItem
            label="Architecture"
            selected={selectedItem === "Architecture"}
            onClick={() => handleItemClick("Architecture")}
          />
        </div>
        <div>
          {/* Add any additional elements for user actions or menu toggles */}
        </div>
      </div>
      {/* Render content based on the selected item */}
      {renderContent()}
      <ArrowUpButton />
    </nav>
  );
};

export default Navigation;
