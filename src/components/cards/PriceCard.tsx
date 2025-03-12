import React from "react";

import BtnPrice from "../shared/BtnPrice";
import Image from "next/image";

function PriceCard({
  children,
  head,
  subHead,
  desc,
  priceMon,
  isSkew = false,
}: {
  children: React.ReactNode;
  head: string;
  subHead: string;
  desc: string;
  priceMon: string;
  isSkew?: boolean;
}) {
  return (
    <div className="shadow-[0px_2px_12px_rgba(20, 20, 43, 0.08) min-w-[300px] rounded-[16px] border border-[#EFF0F6] p-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-cusGreen-900 flex h-[70px] w-[70px] items-center justify-center rounded-[16px]">
            {isSkew ? (
              <div>
                <Image
                  src="/assets/icons/skew.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-pri-100"></span>
                <span className="flex-1 bg-cusGreen-300"></span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-cusGray-200 [text-shadow:_0_4px_4px_rgba(0_0_0/_0.25)]">
              {head}
            </p>
            <h3 className="text-xl font-semibold">{subHead}</h3>
          </div>
        </div>
        <p className="mb-8 mt-6 text-sm text-cusGray-100">{desc}</p>

        <div className="flex items-end gap-1">
          <p className="text-3xl font-bold">
            SAR<span className="text-5xl">{priceMon} </span>
          </p>
          <p className="text-xl text-cusGray-200">/monthly</p>
        </div>

        <div>
          <h4 className="mt-6 text-xl font-bold">What’s included</h4>
          {children}
        </div>

        <div className="mt-12 flex justify-center">
          <BtnPrice customStyle="!rounded-full !p-6 !text-[18px]">
            Get started
          </BtnPrice>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
