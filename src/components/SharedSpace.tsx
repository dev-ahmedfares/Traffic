"use client";
import Image from "next/image";
import React, { useState } from "react";
import BtnPrimary from "./shared/BtnPrimary";
import BtnSecondary from "./shared/BtnSecondary";
import SpaceOffice from "./shared/SpaceOffices";
function SharedSpace() {
  const [isActiveWork, setIsActiveWork] = useState("");
  return (
    <div className="bg-offWhite-600/50 container relative mb-20 mt-20 flex items-center gap-3 rounded-[32px] px-10 pb-10 pt-28">
      <div className="flex-1">
        <div className="font-dmSans">
          <h2 className="text-5xl font-bold">Shared Space</h2>
          <p className="mt-3 text-2xl font-semibold tracking-wider">
            (CO Work Space)
          </p>
        </div>
        <p className="mb-6 mt-6 max-w-[500px] text-sm font-semibold">
          Rent as many desks as you need in a dynamic, shared office space.
          Business Address and storage options included.
        </p>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-2">
            <span className="bg-cusRed-500 block h-3 w-3 rounded-full"></span>
            <p>Reserved permanent workspace as long as you need</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-cusRed-500 block h-3 w-3 rounded-full"></span>
            <p>Book a desk by the hour or day in anyplace</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-cusRed-500 block h-3 w-3 rounded-full"></span>
            <p>A well-prepared place for your service and comfort</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-cusRed-500 block h-3 w-3 rounded-full"></span>
            <p>Hot desk as often as you need in any place</p>
          </li>
        </ul>
        <div>
          <div className="mt-10 flex items-center gap-1 text-sm">
            <p className="flex items-center gap-1 border-t-[.5px] border-[#B49D97] py-3">
              <Image
                src={"/assets/icons/price.svg"}
                width={16}
                height={16}
                alt="icon price"
              />
              Price Starting From:{" "}
            </p>
            <span className="font-semibold">1250 EGP</span>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <BtnPrimary customStyle="min-w-[160px] py-6">Book Now</BtnPrimary>
          <BtnSecondary customStyle="min-w-[160px] py-6">
            Learn More
          </BtnSecondary>
        </div>
      </div>
      <div className="relative h-[500px] flex-1">
        <Image
          src={"/assets/images/spaceBg.png"}
          className="rounded-[24px] object-cover"
          fill
          alt="icon price"
        />
      </div>

      <div className="bg-pri-100 absolute left-1/2 top-0 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-full p-5">
        <SpaceOffice
          isActive={isActiveWork === "Shared Space"}
          icon="/assets/icons/co-working.svg"
          text="Shared Space"
          onClick={setIsActiveWork}
        />
        <SpaceOffice
          icon="/assets/icons/workplace.svg"
          text="Private Offices"
          onClick={setIsActiveWork}
          isActive={isActiveWork === "Private Offices"}
        />
        <SpaceOffice
          icon="/assets/icons/conference.svg"
          text="Meeting Rooms"
          onClick={setIsActiveWork}
          isActive={isActiveWork === "Meeting Rooms"}
        />
        <SpaceOffice
          onClick={setIsActiveWork}
          icon="/assets/icons/video-call.svg"
          text="Virtual Offices"
          isActive={isActiveWork === "Virtual Offices"}
        />
      </div>
    </div>
  );
}

export default SharedSpace;
