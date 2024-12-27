"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaAngleDown,
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import TopHeader from "../TopHeader/TopHeader";

const Navber = () => {
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
      <TopHeader></TopHeader>
      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap px-4 py-3">
          {/* Left Section */}
          <div className="flex ">
            <div className="flex items-center space-x-4 mb-4 mt-3">
              <button
                onClick={toggleMenu}
                className="flex items-center  space-x-2 text-lg text-blue-600"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="  ">
                    <div className="flex flex-col p-2  bg-blue-50 justify-between w-8 h-8">
                      <span className="w-full h-[2px] bg-blue-600 rounded"></span>
                      <span className="w-full h-[2px] bg-blue-600 rounded"></span>
                      <span className=" h-[2px] w-1/2  bg-blue-600 rounded "></span>
                    </div>
                  </span>
                </motion.div>
                <span>MegaMart</span>
              </button>
            </div>

            {/* Center Search Bar */}
            <div className="flex lg:w-[507px] md:w-[507px] items-center bg-blue-50 rounded-xl px-0 md:px-3 lg:py-2 md:py-2 py-0 lg:px-4 shadow-sm lg:ml-52 md:ml-40 w-52 ml-5 ">
              {/* Search Icon */}
              <FaSearch className="text-blue-500 mr-2" />

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />

              {/* Menu Icon */}
              <FaBars className="text-blue-500 ml-2" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex  lg:items-center md:mt-5 justify-evenly lg:space-x-6 mt-4 sm:mt-0">
            {/* Sign Up/Sign In with User Icon */}
            <div>
              <Link
                href="/signin"
                className="flex items-center hover:underline space-x-2"
              >
                <FaUser className="text-blue-600" />
                <span>Sign Up/Sign In</span>
              </Link>
            </div>

            {/* Cart with Cart Icon */}
            <div>
              <Link
                href="/cart"
                className="text-blue-600 flex items-center lg:ml-0 ml-32 md:ml-96 space-x-2"
              >
                <FaShoppingCart className="text-blue-600" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-3 rounded-md mt-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-screen-xl mx-auto">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.link}
                  className="inline-flex items-center py-2 px-4 bg-[#F3F9FB] text-sm font-medium shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white rounded-xl w-full"
                  aria-label={`Go to ${category.name} category`}
                >
                  {category.name}
                  <FaAngleDown className="inline ml-1 hover:text-white text-blue-600 text-sm " />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navber;
