"use client";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
export default function DrawerNav({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="z-[100] !bg-gray-300 transition-all duration-1000"
        position="right"
      >
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 w-full"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden ">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <SidebarItems className="flex flex-col gap-y-4 text-gray-800 ">
                  <Link
                    className={`${
                      pathname == "/" ? "bg-[#b4b2b2]" : ""
                    } p-2 rounded-lg hover:bg-white`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    href="/support"
                    className={`${
                      pathname == "/support" ? "bg-[#b4b2b2]" : ""
                    } p-2 rounded-lg hover:bg-white`}
                  >
                    Support
                  </Link>
                  <Link
                    href="/tips"
                    className={`${
                      pathname == "/tips" ? "bg-[#b4b2b2]" : ""
                    } p-2 rounded-lg hover:bg-white`}
                  >
                    Tips
                  </Link>
                  <Link
                    href="/signIn"
                    className={`${
                      pathname == "/signIn" ? "bg-[#b4b2b2]" : ""
                    } p-2 rounded-lg hover:bg-white`}
                  >
                    Sign in
                  </Link>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
