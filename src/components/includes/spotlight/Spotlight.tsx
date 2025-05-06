"use client";

import Wrapper from "@/components/general/Wrapper";
import Image from "next/image";

const Spotlight = () => {
  return (
    <>
      <div
        className="h-[calc(100vh-82px)] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/spotlight.png')",
        }}
      >
        <Wrapper>
          <div className="">
            <div className="flex justify-center">
              <h1 className="font-normal sm:font-medium md:font-semibold text-3xl sm:text-5xl md:text-6xl text-white text-center w-[80%]">
                Experience the Best Shows and Performances in Your City with us!
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="font-light sm:font-normal md:font-medium text-lg sm:text-xl md:text-2xl text-white text-center w-[60%] pt-6 pb-4">
                Secure Your Tickets for the Best Concerts, Theater Shows, and
                Live Performances in Your City with Just a Few Clicks.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-8">
              <button className="flex flex-row gap-2 border border-solid border-[#a6a6a6] px-4 py-2.5 rounded-md bg-black hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <h4 className="w-[20px] items-center flex md:w-[30px]">
                  <Image
                    width="100"
                    height="100"
                    alt="google-store"
                    src="/assets/icons/googlePlay.svg"
                  />
                </h4>
                <div className="">
                  <p className="text-white text-xs leading-none w-fit">
                    Get it on
                  </p>
                  <h3 className="text-white text-base md:text-xl">Google Play</h3>
                </div>
              </button>
              <button className="flex flex-row gap-2 border border-solid border-[#a6a6a6] px-4 py-2.5 rounded-md bg-black hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <h4 className="w-[20px] items-center flex md:w-[30px]">
                  <Image
                    width="100"
                    height="100"
                    alt="app-store"
                    src="/assets/icons/appStore.svg"
                  />
                </h4>
                <div className="">
                  <p className="text-white text-xs leading-none w-fit">
                    Download on the
                  </p>
                  <h3 className="text-white text-base md:text-xl">App Store</h3>
                </div>
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Spotlight;
