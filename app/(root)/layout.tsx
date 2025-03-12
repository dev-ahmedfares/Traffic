import Navbar from "@/components/shared/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
}

export default layout;
