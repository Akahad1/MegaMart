import Image from "next/image";
import React from "react";
interface TPhone {
  _id: string;
  name: string;
  PreviousPrice: string;
  CurrentPrice: string;
  img: string;
}

interface SectionsProps {
  phoneData: TPhone[];
}
const Smartphones: React.FC<SectionsProps> = ({ phoneData }) => {
  console.log(phoneData);

  return (
    <div>
      <section className="mb-12 mt-12 mr-3 ml-3 lg:ml-0 md:ml-8 lg:mr-0 md:mr-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="lg:text-2xl lg:w-1/2 md:1/2 w-48   text-lg font-bold">
            Grab the best deal on{" "}
            <span className="text-blue-600">Smartphones</span>
          </h2>
          <a href="#" className="text-blue-500 btn  lg:font-medium">
            View All
          </a>
        </div>

        {/* Thin black divider with a thicker blue section */}
        <div className="w-full h-[1px] bg-[#EDEDED] mb-5">
          <div className="w-1/4 h-[2px] bg-blue-500"></div>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-5 gap-6">
          {phoneData.slice(0, 5).map((phone, index) => (
            <div
              key={index}
              className="border hover:border hover:border-blue-600 hover:shadow-lg rounded-lg "
            >
              <div className="relative mb-2 p-4 bg-[#F5F5F5]">
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded">
                  56% OFF
                </span>
                <Image
                  src={phone.img}
                  alt={phone.name}
                  className="h-40 w-auto mx-auto"
                  height={160} // Adjusted height
                  width={256} // Adjusted width
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{phone.name}</h3>
                <div className="flex gap-3">
                  <p className=" font-bold">₹{phone.PreviousPrice}</p>
                  <p className="line-through text-gray-500">
                    ₹{phone.CurrentPrice}
                  </p>
                </div>
                <p className="text-sm text-green-600">
                  Save - ₹
                  {Number(phone.PreviousPrice) - Number(phone.CurrentPrice)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Smartphones;
