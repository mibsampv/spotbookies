"use client";

import Wrapper from "@/components/general/Wrapper";
import Logo from "./Logo";
import UserLogin from "./UserLogin";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm h-[82px]">
        <Wrapper>
          <div className="flex flex-row items-center justify-between h-[82px]">
            <Logo />
            <UserLogin />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Navbar;
