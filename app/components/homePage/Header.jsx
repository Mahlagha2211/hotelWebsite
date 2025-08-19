import Hotels from "./Hotels";
import Navbar from "./Navbar";
import Reserve from "./Reserve";

export default function Header() {
  return (
    <div className="relative h-[700px] ">
      <div className="bg-[url('/images/header.png')] blur-[1px] h-full   w-full absolute bg-[rgba(0,0,0,0.5)] bg-cover bg-[100%_100%] -z-1  bg-no-repeat bg-blend-multiply"></div>
      <Navbar />
      <p className=" lg:px-20 p-5 pt-20 pb-10 lg:text-6xl sm:text-5xl min-[450px]:max-sm:text-4xl max-[450px]:text-2xl space-y-4 font-bold ">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r  from-white via-[#CCCCCC]    to-[#CCCCCC]">
          Explore your place
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r  from-white to-[#e7e6e6]">
          to stay
        </span>
      </p>
      <Reserve />
     
    </div>
  );
}
