"use client";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between lg:px-20 px-5 max-md:h-16  ">
      <p className="!text-white">
        <span className="text-xl ">Bookme</span>
        <span className="text-sm font-light">.com</span>
      </p>
      <div className="lg:w-[600px] w-[400px] flex justify-center  space-x-10 py-5 bg-gray-200  rounded-b-full max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/">Support</Link>
        <Link href="/">Tips</Link>
        <Link href="/">Sign in</Link>
      </div>
      <div className="rounded-full border border-white text-white py-1 px-3 max-md:hidden">
        get the app
      </div>
      <div className="md:hidden">
        <RxHamburgerMenu className="z-10 text-white cursor-pointer w-6 h-6" onClick={()=>setIsOpen(true)}/>
        <DrawerNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
