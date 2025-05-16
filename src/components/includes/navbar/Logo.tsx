"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex items-center gap-0.5 cursor-pointer">
          <div className="w-[50px] md:w-[60px]">
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo"
              height="100"
              width="100"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
