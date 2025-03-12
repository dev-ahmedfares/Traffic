import Image from "next/image";
import React from "react";
import BtnPrimary from "./shared/BtnPrimary";
import BtnSecondary from "./shared/BtnSecondary";

function AboutSec() {
  return (
    <div className="pt-28 container">
      <div className="flex w-full ">
        <div className="flex-1">
          <h2 className="font-dmSans text-2xl font-bold">About Chair Location</h2>
          <p className="text-sec-100 mt-2 max-w-[500px]">
            “Chair location” is a website where you can search, find and reserve
            co-working space, including co-working offices, private offices,
            meeting rooms, and virtual offices near you. It shows the features
            and amenities this space can provide. Professionals and businesses
            can then compare all available co-working spaces to find one with
            the services and facilities that best suit their requirements.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold">Why Chair Location</h3>
            <ul className="mt-3 flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#E7CAAA]">
                  <Image
                    src="/assets/icons/icon-a-1.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-sm">More Than (4652) Location</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#E7CAAA]">
                  <Image
                    src="/assets/icons/icon-a-2.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-sm">
                  We Offer All Amenities in Our All Location
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#E7CAAA]">
                  <Image
                    src="/assets/icons/icon-a-3.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-sm">All Kinda Of Supports 24/7</p>
              </li>
            </ul>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <BtnPrimary customStyle="min-w-[160px] py-6">
              View Products
            </BtnPrimary>
            <BtnSecondary customStyle="min-w-[160px] py-6">
              Book Now
            </BtnSecondary>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-[160px] relative rounded-[12px] overflow-hidden">
            <Image
              fill
              src="/assets/images/Group-1.svg"
              alt="about-background"
              className="object-cover"
            />
          </div>
          <div className="h-[160px] relative rounded-[12px] overflow-hidden">
            <Image
              fill
              src="/assets/images/Group-2.svg"
              alt="about-background"
              className="object-cover"
            />
          </div>
          <div className="h-[160px] relative rounded-[12px] overflow-hidden">
            <Image
              fill
              src="/assets/images/Group-3.svg"
              alt="about-background"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
