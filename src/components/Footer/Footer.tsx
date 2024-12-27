import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white mt-10 py-10  ">
      <div className="container mx-auto px-3 pt-10 lg:max-w-7xl ">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="mb-6">
            <h2 className="lg:text-3xl text-2xl font-bold mb-4">MegaMart</h2>
            <div className="flex items-center gap-2 ">
              <FaWhatsapp className="text-xl" />
              <span className="ml-2">Whatsapp</span>
            </div>
            <p className="ml-8 mb-2">+1 202-918-2132</p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <span className="ml-2">Call Us</span>
            </div>
            <p className="ml-8">+1 202-918-2132</p>
            <div className="mt-10 flex flex-col lg:flex-row items-center justify-between flex-wrap gap-6">
              <div>
                <h3 className="text-lg font-semibold">Download App</h3>
                <div className="flex gap-4 mt-4">
                  <div className="flex bg-black items-center gap-2 border border-white rounded-lg px-4 py-2">
                    <FaApple className="text-3xl" />
                    <span>App Store</span>
                  </div>
                  <div className="flex bg-black items-center gap-2 border border-white rounded-lg px-4 py-2">
                    <FaGooglePlay className="text-2xl" />
                    <span>Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-6">
            <h3 className="text-lg border-b pb-2 font-semibold mb-4">
              Most Popular Categories
            </h3>
            <ol className="space-y-2 list-disc pl-5">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ol>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 pb-2">
              Customer Services
            </h3>
            <ol className="space-y-2 list-disc pl-5">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ol>
          </div>
        </div>

        {/* App Download Section */}

        {/* Footer Bottom Text */}
        <div className="mt-6">
          <hr className="border-t border-gray-300 my-4" />
          <p className="text-sm text-center">
            © 2022 All rights reserved. Reliance Retail Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
