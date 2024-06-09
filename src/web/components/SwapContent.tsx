// components/SwapContent.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SwapContent() {
  const searchParams = useSearchParams();
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const addr = searchParams.get("address");
    setAddress(addr);
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-col items-center justify-between pt-16">
        <p className="text-2xl font-bold text-headline">Swap</p>
      </div>
      <div className="flex flex-col items-center justify-between p-6">
        <p className="text-xl font-semibold text-headline">Address</p>
        <p className="text-text mt-4">{address || "Loading..."}</p>
      </div>
    </>
  );
}
