"use client";

import Link from "next/link";
import Logo from "../navbar/Logo";
import Image from "next/image";
import Wrapper from "@/components/general/Wrapper";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="pt-14 pb-6 flex flex-rwo items-center justify-between">
          <div className="">
            <Logo />
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="twiter.com">
                <Image
                  width="100"
                  src="/assets/icons/twitter.svg"
                  height="100"
                  alt="twitter"
                />
              </Link>
            </div>
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="">
                <Image
                  width="100"
                  src="/assets/icons/linkedIn.svg"
                  height="100"
                  alt="linkedIn"
                />
              </Link>
            </div>
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="">
                <Image
                  width="100"
                  src="/assets/icons/facebook.svg"
                  height="100"
                  alt="faceBook"
                />
              </Link>
            </div>
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="">
                <Image
                  width="100"
                  src="/assets/icons/github.svg"
                  height="100"
                  alt="gitHub"
                />
              </Link>
            </div>
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="">
                <Image
                  width="100"
                  src="/assets/icons/socialIcon5.svg"
                  height="100"
                  alt="social-icon"
                />
              </Link>
            </div>
            <div className="w-[18px] md:w-[22px]">
              <Link className="" href="">
                <Image
                  width="100"
                  src="/assets/icons/wiki.svg"
                  height="100"
                  alt="wikipedia"
                />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-solid border-white">
        <p className="font-normal text-base text-center py-4">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
