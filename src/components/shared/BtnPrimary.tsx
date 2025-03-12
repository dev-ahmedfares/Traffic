import React from "react";
import { Button } from "../ui/button";

function BtnPrimary({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle?: string;
}) {
  return (
    <Button className={`${customStyle} rounded-[12px] bg-primary-100 transition-all duration-200 border-[1px] hover:border-primary-100 hover:bg-transparent hover:text-primary-100 font-semibold cursor-pointer text-[13px]`}>
      {children}
    </Button>
  );
}

export default BtnPrimary;
