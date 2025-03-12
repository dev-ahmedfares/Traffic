import React from "react";
import BtnPrimary from "./shared/BtnPrimary";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

function Subscribe() {
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


                </FormItem>
              )}
            />
          
           
            <div className="flex justify-center ">
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
