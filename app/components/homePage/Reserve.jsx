"use client";

export default function Reserve() {
  return (
    <div className="flex lg:px-20 px-5 ">
      <div className="bg-[rgba(15,15,15,0.5)] lg:p-5 p-4 max-md:flex max-md:flex-col gap-y-4  rounded-2xl space-x-10 flex sm:max-md:w-96 ">
        <input
          type="text"
          name=""
          id=""
          className="md:max-lg:w-72 max-md:w-full reserve "
          placeholder="mazandaran"
        />

        <input
          type="number"
          name=""
          id=""
          className="reserve md:max-lg:w-28 max-md:w-full"
          placeholder="guests"
          min="1"
        />

        <button className="bg-[#C49C74]  cursor-pointer rounded-lg px-4 py-1 shadow-[inset_0_0_5px_black] max-sm:text-sm">
          Checkout
        </button>
      </div>
    </div>
  );
}
