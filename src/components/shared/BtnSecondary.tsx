import React from "react";
import { Button } from "../ui/button";

function BtnSecondary({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle?: string;
}) {
  return (
    <Button
      className={`${customStyle} rounded-[12px] hover:text-offWhite-500 border-[1px] cursor-pointer border-primary-100 bg-transparent text-[13px] font-semibold text-primary-100 transition-all duration-200 hover:bg-primary-100`}
    >
      {children}
    </Button>
  );
}

export default BtnSecondary;
