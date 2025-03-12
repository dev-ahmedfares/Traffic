"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import BtnPrimary from "../shared/BtnPrimary";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  city: z.string(),
  message: z.string(),
});

function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      fullName:"",
      email:"",
      phone:"",
      city:"",
      message:""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-2xl px-4">
      <h4 className="text-xl font-semibold">
        Please fill the upcoming fields{" "}
        <span className="text-[#CC4F4F]">*</span>
      </h4>

      <div className="mt-8">
        {" "}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem >
                  <FormControl>
                    <Input
                      placeholder="Full Name..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] border-none text-sm focus:!ring-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="E-mail..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] border-none text-sm focus:!ring-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                    type="number"
                      placeholder="Phone Number..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] border-none text-sm focus:!ring-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] border-none text-sm focus:!ring-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message Text..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] border-none text-sm focus:!ring-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center ">
              <BtnPrimary customStyle="min-h-[50px] mt-8 !text-lg px-20">
                Send
              </BtnPrimary>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactUsForm;
