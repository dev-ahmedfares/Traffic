import React from "react";

import Image from "next/image";
import { Button } from "./ui/button";

interface ISelectCategoryPricing {
  text: string;
  icon: string;
  customStyle?: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}
function SelectCategoryPricing({
  text,
  icon,
  customStyle,
  isActive,
  onClick,
}: ISelectCategoryPricing) {
  return (
    <Button
      onClick={() => onClick(text)}
      className={`${customStyle} ${
        isActive
          ? "!bg-offWhite-300 !font-semibold text-primary-100"
          : "text-sec-100"
      } group !min-h-[45px] !min-w-[120px] cursor-pointer rounded-[8px] border-b-[.5px] bg-sec-200 py-6 text-[13px] transition-all duration-200 hover:bg-offWhite-300 hover:text-primary-100`}
    >
      <Image
        alt="icon"
        className={`${isActive ? "" : "grayscale"} group-hover:grayscale-0`}
        src={icon}
        width={24}
        height={24}
      />

      <p className={`${isActive ? "" : ""} `}>{text}</p>
    </Button>
  );
}

export default SelectCategoryPricing;
