"use client";

import Image from "next/image";

const AboutCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-5 pb-5">
      <div className="bg-[#E29693] rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden">
        <div>
          <h3 className="text-black font-medium md:font-semibold text-xl md:text-3xl mb-4">
            Vision
          </h3>
          <p className="text-black text-base md:text-xl font-extralight md:font-normal w-[70%] leading-relaxed">
            Our vision is to revolutionize the way people experience live
            entertainment by creating a global platform that transcends borders
            and connects individuals with a rich tapestry of cultural and
            artistic experiences.
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            alt="vision"
            src="/assets/images/vision.png"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="bg-[#0E1112] rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden">
        <div>
          <h3 className="text-white font-medium md:font-semibold text-xl md:text-3xl mb-4">
            Mission
          </h3>
          <p className="text-white text-base md:text-xl font-extralight md:font-normal w-[70%] leading-relaxed">
            Our mission is to revolutionize the way people experience live
            entertainment by creating a global platform that transcends borders
            and connects individuals with a rich tapestry of cultural and
            artistic experiences.
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            alt="mission"
            src="/assets/images/mission.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
