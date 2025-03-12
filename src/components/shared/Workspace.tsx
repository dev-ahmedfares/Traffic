import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface IWorkspace {
  text: string;
  icon: string;
  customStyle?: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}
function Workspace({ text, icon, customStyle, isActive, onClick }: IWorkspace) {
  return (
    <Button
      onClick={() => onClick(text)}
      className={`${customStyle} ${
        isActive
          ? "!bg-sec-400   !font-semibold border-b-[.5px] border-primary-100"
          : "text-sec-100"
      } bg-sec-200 hover:text-[#1A2921] hover:bg-sec-400 cursor-pointer rounded-[8px] border-b-[.5px] !min-w-[140px] text-[13px]  transition-all duration-200 hover:border-primary-100`}
    >
      <Image
        alt="icon"
        className={`${isActive ? "" : "grayscale"}`}
        src={icon}
        width={24}
        height={24}
      />

      <p
        className={`${isActive ? "text-cusGreen-100 " : ""}  `}
      >
        {text}
      </p>
    </Button>
  );
}

export default Workspace;
