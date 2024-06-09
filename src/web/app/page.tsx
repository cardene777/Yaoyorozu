"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const login = () => {
    router.push("/auth");
  };
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <Header />
      <div className="flex flex-col items-center justify-between pt-16">
        <p className="text-2xl font-bold text-headline">Yaoyorozu</p>
      </div>
      <div className="flex flex-col items-center justify-between p-6">
        <Button
          onClick={login}
          size="md"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
