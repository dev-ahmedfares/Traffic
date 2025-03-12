"use client";
import React from "react";

import EmblaCarousel from "./Carousel/EmblaCarousel";
function Articles() {
  return (
    <div className="container py-12 pt-24">
      <div>
        <h4 className="text-3xl font-semibold text-[#172A41]">
          Our Recent Articles
        </h4>
        <div>
          <EmblaCarousel
            slides={[
              "/assets/images/hybrid-1.png",
              "/assets/images/hybrid-2.png",
              "/assets/images/hybrid-3.png",
              "/assets/images/hybrid-2.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
