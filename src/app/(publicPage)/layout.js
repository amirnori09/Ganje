import "../../app/globals.css";
import { dana } from "@/utils/local_font";
import LayoutPublic from "../components/layouts/Layout";
import React from "react";
import { Providers } from "@/lib/Provider";
export const metadata = {
  manifest: "/manifest.json",
  title: "Ganje",
  description: "ganje arabic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className={`${dana.variable} font-sans bg-[#F8F9Fa]`}>
        <Providers>

          <LayoutPublic>{children}</LayoutPublic>
        </Providers>
      </body>
    </html>
  );
}
