import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-[#0c0c0c] lg:px-32 px-10 py-16 ">
      <div className="flex justify-between items-center text-white pb-5 border-b-2  border-[#303030]">
        <p className="text-2xl max-sm:text-xl ">
          Bookme <span className="text-sm">.com</span>
        </p>
        <div className="flex items-center gap-x-5 max-md:gap-x-3 max-md:text-sm">
          <p className="max-sm:hidden">Ready to get started?</p>
          <p className="text-sm text-[#0c0c0c] cursor-pointer bg-[#C49C74] rounded-lg px-6 py-4 max-md:py-2 max-md:px-4 max-md:text-[11px] max-[400px]:hidden">
            Get Started
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 text-white py-32 max-[450px]:py-16 gap-y-7 ">
        <div className="col-span-5 min-[450px]:max-md:col-span-6 max-[450px]:col-span-12 max-md:text-center space-y-6">
          <p className="max-md:text-sm">Subscribe to our newsletter</p>
          <div className="grid grid-cols-12">
            <input
              type="text"
              placeholder="Email address"
              className="col-span-8 max-md:col-span-10 outline-0 border-b-2 py-3 max-md:py-2 border-[#303030]"
            />
            <div className="col-span-2 cursor-pointer  rounded-t-lg bg-[#c49c74]  cursor-pointe flex items-center justify-center">
              <IoIosArrowForward className="text-[#0c0c0c]" />
            </div>
          </div>
        </div>
        <div className="col-span-3 min-[450px]:max-md:col-span-6 max-[450px]:col-span-12 max-md:text-center text-sm max-md:text-[12px] space-y-2">
          <p className="text-[#C49C74] !text-[17px] ">services</p>
          <p>Email Market</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className="col-span-2 min-[450px]:max-md:col-span-6 max-[450px]:col-span-12 max-md:text-center text-sm max-md:text-[12px] space-y-2">
          <p className="text-[#C49C74] !text-[17px]">About</p>
          <p>Our Story</p>
          <p>Benegits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className="col-span-2 min-[450px]:max-md:col-span-6 max-[450px]:col-span-12 max-md:text-center text-sm max-md:text-[12px] space-y-2">
          <p className="text-[#C49C74] !text-[17px]">Help</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="text-gray-200 flex justify-between">
        <div className="flex text-sm min-sm:max-md:text-[12px] max-sm:text-[10px] gap-x-16 max-md:gap-x-3">
          <p>Teams & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-x-10 max-md:gap-x-3 ">
          <FaFacebookF className="text-2xl max-sm:text-sm cursor-pointer"/>
          <FaTwitter className="text-2xl max-sm:text-sm cursor-pointer" />
          <FaInstagram className="text-2xl max-sm:text-sm cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
