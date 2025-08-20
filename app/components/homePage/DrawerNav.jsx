"use client";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { IoHome } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiSearch } from "react-icons/hi";
export default function DrawerNav({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="z-[100] !bg-gray-300 transition-all duration-1000"
        position="bottom"
      >
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 w-full"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div className="space-y-4">
                <form className=" md:hidden ">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <SidebarItems className="flex flex-col gap-y-4 text-gray-800 p-5 rounded-lg bg-[#b4b2b2]">
                  <Link
                    className={`${
                      pathname == "/" ? "bg-[#e4e4e4]" : ""
                    } p-2 rounded-lg hover:bg-[#e4e4e4] flex items-center gap-x-2`}
                    href="/"
                  >
                    <IoHome />
                    Home
                  </Link>
                  <Link
                    href="/hotel"
                    className={`${
                      pathname == "/hotel" ? "bg-[#e4e4e4]" : ""
                    } p-2 rounded-lg hover:bg-[#e4e4e4] flex items-center gap-x-2`}
                  >
                    <RiHotelFill />
                    Hotels
                  </Link>

                  <Link
                    href="/about"
                    className={`${
                      pathname == "/about" ? "bg-[#e4e4e4]" : ""
                    } p-2 rounded-lg hover:bg-[#e4e4e4] flex items-center gap-x-2`}
                  >
                    <IoPeopleSharp />
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={`${
                      pathname == "/contact" ? "bg-[#e4e4e4]" : ""
                    } p-2 rounded-lg hover:bg-[#e4e4e4] flex items-center gap-x-2`}
                  >
                    <FaQuestionCircle />
                    Contact
                  </Link>
                </SidebarItems>
                <select className="px-7 py-3 bg-[#b4b2b2] w-full rounded-lg border border-[#666666] ">
                  <option value="darkmode">Dark Mode</option>
                  <option value="lightmode">Light Mode</option>
                </select>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
