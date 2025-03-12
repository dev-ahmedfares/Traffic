import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import img from "/assets/images/logo-png-1.svg"


function Footer() {
  return (
    <div className="bg-[#F3F5F6] p-6">
      <div className="container grid grid-cols-4 gap-4 border-y border-[rgba(180,157,151,0.43)] py-8">
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-[120px] w-[120px]">
            <Image src={img} fill alt="logo" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaFacebook className="text-3xl text-primary-100" />
              <FaYoutube className="text-3xl text-primary-100" />
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-3xl text-primary-100" />
              <FaXTwitter className="text-3xl text-primary-100" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-100">Main Pages</h4>
          <ul className="mt-4 flex list-inside list-disc flex-col gap-6 text-sm text-sec-100">
            <li className="text-sec-100">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"}>How It Works</Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"}>Membership</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-100">Products</h4>
          <ul className="mt-4 flex flex-col gap-6 text-sm text-sec-100">
            <li className="text-sec-100">
              <Link href={"/"} className="flex items-center gap-2">
                <Image
                  src="/assets/icons/co-working.svg"
                  width={16}
                  alt="icon"
                  height={16}
                />
                <span>Shared Space</span>
              </Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"} className="flex items-center gap-2">
                {" "}
                <Image
                  src="/assets/icons/workplace.svg"
                  width={16}
                  alt="icon"
                  height={16}
                />
                <span>Private Offices</span>
              </Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"} className="flex items-center gap-2">
                <Image
                  src="/assets/icons/conference.svg"
                  width={16}
                  alt="icon"
                  height={16}
                />
                <span>Meeting Rooms</span>
              </Link>
            </li>
            <li className="text-sec-100">
              <Link href={"/"} className="flex items-center gap-2">
                <Image
                  src="/assets/icons/video-call.svg"
                  width={16}
                  alt="icon"
                  height={16}
                />
                <span>Virtual Offices</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-primary-100">
            Download the <br />
            Chair Location App
          </h4>
          <div className="mt-4 flex flex-col items-start gap-6">
            <Button className="flex min-h-[52px] items-center gap-2 bg-cusGreen-100 px-3 py-8 hover:bg-cusGreen-100">
              <Image
                src={"/assets/icons/google.svg"}
                alt="icon"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-start">
                <span className="font-semibold uppercase">get it on</span>
                <span className="text-2xl font-[500]">Google Play</span>
              </div>
            </Button>
            <Button className="flex min-h-[52px] items-center gap-2 bg-cusGreen-100 px-3 py-8 hover:bg-cusGreen-100">
              <Image
                src={"/assets/icons/apple.svg"}
                alt="icon"
                width={40}
                height={40}
              />
              <div className="flex flex-col text-start">
                <span className="font-[500]">Download on the</span>
                <span className="text-2xl font-[500]">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm pt-4 container">
        <div className="flex items-center justify-between gap-10">
          <Link href={"/"} className="text-sec-100 underline">
            Privacy & Policy
          </Link>
          <Link href={"/"} className="text-sec-100 underline">
          Terms & Conditions
          </Link>
        </div>
        <div className="text-sec-100">
        All Copyrights Chair Location | Developed by <Link href={"/"} className="font-semibold">e-RAMO For Digital Solutions</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
