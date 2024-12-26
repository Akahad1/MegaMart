import Link from "next/link";
import React from "react";
import { FaTruck, FaMapMarkerAlt, FaTags } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="bg-gray-100 px-4 py-2 flex flex-wrap justify-between items-center text-sm">
      <p className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-blue-500" />
        <span>Welcome to worldwide MegaMart!</span>
      </p>
      <div className="flex flex-wrap items-center space-x-4 mt-2 lg:mt-0">
        <span className="flex items-center space-x-1">
          <FaTruck className="text-green-500" />
          <span>Deliver to 423651</span>
        </span>
        <Link
          href="/track-order"
          className="flex items-center space-x-1 hover:underline"
        >
          <FaTruck className="text-gray-500" />
          <span>Track your order</span>
        </Link>
        <Link
          href="/offers"
          className="flex items-center space-x-1 hover:underline"
        >
          <FaTags className="text-yellow-500" />
          <span>All Offers</span>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
