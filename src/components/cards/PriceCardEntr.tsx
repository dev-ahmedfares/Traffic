import React from "react";
import BtnPrice from "../shared/BtnPrice";
import { WiStars } from "react-icons/wi";

function PriceCardEntr({
  children,
  head,
  subHead,
  desc,
  priceMon,
  
}: {
  children: React.ReactNode;
  head: string;
  subHead: string;
  desc: string;
  priceMon: string;
 
}) {
  return (
    <div className="shadow-[0px_2px_12px_rgba(20, 20, 43, 0.08) min-w-[300px] rounded-[16px] bg-primary-100 p-6">
      <div>
        <div className="text-white bg-white/20 mb-6 rounded-[10px] py-2 font-dmSans text-sm items-center gap-2 flex justify-center">
            <WiStars className="text-lg"/>
            <p>Popular Plan (Best Sales)</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-cusGreen-900 flex h-[70px] w-[70px] items-center justify-center rounded-[16px]">
            <div className="flex h-10 w-10 overflow-hidden ">
              <span className="flex-1 bg-pri-100"></span>
              <div className="flex-1 flex flex-col ">
                <span className="bg-cusGreen-400 flex-1"></span>
                <span className="bg-cusGreen-300 flex-1"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-dmSans">
            <p className="text-lg text-[#D8D2C6] ">
              {head}
            </p>
            <h3 className="text-xl text-offWhite-500 font-semibold">{subHead}</h3>
          </div>
        </div>
        <p className="mb-8 mt-6 text-sm text-[#D8D2C6]">{desc}</p>

        <div className="flex items-end gap-1">
          <p className="text-3xl text-offWhite-500 font-bold">
            SAR<span className="text-5xl">{priceMon} </span>
          </p>
          <p className="text-xl text-[#D8D2C6]">/monthly</p>
        </div>

        <div>
          <h4 className="mt-6 text-xl font-bold text-offWhite-500">What’s included</h4>
          {children}
        </div>

        <div className="mt-12 flex justify-center">
          <BtnPrice customStyle="!rounded-full !p-6 !text-[18px] hover:!border-offWhite-500 hover:!bg-transparent hover:!text-offWhite-500 !bg-offWhite-500 !text-primary-100">
            Get started
          </BtnPrice>
        </div>
      </div>
    </div>
  );
}

export default PriceCardEntr;
