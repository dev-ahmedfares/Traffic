import Image from "next/image";
import React from "react";

function TitleBadge({ iconUrl }: { iconUrl: string }) {
  return (
    <div className="flex items-center justify-center py-2 rounded-[24px] px-12 border border-[#97A986] bg-white/10">
      <div className="relative h-[100px] w-[140px]">
        <Image src={iconUrl} alt="icon" fill className="object-contain" />
      </div>
    </div>
  );
}

export default TitleBadge;
