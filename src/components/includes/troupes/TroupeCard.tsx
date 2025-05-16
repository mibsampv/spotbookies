/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Button from "@/components/general/Button";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TroupeCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const troupes = [
    {
      title: "Harmony Seekers",
      subtitle: "Musical Group",
      image: "/assets/images/troupe1.jpg",
    },
    {
      title: "Rhythmic Pulse",
      subtitle: "Dance Ensemble",
      image: "/assets/images/troupe2.jpg",
    },
    {
      title: "Laugh Factory",
      subtitle: "Laugh Factory",
      image: "/assets/images/troupe3.jpg",
    },
    {
      title: "Artistry Workshop",
      subtitle: "Workshop",
      image: "/assets/images/troupe4.jpg",
    },
  ];

  return (
    <div className="pb-14 px-0 md:px-4">
      <Slider {...settings}>
        {troupes.map((troupe, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-2xl overflow-hidden w-full h-[300px] shadow-lg">
              <Image
                src={troupe.image}
                alt={troupe.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
              <div className="absolute flex flex-col sm:flex-row justify-end sm:justify-between items-start sm:items-end p-4 h-full w-full">
                <div className="w-[180px]">
                  <h4 className="text-white font-medium sm:font-semibold text-lg sm:text-2xl lg:text-3xl">
                    {troupe.title}
                  </h4>
                  <p className="text-white text-sm sm:text-base">
                    {troupe.subtitle}
                  </p>
                </div>
                <div className="w-full mt-2 sm:mt-0 sm:w-fit text-sm md:text-base">
                  <Button label="Book now" outlineBlack small disabled />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="z-10 absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-[1px] cursor-pointer hidden md:flex shadow-md hover:bg-gray-200 transition"
    >
      <IoIosArrowBack size={20} />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="z-10 absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-[1px] cursor-pointer hidden md:flex shadow-md hover:bg-gray-200 transition"
    >
      <IoIosArrowForward size={20} />
    </div>
  );
};

export default TroupeCard;
