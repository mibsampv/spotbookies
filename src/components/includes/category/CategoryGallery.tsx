"use client";

import Image from "next/image";

const CategoryGallery = () => {
  const troupes = [
    {
      title: "01.",
      subtitle: "Festivals",
      image: "/assets/images/category1.jpg",
    },
    {
      title: "02.",
      subtitle: "Musicals",
      image: "/assets/images/category2.jpg",
    },
    {
      title: "03.",
      subtitle: "Dance Performance",
      image: "/assets/images/category3.jpg",
    },
    {
      title: "04.",
      subtitle: "Comedy Show",
      image: "/assets/images/category4.jpg",
    },
    {
      title: "05.",
      subtitle: "Lectures",
      image: "/assets/images/category5.jpg",
    },
    {
      title: "06.",
      subtitle: "Workshops",
      image: "/assets/images/category6.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-6 w-full pb-14">
      {troupes.map((troupe, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl w-full h-[200px] md:h-[300px] group cursor-pointer"
        >
          <Image
            src={troupe.image}
            alt={troupe.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
          <div className="absolute flex flex-col sm:flex-row justify-end sm:justify-between items-start sm:items-end p-1 sm:p-4 h-full w-full">
            <div>
              <h4 className="text-white font-extralight sm:font-normal text-base sm:text-lg lg:text-xl">
                {troupe.title}
              </h4>
              <p className="text-white font-medium md:font-semibold text-lg sm:text-xl lg:text-2xl">
                {troupe.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>


    // <ul className="w-full flex flex-wrap gap-[2%] mb-[-2%]">
    //   {troupes.map((troupe, index) => (
    //     <li
    //       key={index}
    //       className="relative cover overflow-hidden w-[32%] aspect-[2/1] mb-[2%] max-[640px]:w-[49%] max-[480px]:w-full"
    //     >
    //       <Image
    //         src={troupe.image}
    //         alt={troupe.title}
    //         fill
            
    //         className="w-full block"
    //         priority
    //       />
    //     </li>
    //   ))}
    // </ul>
  );
};

export default CategoryGallery;
