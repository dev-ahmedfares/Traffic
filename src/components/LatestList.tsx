import React from "react";
import ListCard from "./cards/ListCard";

function LatestList() {
  return (
    <div className="py-12 container">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-dm text-5xl font-extrabold">Latest Listings</h2>
        <p className="mt-3 text-xl">Check our latest listings</p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        <ListCard category="Shared Area" isAvailable isLike isOpen/>
        <ListCard category="Meeting Room" />
        <ListCard category="Private Office" isAvailable isLike/>
        <ListCard category="Meeting" isAvailable isLike/>
      </div>
    </div>
  );
}

export default LatestList;
