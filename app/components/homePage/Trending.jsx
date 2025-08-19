export default function Trending() {
  return (
    <div className="bg-[#1a1a1a] grid grid-cols-12  px-10 lg:px-24 min-[900px]:pt-24 pt-10 pb-12">
      <div className="min-[1150px]:col-span-8 min-[900px]:max-[1150px]:col-span-7 col-span-12  py-10 space-y-4 max-[900px]:text-center">
        <p className="min-[450px]:text-xl text-[18px] font-bold text-white">Stay in the know</p>
        <p className="text-gray-300 min-[900px]:w-2/3 w-full text-justify max-[450px]:text-sm">
          sign up to get marketing emails from Bookme.com,including
          promotions,rewards,travel experiences,and informaition about
          Bookme.com and Booking.com Transport Limited products and services
          hotel.
        </p>
        <div className="py-4 space-y-1">
          <div className="flex max-[900px]:justify-center max-[400px]:flex-col  space-x-1 space-y-2">
            <input
              type="text"
              className=" bg-white min-[1150px]:w-96 min-[400px]:max-[1150px]:w-80 w-full pl-4 px-4 py-2 rounded-lg shadow-[inset_0_0_5px_black]"
              name=""
              id=""
              placeholder="Your email address"
            />
            <input
              type="submit"
              value="Subscribe"
              className="cursor-pointer bg-[#C49C74] rounded-lg  text-sm px-4 py-2 "
            />
          </div>
          <p className="text-sm text-gray-300 px-2 max-[450px]:text-[10px]">
            you can opt out anytime,See our 
             <span className="text-[#C49C74] underline cursor-pointer">
              privacy statement
            </span>
          </p>
        </div>
      </div>
      <div className="min-[1150px]:col-span-4 min-[900px]:max-[1150px]:col-span-5 col-span-12 flex gap-x-8 max-[900px]:justify-center">
        <div className="bg-[#202226] w-3 rounded-2xl shadow-[inset_-1px_0px_1px_gray,inset_1px_2px_5px_black] max-[900px]:hidden"></div>
        <div className="lg:w-[400px] lg:h-[500px] h-[400px] w-[300px]">
     
          <p className="min-[450px]:text-xl text-[18px]  font-bold text-white">Trending Destinations</p>
          <p className="text-sm text-gray-300">
            most popular choices for travelers from Iran
          </p>
          <div className="grid grid-cols-12 gap-x-2 py-4 lg:h-[450px] ">
          
            <div className="col-span-6 grid grid-rows-12 gap-y-1">
              <div className="row-span-4 relative trend">
                <img
                  src="/images/dubai.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <p>Dubai</p>
              </div>
              <div className="row-span-4 relative trend">
                <img
                  src="/images/tbilisi.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <p>Tbilisi</p>
              </div>
              <div className="row-span-4 relative trend">
                <img
                  src="/images/istanbul.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <p>Istanbul</p>
              </div>
            </div>

            {/* سمت راست */}
            <div className="col-span-6 grid grid-rows-12 gap-y-1">
              <div className="row-span-8 relative trend">
                <img
                  src="/images/paris.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <p className="!top-[calc(50%-20px)]">Paris</p>
              </div>
              <div className="row-span-4 relative trend">
                <img
                  src="/images/taiwan.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <p>Taiwan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
