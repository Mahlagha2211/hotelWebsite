"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const cardsData = [
    { id: 1, title: "Hotels", image: "/images/hotel.png" },
    { id: 2, title: "Apartments", image: "/images/apartment.png" },
    { id: 3, title: "Resorts", image: "/images/resort.png" },
    { id: 4, title: "Villas", image: "/images/villa.png" },
    { id: 5, title: "Cottages", image: "/images/cottage.png" },
    { id: 6, title: "Luxury Lodges", image: "/images/hotel.png" },
    { id: 7, title: "Guesthouses", image: "/images/hotel.png" },
  ];
  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          950: {
            slidesPerView: 5,
          },
        }}
        loop={false}
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className={` text-center  space-y-3 `}>
              <h2 className="md:text-lg max-[550px]:text-sm  font-bold bg-clip-text text-transparent bg-linear-to-r from-[#222222] to-[#b8b7b7]">
                {card.title}
              </h2>

              <div className="min-[950px]:h-96 min-[400px]:max-[950px]:h-80 h-80">
                <img
                  src={card.image}
                  alt=""
                  className="object-fill w-full h-full rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
