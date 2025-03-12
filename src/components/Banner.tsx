"use client";
import Image from "next/image";
import React, { useState } from "react";
import Workspace from "./shared/Workspace";
import { Button } from "./ui/button";
import Link from "next/link";

function Banner() {
  const [isActiveWork, setIsActiveWork] = useState("");
  return (
    <div className="relative h-[580px] rounded-[20px] container">
      <div className="absolute inset-0 z-30">
        <div className="flex justify-center">
          <h1 className="text-offWhite-100 mt-24 flex flex-col gap-4 text-center font-dmSans text-6xl font-extrabold">
            <span>Office That Fit You</span>
            <span>Creative Way To Work</span>
          </h1>
        </div>
        <div className="absolute -bottom-[60px] left-[50%] translate-x-[-50%]">
          <div className="shadow-[0px_8px_4px_rgba(191, 189, 189, 0.04)] mx-auto max-w-3xl overflow-hidden rounded-[37px] bg-[#fff]">
            <div className="flex flex-col">
              <div className="flex flex-1 items-center justify-center gap-4 px-20 py-8">
                <Workspace
                  isActive={isActiveWork === "Shared Space"}
                  icon="/assets/icons/co-working.svg"
                  text="Shared Space"
                  onClick={setIsActiveWork}
                />
                <Workspace
                  icon="/assets/icons/workplace.svg"
                  text="Private Offices"
                  onClick={setIsActiveWork}
                  isActive={isActiveWork === "Private Offices"}
                />
                <Workspace
                  icon="/assets/icons/conference.svg"
                  text="Meeting Rooms"
                  onClick={setIsActiveWork}
                  isActive={isActiveWork === "Meeting Rooms"}
                />
                <Workspace
                  onClick={setIsActiveWork}
                  icon="/assets/icons/video-call.svg"
                  text="Virtual Offices"
                  isActive={isActiveWork === "Virtual Offices"}
                />
              </div>
              <div className="bg-offWhite-200 flex-1 px-16 py-8">
                <form action="" className="flex w-full items-center gap-8">
                  <div className="relative flex flex-1 items-center gap-2 rounded-[12px] bg-[#fff] px-4">
                    <Image
                      src={"/assets/icons/fi_149852.svg"}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    <div className="absolute right-4 flex items-center gap-2">
                      <Image
                        src={"/assets/icons/icon1.svg"}
                        alt="icon"
                        width={12}
                        height={12}
                      />
                      <Link
                        href="/"
                        className="text-xs font-semibold underline"
                      >
                        Search Nearby
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="w-full py-4 outline-none text-sm"
                      placeholder="Search here..."
                    />
                  </div>
                  <Button className="border-[1px] rounded-[12px] bg-primary-100 h-full min-h-[52px] cursor-pointer px-12 font-semibold transition-all duration-200 hover:border-cusGreen-100 hover:bg-transparent hover:text-cusGreen-100 ring-0">
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/background2.svg"}
        alt="background"
        fill
        className="rounded-[20px] object-cover"
      />
      <div className="absolute inset-0 z-10 rounded-[20px] bg-gradient-to-b from-[#3F3533] to-[#4C3F3B00]"></div>
    </div>
  );
}

export default Banner;
