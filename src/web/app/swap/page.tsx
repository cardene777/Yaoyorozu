// app/swap/page.tsx
"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import SwapContent from "@/components/SwapContent";

export default function Swap() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-between p-24">
        <Header />
        <SwapContent />
      </div>
    </Suspense>
  );
}
