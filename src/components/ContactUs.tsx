import Image from "next/image";
import React from "react";
import ContactUsForm from "./forms/ContactUsForm";

function ContactUs() {
  return (
    <div className="pb-12 mt-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-fireSans text-5xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-xl tracking-wide">We Are Here For Your Help</p>
      </div>
      <div className="mt-10 flex items-start">
        <div className="flex-1">
          <div className="relative">
            <div className="relative h-[560px]">
              <Image
                src={"/assets/images/contact.svg"}
                alt="contact"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[28%] left-[42%] h-[130px] w-[130px] rounded-full bg-white/50 backdrop-blur-[18px]"></div>
          </div>
        </div>
        <div className="flex-1">
            <ContactUsForm/>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
