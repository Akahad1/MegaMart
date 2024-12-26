import Link from "next/link";
import React from "react";
import { FaTruck, FaMapMarkerAlt, FaTags } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="bg-gray-100 px-4 py-2 flex flex-wrap justify-center lg:justify-between items-center text-sm">
      {/* First Line - Centered on Mobile */}
      <p className="w-full text-center lg:w-auto flex items-center justify-center text-gray-600">
        Welcome to worldwide MegaMart!
      </p>

      {/* Second Line - Flex with Wrapping */}
      <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4 mt-2 lg:mt-0">
        <span className="flex items-center space-x-1">
          <FaMapMarkerAlt className="text-blue-500" />
          <span className="text-gray-600">
            Deliver to <span className="text-black">423651</span>
          </span>
        </span>
        <Link
          href="/track-order"
          className="flex items-center space-x-1 hover:underline"
        >
          <FaTruck className="text-blue-500" />
          <span className="text-gray-500">Track your order</span>
        </Link>
        <Link
          href="/offers"
          className="flex items-center space-x-1 hover:underline"
        >
          <FaTags className="text-blue-500" />
          <span className="text-gray-500">All Offers</span>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
