import Image from "next/image";
import React from "react";

function Works() {
  return (
    <div className="pb-12 container">
      <div className="flex flex-col items-center">
        <h2 className="font-dmSans text-5xl font-bold">
          How <span className="text-primary-100">It</span> Works
        </h2>
        <p className="mt-6 text-center text-xl">
          Coworking & Flexible Office Marketplace | Search & <br /> Book Today
        </p>
      </div>

      <div className="mt-12 grid max-w-5xl mx-auto grid-cols-3 place-items-center gap-4">
        <div className="flex p-2 rounded-[16px] shadow-[0px_8px_4px_rgba(191, 189, 189, 0.4)] max-w-[280px] flex-col gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-offWhite-300 flex h-8 w-8 items-center justify-center rounded-full text-primary-100">
              1
            </span>
            Book, Reach or Call
          </div>
          <Image
            src={"/assets/images/works-1.png"}
            width={260}
            height={260}
            alt="bg"
            className="rounded-[12px]"
          />

          <div className="max-w-[230px] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className="flex p-2 rounded-[16px] shadow-[0px_8px_4px_rgba(191, 189, 189, 0.4)] max-w-[280px] flex-col gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-offWhite-300 flex h-8 w-8 items-center justify-center rounded-full text-primary-100">
              2
            </span>
            View Location Info
          </div>
          <Image
            src={"/assets/images/works-2.png"}
            width={260}
            height={260}
            alt="bg"
            className="rounded-[12px]"
          />

          <div className="max-w-[230px] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className="flex p-2 rounded-[16px] shadow-[0px_8px_4px_rgba(191, 189, 189, 0.4)] max-w-[280px] flex-col gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-offWhite-300 flex h-8 w-8 items-center justify-center rounded-full text-primary-100">
              3
            </span>
            Search Locations
          </div>
          <Image
            src={"/assets/images/works-3.png"}
            width={260}
            height={260}
            alt="bg"
            className="rounded-[12px]"
          />

          <div className="max-w-[230px] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
