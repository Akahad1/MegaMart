/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/New folder/Group 50 (1).png";
import img2 from "../../../public/New folder/Group 51 (1).png";
import img3 from "../../../public/New folder/Group 52 (1).png";

interface DailyProduct {
  _id: string;
  name: string;
  Off: string;
  img: string;
}

interface SectionsProps {
  DailyProductData: DailyProduct[];
}
const Sections: React.FC<SectionsProps> = ({ DailyProductData }) => {
  return (
    <div className="py-10">
      <div className="container mx-auto lg:px-0 px-4 space-y-10">
        {/* Top Electronics Brands Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="lg:text-2xl  text-lg font-bold">
              Top <span className="text-blue-500 ">Electronics Brands</span>
            </h2>
            <a href="#" className="text-blue-500 lg:font-medium">
              View All
            </a>
          </div>

          {/* Thin black divider with a thicker blue section */}
          <div className="w-full h-[1px] bg-[#EDEDED] mb-5">
            <div className="w-1/4 h-[2px] bg-blue-500"></div>
          </div>

          <motion.div
            className="lg:flex md:flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Card 1 */}
            <Image
              src={img1}
              alt="iPhone"
              className="w-full h-auto object-contain sm:w-full md:w-1/2 lg:w-1/3"
            />

            {/* Card 2 */}
            <Image
              src={img2}
              alt="iPhone"
              className="w-full h-auto object-contain  md:mt-0 lg:mt-0 mt-[-70px]  md:w-1/2 lg:w-1/3"
            />

            {/* Card 3 */}
            <Image
              src={img3}
              alt="iPhone"
              className="w-full h-auto object-contain lg:mt-0 mt-[-70px]  md:mt-0  md:w-1/2 lg:w-1/3"
            />
          </motion.div>
        </section>

        {/* Daily Essentials Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Daily <span className="text-blue-500">Essentials</span>
            </h2>
            <a href="#" className="text-blue-500 font-medium">
              View All
            </a>
          </div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Item 1 */}
            {DailyProductData.map((data: DailyProduct) => (
              <div
                key={data._id}
                className="bg-[#F5F5F5] shadow rounded-lg p-4 text-center"
              >
                <Image
                  src={data.img}
                  alt={data.name}
                  className="w-full h-24 object-contain mb-2"
                  width={200} // Set the desired width
                  height={200} // Set the desired height
                />
                <h3 className="text-sm font-medium">{data.name}</h3>
                <p className="text-gray-500 text-sm">{data.Off}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
