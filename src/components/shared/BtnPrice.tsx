import React from "react";
import { Button } from "../ui/button";

function BtnPrice({
  children,
  customStyle,
 
}: {
  children: React.ReactNode;
  customStyle?: string;
  
}) {
  return (
    <Button
      className={`${customStyle} cursor-pointer rounded-[12px] border-[1px] bg-primary-100 text-[13px] font-semibold transition-all duration-200 hover:border-primary-100 hover:bg-transparent hover:text-primary-100`}
    >
      {children}
    </Button>
  );
}

export default BtnPrice;
