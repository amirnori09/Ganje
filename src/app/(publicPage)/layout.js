import "../../app/globals.css";
import { dana } from '@/utils/local_font'
import Layoutp from "../components/layouts/Layout";

export const metadata = {
  title: "گنجه",
  description: "ganje arabic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" data-theme="light">
       
      <body className={`${dana.variable} font-sans bg-[#F8F9Fa] `}>
      <Layoutp>
        {children}
      </Layoutp>
      </body>
    </html>
  );
}
