import Image from "next/image";
import React from "react";

function Hybrid() {
  return (
    <div className="pb-12 container">
      <div className="flex flex-col justify-center text-center">
        <h2 className="font-dmSans text-4xl">
          Hybrid working can work for you
        </h2>
        <p className="text-sec-1 mx-auto mt-4 max-w-5xl">
          Hybrid working offers you the freedom to work closer to clients,
          colleagues or home. It's also greener and more cost-effective. With
          over 4,000 locations globally, nobody is better placed than Regus to
          help you make the best of it.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-6 justify-center">
        <Image
          src={"/assets/images/hybrid-1.png"}
          width={340}
          height={340}
          alt={"background hybrid"}
          className="rounded-[27px]"
        />
        <Image
          src={"/assets/images/hybrid-2.png"}
          width={340}
          height={340}
          alt={"background hybrid"}
          className="rounded-[27px]"
        />
        <Image
          src={"/assets/images/hybrid-3.png"}
          width={340}
          height={340}
          alt={"background hybrid"}
          className="rounded-[27px]"
        />
      </div>
    </div>
  );
}

export default Hybrid;
