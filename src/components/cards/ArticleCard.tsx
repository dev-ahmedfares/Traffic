import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function ArticleCard({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="w-full">
      <div className="relative h-[260px] overflow-hidden rounded-[12px]">
        <Image src={imgUrl} className="object-cover" fill alt="articles" />
      </div>
      <div className="my-4 flex items-center justify-between text-sm">
        <span className="text-[#B0968F]">Mohamed MO</span>
        <span className="text-[#879AAF]">20 Apr 2024</span>
      </div>
      <div>
        <h4 className="text-2xl font-semibold text-[#101828]">
          Blog Title Here
        </h4>
        <p className="mt-4 line-clamp-2 max-w-[320px] text-sm text-[#4E657F]">
          In the realm of modern business operations, a Point of Sale (POS)
          system serves as more than just a too
        </p>
        <Link
          href={"/"}
          className="mt-4 text-sm flex items-center gap-2 font-semibold text-primary-100 underline"
        >
          <span>Read More</span>
          <span>
            <IoMdArrowForward />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
