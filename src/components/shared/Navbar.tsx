"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import { FiUser } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LiaFlagUsaSolid } from "react-icons/lia";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "How it Works", path: "/howItWorks" },
  { name: "Contact Us", path: "/contactUs" },
  { name: "Membership", path: "/membership" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex w-full items-center py-4 container">
      <Link href={"/"} className="relative">
        <Image
          src={"/assets/images/Logo-png-1.svg"}
          alt="Titans task"
          width={60}
          height={10}
          // layout="intrinsic"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 items-center justify-center gap-6">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={idx}
              className={`${
                isActive
                  ? "font-extrabold text-primary-100"
                  : "text-sec-100"
              } hover:text-primary-100`}
              href={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div>
          <Select defaultValue={"arabic"}>
            <SelectTrigger className="w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="arabic">
                <div className="flex items-center gap-1">
                  <span className="font-cairo font-[500]">العربية</span>
                  <Image
                    width={18}
                    height={18}
                    src={"/assets/icons/saudi.svg"}
                    alt="flag"
                  />
                </div>
              </SelectItem>
              <SelectItem value="english">
                <div className="flex items-center gap-1">
                  <span>English</span>
                  <LiaFlagUsaSolid size={18} />
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <BtnPrimary>Create Account</BtnPrimary>
          <BtnSecondary>
            <FiUser />
            <p>Login</p>
          </BtnSecondary>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
