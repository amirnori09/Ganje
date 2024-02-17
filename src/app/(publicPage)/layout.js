import "../../app/globals.css";
import { dana } from "@/utils/local_font";
import LayoutPublic from "../components/layouts/Layout";
import React from 'react';

export const metadata = {
  title: "گنجه",
  description: "ganje arabic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" data-theme="light" suppressHydrationWarning>
      
      <body className={`${dana.variable} font-sans bg-[#F8F9Fa] `}>
          <LayoutPublic>
            {children}
            </LayoutPublic>
      </body>
    </html>
  );
}
