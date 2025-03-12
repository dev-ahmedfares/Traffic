"use client";
import React, { useState } from "react";
import SelectCategoryPricing from "./SelectCategoryPricing";
import Image from "next/image";
import Link from "next/link";
import PriceCard from "./cards/PriceCard";
import { RxCheck } from "react-icons/rx";
import PriceCardEntr from "./cards/PriceCardEntr";
import { Switch } from "@/components/ui/switch";

function Pricing() {
  const [isActiveWork, setIsActiveWork] = useState("");
  return (
    <div className="container py-12 pt-24">
      <div className="flex flex-col items-center justify-center">
        <span className="font-dmSans text-lg font-semibold uppercase tracking-wider text-primary-100">
          Pricing
        </span>
        <h2 className="mt-4 font-dmSans text-4xl font-semibold">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 max-w-[450px] text-center font-dmSans text-[#6F6C90]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center space-x-2">
        <p className="text-[#170F49]">Monthly</p>
        <Switch
          id="airplane-mode"
          className="data-[state='checked']:!bg-pri-100 py-3 min-w-[60px]"
        />
        <p className="text-[#170F49]">Annually</p>
      </div>
      <div className="mt-10 flex items-end gap-8">
        <div>
          <div className="!shadow-light-100 rounded-[12px] p-3">
            <h4 className="mb-8 max-w-[240px] text-xl font-semibold">
              Select Form The Upcoming Options.
            </h4>
            <div className="mt-6 flex flex-col gap-4">
              <SelectCategoryPricing
                isActive={isActiveWork === "Shared Space"}
                icon="/assets/icons/co-working.svg"
                text="Shared Space"
                onClick={setIsActiveWork}
              />
              <SelectCategoryPricing
                icon="/assets/icons/workplace.svg"
                text="Private Offices"
                onClick={setIsActiveWork}
                isActive={isActiveWork === "Private Offices"}
              />
              <SelectCategoryPricing
                icon="/assets/icons/conference.svg"
                text="Meeting Rooms"
                onClick={setIsActiveWork}
                isActive={isActiveWork === "Meeting Rooms"}
              />
              <SelectCategoryPricing
                onClick={setIsActiveWork}
                icon="/assets/icons/video-call.svg"
                text="Virtual Offices"
                isActive={isActiveWork === "Virtual Offices"}
              />
            </div>
          </div>

          <div className="mt-10 p-3">
            <h4>Do you face Any Problems ?</h4>
            <p className="mt-2 max-w-[220px] text-sm text-sec-100">
              Contact us Any time Anyplace we will be Happy.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  alt="help icon"
                  src={"/assets/icons/help.svg"}
                  width={16}
                  height={16}
                />
                <p className="text-sm font-semibold">Available 24/7</p>
              </div>
              <Link href={"/"} className="font-semibold underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="grid grid-cols-3 place-items-end gap-4">
            <PriceCard
              head="For individuals"
              subHead="Basics"
              desc="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
          elit."
              priceMon="99"
            >
              <ul className="mt-4 flex flex-col justify-start gap-4">
                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">10 Hours / Week</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">
                      25 Hours in Shared area / Month
                    </span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">Free 1 hour private office</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">Up to 3 team members</span>
                  </p>
                </li>
              </ul>
            </PriceCard>

            <PriceCardEntr
              head="For mid companies"
              subHead="Enterprise"
              desc="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
          elit."
              priceMon="199"
            >
              <ul className="mt-4 flex flex-col justify-start gap-4">
                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2 text-offWhite-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cusRed-500">
                      <RxCheck className="text-lg" />
                    </span>
                    <span className="text-sm">All analytics features</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2 text-offWhite-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cusRed-500">
                      <RxCheck className="text-lg" />
                    </span>
                    <span className="text-sm">
                      Up to (1Million) tracked visits
                    </span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2 text-offWhite-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cusRed-500">
                      <RxCheck className="text-lg" />
                    </span>
                    <span className="text-sm">Premium support</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2 text-offWhite-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cusRed-500">
                      <RxCheck className="text-lg" />
                    </span>
                    <span className="text-sm">Up to 10 team members</span>
                  </p>
                </li>
              </ul>
            </PriceCardEntr>

            <PriceCard
              isSkew
              head="For big companies"
              subHead="Enterprise"
              desc="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
          elit."
              priceMon="399"
            >
              <ul className="mt-4 flex flex-col justify-start gap-4">
                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">All analytics features</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">
                      Up to (5 Million) tracked visits
                    </span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">Dedicated support</span>
                  </p>
                </li>

                <li className="flex items-center gap-1">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                      <RxCheck className="text-lg text-white" />
                    </span>
                    <span className="text-sm">Up to 50 team members</span>
                  </p>
                </li>
              </ul>
            </PriceCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
