import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuth";
import { WagmiProvider } from "@/components/WagmiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaoyorozu",
  description: "Yaoyorozu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg`}>
        <NextAuthProvider>
          <WagmiProvider>
            <NextAuthProvider>
              {children}
            </NextAuthProvider>
          </WagmiProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
