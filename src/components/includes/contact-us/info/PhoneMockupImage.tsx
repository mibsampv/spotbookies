"use client";

import StoreDownloadButtons from "./StoreDownloadButtons";
import Image from "next/image";

const PhoneMockupImage = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="px-8 overflow-hidden">
        <Image
          src="/assets/images/phone-image.png"
          alt="Phone Mockup"
          width={100}
          height={100}
          className="w-full h-[400px] lg:h-[500px] rounded-xl object-cover"
        />
      </div>

      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-full">
        <StoreDownloadButtons />
      </div>
    </div>
  );
};

export default PhoneMockupImage;
