import Image from "next/image";
import React from "react";
interface Tcategories {
  _id: string;
  name: string;

  img: string;
}

interface SectionsProps {
  catagoroyData: Tcategories[];
}
const Categories: React.FC<SectionsProps> = ({ catagoroyData }) => {
  return (
    <div>
      <section>
        <div className="flex justify-between items-center mb-6 mr-3 ml-3 lg:ml-0 md:ml-8 lg:mr-0 md:mr-8">
          <h2 className="lg:text-2xl lg:w-1/2 md:w-full w-48   text-lg font-bold">
            Shop From <span className="text-blue-600">Top Categories</span>
          </h2>
          <a href="#" className="text-blue-500 btn  lg:font-medium">
            View All
          </a>
        </div>

        {/* Thin black divider with a thicker blue section */}
        <div className="w-full h-[1px] bg-[#EDEDED] mb-5 mr-3 ml-3 lg:ml-0 md:ml-8 lg:mr-0 md:mr-8">
          <div className="w-1/4 h-[2px] bg-blue-500"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {catagoroyData.map((category, index) => (
            <div
              key={index}
              className="flex flex-col w-[132px] h-[172px] items-center ml-5"
            >
              <div className="  mb-2">
                <Image
                  src={category.img}
                  alt={category.name}
                  className="h-24 w-24 object-contain bg-[#F5F5F5] p-3 hover:border-blue-600 rounded-full border"
                  width={92}
                  height={92}
                />
              </div>
              <p className="text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
