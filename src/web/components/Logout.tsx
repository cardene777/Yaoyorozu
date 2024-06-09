import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Logout() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <Button
          onClick={() => signOut()}
          className="text-lg"
          size="md"
        >
          Logout
        </Button>
      </div>
    );
  }
  return null;
}
