import React from "react";
import TitleBadge from "./shared/TitleBadge";
import Image from "next/image";

function Titles() {
  return (
    <div className="relative py-12 pb-8">
      <div className="absolute inset-0 w-full h-[600px] -z-10">
        <Image src={"/assets/images/background-2.svg"} className="object-cover" fill alt="bg" />
      </div>
      <div className="container flex items-center">
        <div className="flex-1 text-[#F3F5F6]">
          <h3 className="text-5xl font-semibold">
            Chair Location Is <br /> Trusted By The World’s <br /> Largest
            Companies.
          </h3>
          <p className="mt-6 max-w-[320px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4">
            <TitleBadge iconUrl="/assets/icons/almarai.svg" />
            <TitleBadge iconUrl="/assets/icons/bank.svg" />
          </div>
          <div className="flex items-center gap-4">
            <TitleBadge iconUrl="/assets/icons/visa.svg" />
            <TitleBadge iconUrl="/assets/icons/slack.svg" />
          </div>
          <div className="flex items-center gap-4">
            <TitleBadge iconUrl="/assets/icons/xbox.svg" />
            <TitleBadge iconUrl="/assets/icons/link.svg" />
          </div>
          <div className="flex items-center gap-4">
            <TitleBadge iconUrl="/assets/icons/cisco.svg" />
            <TitleBadge iconUrl="/assets/icons/elballd.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titles;
