import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ISpaceOffice {
  text: string;
  icon: string;
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
}: ISpaceOffice) {
  return (
    <Button
      onClick={() => onClick(text)}
      className={`${customStyle} ${
        isActive
          ? "!bg-offWhite-500 font-semibold text-primary-100"
          : "text-offWhite-500"
      } bg-cusGreen-200/10 hover:bg-sec-400 !min-w-[160px] cursor-pointer rounded-full text-[13px] transition-all duration-200 hover:font-semibold hover:text-primary-100`}
    >
      <div>
        <Image
          alt="icon"
          className={`${isActive ? "" : "opacity-80 grayscale"} `}
          src={icon}
          width={24}
          height={24}
        />
      </div>

      <p>{text}</p>
    </Button>
  );
}

export default SpaceOffice;
