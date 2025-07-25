import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poshak House 05",
  description: "Poshak House - One Place for All Religious Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
