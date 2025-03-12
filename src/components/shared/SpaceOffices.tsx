import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ISpaceOffice {
  text: string;
  icon: string;
  iconTwo?: string;
  isFirst?: boolean;
  customStyle?: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}
function SpaceOffice({
  text,
  icon,
  customStyle,
  isActive,
  onClick,
  iconTwo = "",
  isFirst = false,
}: ISpaceOffice) {
  return (
    <Button
      onClick={() => onClick(text)}
      className={`${customStyle} ${
        isActive
          ? "!bg-offWhite-500 font-semibold text-primary-100"
          : "text-offWhite-500"
      } group !min-w-[160px] cursor-pointer rounded-full bg-cusGreen-200/10 text-[13px] transition-all duration-200 hover:bg-sec-400 hover:font-semibold hover:text-primary-100`}
    >
      <div>
        <Image
          alt="icon"
          className={`${isActive ? "" : "group-hover:hidden"} ${isFirst && !isActive ? "filter-custom" : ""} `}
          src={!isActive && iconTwo ? iconTwo : icon}
          width={24}
          height={24}
        />
        {iconTwo && !isActive && (
          <Image
            alt="icon"
            className={`hidden group-hover:!block`}
            src={icon}
            width={24}
            height={24}
          />
        )}
      </div>

      <p>{text}</p>
    </Button>
  );
}

export default SpaceOffice;
