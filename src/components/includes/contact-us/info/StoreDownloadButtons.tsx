"use client";

import Image from "next/image";
import Link from "next/link";

const StoreDownloadButtons = () => {
  return (
    <div className="flex justify-around items-center bg-transparent gap-4 bg-linear-to-r from-zinc-400 to-zinc-600 rounded-2xl px-5 py-6 shadow-lg w-full">
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <Link href="#">
          <Image
            width={120}
            height={40}
            src="/assets/icons/googlePlayWhite.svg"
            alt="Get it on Google Play"
            className="h-8 w-auto"
          />
        </Link>
        <div className="">
          <p className="text-white text-xs">Get it on</p>
          <h4 className="text-white text-sm md:text-lg font-medium md:font-semibold leading-none">Google Play</h4>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <Link href="#">
          <Image
            width={120}
            height={40}
            src="/assets/icons/appStore.svg"
            alt="Get it on Google Play"
            className="h-8 w-auto"
          />
        </Link>
        <div className="">
          <p className="text-white text-xs">Download on the</p>
          <h4 className="text-white text-sm md:text-lg font-medium md:font-semibold leading-none">App Store</h4>
        </div>
      </div>
    </div>
  );
};

export default StoreDownloadButtons;
