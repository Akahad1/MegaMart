"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "Groceries", link: "/groceries" },
    { name: "Premium Fruits", link: "/premium-fruits" },
    { name: "Home & Kitchen", link: "/home-kitchen" },
    { name: "Fashion", link: "/fashion" },
    { name: "Electronics", link: "/electronics" },
    { name: "Beauty", link: "/beauty" },
    { name: "Home Improvement", link: "/home-improvement" },
    { name: "Sports, Toys & Luggage", link: "/sports-toys-luggage" },
  ];

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-sm">
        <p>Welcome to worldwide MegaMart!</p>
        <div className="space-x-4">
          <span>Deliver to 423651</span>
          <Link href="/track-order" className="hover:underline">
            Track your order
          </Link>
          <Link href="/offers" className="hover:underline">
            All Offers
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg text-blue-600"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <span className="bg-blue-100 p-2 rounded-full">☰</span>
              </motion.div>
              <span>MegaMart</span>
            </button>
          </div>

          {/* Center Search Bar */}
          <div className="flex-grow mx-4 mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign Up/Sign In
            </Link>
            <Link href="/cart" className="text-blue-600 flex items-center">
              Cart
            </Link>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className=" p-3 rounded-md mt-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.link}
                  className="text-center py-2 bg-[#F3F9FB] text-sm shadow hover:bg-blue-500 hover:text-white rounded-xl "
                >
                  {category.name}
                  <FaAngleDown className="inline ml-1 text-sm hover:text-white" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
