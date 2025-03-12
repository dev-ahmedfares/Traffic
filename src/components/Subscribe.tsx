"use client";
import React from "react";
import BtnPrimary from "./shared/BtnPrimary";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string(),
});

function Subscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="container relative py-8 pt-16">
      <div className="bg-[rgba(231,202,170,0.5)] top-20 rotate-[35deg] rounded-[11px] absolute w-[60px] flex justify-center items-center h-[60px]">
        <Image
          alt="icon"
          src={"/assets/icons/chair.svg"}
          height={40}
          width={40}
        />
      </div>
      <div className="bg-[rgba(231,202,170,0.5)] top-20  rotate-[-25deg] right-0 rounded-[11px] absolute w-[60px] flex justify-center items-center h-[60px]">
        <Image
          alt="icon"
          src={"/assets/icons/meeting-2.svg"}
          height={40}
          width={40}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#ffffff00] to-[#ffffff]"></div>
      <div className="bg-mask absolute inset-0 -z-20 bg-cover"></div>
      <div className="text-center">
        <h2 className="font-fireSans text-4xl font-semibold">
          Subscribe To Our Newsletter
        </h2>
        <p className="mx-auto mt-2 max-w-[300px] text-sm text-sec-100">
          Every couple of weeks we send out an update and a few things that have
          inspired us.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full max-w-xl items-center gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Write Your Email Here..."
                      className="!shadow-light-100 min-h-[52px] flex-1 !rounded-[8px] !border-[#E7CAAA] !bg-[#F9F8F6] text-sm !text-sec-100 focus:!ring-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <BtnPrimary customStyle="min-h-[54px] !text-lg px-8">
                Subscribe
              </BtnPrimary>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Subscribe;
