import React from "react";
import BtnPrimary from "./shared/BtnPrimary";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

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
    <div>
      <div>
        {" "}
        <h2 className="font-fireSans text-4xl font-semibold">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-sm text-sec-100">
          Every couple of weeks we send out an update and a few things that have
          inspired us.
        </p>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex items-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Write Your Email Here..."
                      className="!shadow-light-100 min-h-[52px] !rounded-[8px] !border-[#E7CAAA] !bg-[#F9F8F6] text-sm !text-sec-100 focus:!ring-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <BtnPrimary customStyle="min-h-[50px] mt-8 !text-lg px-20">
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
