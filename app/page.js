"use client";
import React, { useState, useEffect } from "react";
import Article from "./pages/overview";
import Designs from "./pages/design";
import Architecture from "./pages/architecture";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavItem = ({ label, selected, onClick, href }) => {
  return (
    // <Link href={`/design`}>Week Assignment</Link>
    <Link href={href}>
      <div
        onClick={onClick}
        className={`text-white font-semibold cursor-pointer ${
          selected ? "border-b-2 border-white" : ""
        } px-3 py-2`}
      >
        {label}
      </div>
    </Link>
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

const Page = () => {
  const router = useRouter();
  const [initialSelectedItem, setInitialSelectedItem] = useState("Overview");

  const handleItemClick = (item) => {
    // console.log("Clicked item:", item);
    setInitialSelectedItem(item);
    router.push(`/?page=${item}`);
  };

  const renderContent = () => {
    // console.log("Rendering content for item:", initialSelectedItem);
    switch (initialSelectedItem) {
      case "Overview":
        return <Article />;
      case "Designs":
        return <Designs />;
      case "Architecture":
        return <Architecture />;
      default:
        return null;
    }
  };
  return (
    <main className="bg-black text-white">
      <nav className="bg-black-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <img src="/assets/crimehate.png" alt="Logo" className="h-0" />
          </div>
          <div className="flex justify-center space-x-4">
            <NavItem
              label="Overview"
              selected={initialSelectedItem === "Overview"}
              onClick={() => handleItemClick("Overview")}
              href="/?page=overview"
            />
            <NavItem
              label="Designs"
              selected={initialSelectedItem === "Designs"}
              onClick={() => handleItemClick("Designs")}
              href="/?page=designs"
            />
            <NavItem
              label="Architecture"
              selected={initialSelectedItem === "Architecture"}
              onClick={() => handleItemClick("Architecture")}
              href="/?page=architecture"
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
    </main>
  );
};

export default Page;
