"use client";

import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdBed } from "react-icons/md";
import { LuDiameter } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function Hotels() {
  const testimonials = [
    {
      name: "Villa ,kemah Tinggi",
      price: 990,
      image: "./images/hotel3.png",
      bedroom: 5,
      star: 4.5,
    },
    {
      name: "Villa ,kemah Tinggi",
      price: 990,
      image: "./images/hotel4.png",
      bedroom: 2,
      star: 3.5,
    },
    {
      name: "Villa ,kuta Premiere",
      price: 990,
      image: "./images/hotel5.png",
      bedroom: 3,
      star: 5,
    },
    {
      name: "Villa ,kuta Premiere",
      price: 990,
      image: "./images/hotel2.png",
      bedroom: 1,
      star: 4.2,
    },
    {
      name: "Villa ,kemah Tinggi",
      price: 990,
      image: "./images/hotel1.png",
      bedroom: 2,
      star: 4.7,
    },
  ];
  const [index, setIndex] = useState(0);
  const length = testimonials.length;
  const prev = () => {
    setIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const getPosition = (i) => {
    if (i === index) return "center"; // آیتم وسط
    if (i === (index - 1 + length) % length) return "left"; // چپ نزدیک
    if (i === (index - 2 + length) % length) return "farLeft"; // چپ دور
    if (i === (index + 1) % length) return "right"; // راست نزدیک
    if (i === (index + 2) % length) return "farRight"; // راست دور
    return "hidden"; // بقیه مخفی
  };
  return (
    <div className=" bg-[#f0efef] flex flex-col items-center py-16">
      <p className="bg-gradient-to-r from-[black] via-[#424242] to-[#6b6b6b] text-transparent bg-clip-text font-bold text-[18px] min-[400px]:text-[23px]">
        Hotels in your area
      </p>
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center ">
        <button
          onClick={prev}
          className="absolute cursor-pointer max-[500px]:p-2 left-5  min-[700px]:max-[1040px]:left-20 min-[1040px]:max-[1120px]:left-28 min-[1120px]:left-12 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full shadow text-[#000000] border-2 border-[#000000] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormPrevious />
        </button>

        <div className="relative flex w-full h-[350px] min-[700px]:max-lg:h-[350px] lg:h-[400px] items-center justify-center">
          {testimonials.map((t, i) => {
            const pos = getPosition(i);

            const base = "transition-all duration-800 ease-in-out absolute";
            const common =
              "flex flex-col items-center  text-center gap-y-1   w-full max-w-[260px] ";

            const positions = {
              center: "z-30 scale-[1.1] opacity-100 translate-x-0",

              left: "max-[560px]:opacity-0 min-[560px]:max-[700px]:-translate-x-[180px] min-[700px]:max-md:-translate-x-[225px] md:max-[1120px]:-translate-x-[250px] min-[1120px]:max-[1250px]:-translate-x-[230px] min-[1250px]:-translate-x-[260px] scale-100 z-20 md:opacity-80 opacity-30",

              right:
                "max-[560px]:opacity-0 min-[560px]:max-[700px]:translate-x-[180px] min-[700px]:max-md:translate-x-[225px] md:max-[1120px]:translate-x-[250px] min-[1120px]:max-[1250px]:translate-x-[230px] min-[1250px]:translate-x-[260px] scale-100 z-20 md:opacity-80 opacity-30",

              farLeft:
                "max-[1120px]:opacity-0 max-[1120px]:pointer-events-none  md:max-[1120px]:-translate-x-[200px] min-[1120px]:max-[1250px]:-translate-x-[440px] min-[1250px]:-translate-x-[500px] scale-90 z-10 opacity-60",

              farRight:
                "max-[1120px]:opacity-0 max-[1120px]:pointer-events-none md:max-[1120px]:translate-x-[200px] min-[1120px]:max-[1250px]:translate-x-[440px] min-[1250px]:translate-x-[500px] scale-90 z-10 opacity-60",

              hidden: "opacity-0 pointer-events-none",
            };

            return (
              <div key={i} className={`${base} ${common} ${positions[pos]}  `}>
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className=" min-[1250px]:w-60 min-[700px]:max-[1250px]:w-50 min-[560px]:max-[700px]:w-40 w-50"
                  />
                  <div className="absolute top-5 flex justify-between w-full px-5 text-white ">
                    <div className="flex items-center gap-x-1 backdrop-blur-xl   px-2 rounded-lg max-[700px]:text-[12px]">
                      <FaStar className="text-gray-200" />
                      <p>{t.star}</p>
                    </div>
                    <FaRegHeart className=" " />
                  </div>
                </div>
                <div className="min-[700px]:w-4/5 w-3/5 flex justify-between items-center  ">
                  <p className="max-[700px]:text-[12px] ">{t.name}</p>
                  <div>
                    <p className="text-[#bb732a] font-bold max-[700px]:text-[12px]">${t.price}</p>
                    <p className="min-[700px]:text-[10px] text-[7px] ">per month</p>
                  </div>
                </div>
                <div className="min-[700px]:w-4/5 w-3/5 max-[700px]:text-[10px] flex items-center gap-x-3  text-[13px] text-[#bd8e5f] ">
                  <div className="flex items-center ">
                    <MdBed />
                    <p>{t.bedroom} bedrooms</p>
                  </div>
                  <div className="flex items-center">
                    <LuDiameter />
                    <p>214 m</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute cursor-pointer max-[500px]:p-2 right-5  min-[700px]:max-[1040px]:right-20 min-[1040px]:max-[1120px]:right-28 min-[1120px]:right-12 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full shadow text-[#000000] border-2 border-[#000000] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}
