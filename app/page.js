"use client";
import React, { useState, useEffect } from "react";
import Article from "./pages/overview";
import Designs from "./pages/design";
import Architecture from "./pages/architecture";
import Contact from "./pages/contact";
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

  const [initialSelectedItem, setInitialSelectedItem] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu open/close

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    console.log(pageParam);
    if (pageParam === null) {
      setInitialSelectedItem("overview");
    } else {
      setInitialSelectedItem(pageParam);
    }
  }, []);

  const handleItemClick = (item) => {
    // console.log("Clicked item:", item);
    setInitialSelectedItem(item);
    router.push(`/?page=${item}`);
    setIsMenuOpen(false); // Close the menu after clicking an item
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    // console.log("Rendering content for item:", initialSelectedItem);
    switch (initialSelectedItem) {
      case "overview":
        return <Article />;
      case "designs":
        return <Designs />;
      case "architecture":
        return <Architecture />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <main className="bg-gradient-to-br from-black via-gray-700 to-black text-white">
      <nav className="bg-black-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Burger menu icon for mobile */}
          <div className="flex items-center mb-[-80px]">
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Navigation links */}
          <div className="hidden md:flex justify-center space-x-4">
            <NavItem
              label="Overview"
              selected={initialSelectedItem === "overview"}
              onClick={() => handleItemClick("overview")}
              href="/?page=overview"
            />
            <NavItem
              label="Designs"
              selected={initialSelectedItem === "designs"}
              onClick={() => handleItemClick("designs")}
              href="/?page=designs"
            />
            <NavItem
              label="Architecture"
              selected={initialSelectedItem === "architecture"}
              onClick={() => handleItemClick("architecture")}
              href="/?page=architecture"
            />
            <NavItem
              label="Contact"
              selected={initialSelectedItem === "contact"}
              onClick={() => handleItemClick("contact")}
              href="/?page=contact"
            />
          </div>
          <div>
            {/* Add any additional elements for user actions or menu toggles */}
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-500 p-4">
          <div className="flex flex-col space-y-2">
            <NavItem
              label="Overview"
              selected={initialSelectedItem === "overview"}
              onClick={() => handleItemClick("overview")}
              href="/?page=overview"
            />
            <NavItem
              label="Designs"
              selected={initialSelectedItem === "designs"}
              onClick={() => handleItemClick("designs")}
              href="/?page=designs"
            />
            <NavItem
              label="Architecture"
              selected={initialSelectedItem === "architecture"}
              onClick={() => handleItemClick("architecture")}
              href="/?page=architecture"
            />
            <NavItem
              label="Contact"
              selected={initialSelectedItem === "contact"}
              onClick={() => handleItemClick("contact")}
              href="/?page=contact"
            />
          </div>
        </div>
      )}
      {/* Render content based on the selected item */}
      {renderContent()}
      <ArrowUpButton />
    </main>
  );
};

export default Page;
