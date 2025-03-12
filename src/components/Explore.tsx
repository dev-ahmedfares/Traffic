import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Explore() {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 flex">
        <div className="bg-offWhite-600 flex-1"></div>
        <div className="flex-1 bg-white"></div>
      </div>

      <div className="bg-offWhite-600 container relative flex items-center gap-8 rounded-br-[32px] rounded-tr-[32px] pt-12">
        <div className="absolute -top-[20px] bg-pri-100 left-1/2 -z-10 h-20 w-[340px] -translate-x-1/2 rounded-[12px]">
         
        </div>
        <div className="relative">
          <Image
            src={"/assets/icons/iPhonePro.svg"}
            alt="iphone"
            width={400}
            height={100}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="font-dmSans text-[40px] font-semibold">
            Explore The Chair Location App
          </h3>
          <p className="text-sec-100 mt-4 max-w-[550px] text-lg">
            Hybrid working offers you the freedom to work closer to clients,
            colleagues or home.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Button className="bg-cusGreen-100 hover:bg-cusGreen-100 flex min-h-[52px] items-center gap-2 px-3 py-8">
              <Image
                src={"/assets/icons/google.svg"}
                alt="icon"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-start">
                <span className="font-semibold uppercase">get it on</span>
                <span className="text-2xl font-[500]">Google Play</span>
              </div>
            </Button>
            <Button className="bg-cusGreen-100 hover:bg-cusGreen-100 flex min-h-[52px] items-center gap-2 px-3 py-8">
              <Image
                src={"/assets/icons/apple.svg"}
                alt="icon"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-start">
                <span className="font-[500]">Download on the</span>
                <span className="text-2xl font-[500]">Google Play</span>
              </div>
            </Button>
          </div>
        </div>

        <div className="absolute right-0 top-10">
          <Image
            alt="hand img"
            src={"/assets/icons/hand.svg"}
            width={200}
            height={160}
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
