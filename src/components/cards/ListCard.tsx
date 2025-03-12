import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowForwardOutline } from "react-icons/ti";

function ListCard({
  category,
  isAvailable = false,
  isLike = false,
  isOpen = false,
}: {
  category: string;
  isAvailable?: boolean;
  isLike?: boolean;
  isOpen?: boolean;
}) {
  

  return (
    <div className="rounded-[16px] border-[1px] border-[#EFF0F6] p-2">
      <div className="relative h-[140px] overflow-hidden rounded-[8px]">
        <Image
          className="h-full w-full object-cover"
          src={"/assets/images/list.svg"}
          fill
          alt="list img"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a292199] to-transparent"></div>
        <div className="absolute right-2 top-2 z-40">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white">
              <TiArrowForwardOutline className="text-primary-100" />
            </div>
            {isLike ? (
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white">
                <Image
                  src={"/assets/icons/like.svg"}
                  width={14}
                  height={14}
                  alt="like icon"
                />
              </div>
            ) : (
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white">
                <Image
                  src={"/assets/icons/dislike.svg"}
                  width={14}
                  height={14}
                  alt="like icon"
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={`absolute -rotate-45 px-12 py-1 text-xs ${isAvailable ? "bg-cusGreen-500 -left-11 top-5 text-black" : "bg-cusRed-100 -left-12 top-6 text-white"}`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </div>
      </div>

      <div className="my-3 flex justify-between text-sm">
        <div className="bg-cusGreen-600 rounded-[8px] px-3 py-1 font-semibold text-primary-100">
          {category}
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FFC107]" />
          <div className="flex items-center gap-1">
            <span>4.9</span>
            <span>(162 Review)</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-cusGreen-800 text-lg font-semibold">
          Spot Co-Working Space
        </h3>
        <p className="text-sec-100 mt-2 text-sm">
          Chair location is a website where you can search, find and reserve
          co-working space, including co-working
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-1.5">
        <div className="flex items-center gap-1 text-sm">
          <Image
            src={"/assets/icons/person.svg"}
            alt="person icon"
            width={16}
            height={16}
          />
          <p className="text-cusGray-100">
            <span className="text-primary-100">12</span> Per
          </p>
        </div>
        {isOpen ? (
          <div className="flex items-center gap-1 text-sm">
            <Image
              src={"/assets/icons/file.svg"}
              alt="person icon"
              width={16}
              height={16}
            />
            <p className="text-primary-100">Open</p>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-sm">
            <Image
              src={"/assets/icons/file-not.svg"}
              alt="person icon"
              width={16}
              height={16}
            />
            <p className="text-cusRed-300">Closed</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t py-3">
        <p className="text-sec-100 text-sm">
          Starts From: <span className="font-semibold">20</span>SAR/HOUR
        </p>
        <div className="bg-offWhite-400 flex h-7 w-7 items-center justify-center rounded-full shadow-sm">
          <IoIosArrowForward className="text-xl text-primary-100" />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
