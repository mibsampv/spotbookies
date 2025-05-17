"use client";

import Image from "next/image";

const StatsOverview = () => {
  return (
    <>
      <div className="pb-14">
        <div className="border bg-white rounded-xl border-white py-8">
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap flex-row items-center justify-between ">
            <div className="mb-5 sm:mb-0 flex flex-row items-center gap-3">
              <div className="w-[42px]">
                <Image
                  alt="smile-icon"
                  src="/assets/icons/smile.svg"
                  width="100"
                  height="100"
                />
              </div>
              <div className="">
                <h4 className="text-xl md:text-3xl font-medium md:font-semibold">1.8k+</h4>
                <p className="text-sm md:text-base font-normal">Happy customers</p>
              </div>
            </div>
            <div className="hidden sm:block border h-[60px]"></div>
            <div className="flex justify-center mb-5 sm:mb-0 flex flex-row items-center gap-3">
              <div className="w-[42px]">
                <Image
                  alt="smile-icon"
                  src="/assets/icons/gift.svg"
                  width="100"
                  height="100"
                />
              </div>
              <div className="">
                <h4 className="text-xl md:text-3xl font-medium md:font-semibold">250+</h4>
                <p className="text-sm md:text-base font-normal">Programs</p>
              </div>
            </div>
            <div className="hidden sm:block border h-[60px]"></div>
            <div className="flex justify-end mb-5 sm:mb-0 flex flex-row items-center gap-3">
              <div className="w-[42px]">
                <Image
                  alt="smile-icon"
                  src="/assets/icons/hand.svg"
                  width="100"
                  height="100"
                />
              </div>
              <div className="">
                <h4 className="text-xl md:text-3xl font-medium md:font-semibold">440+</h4>
                <p className="text-sm md:text-base font-normal">Troups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsOverview;
