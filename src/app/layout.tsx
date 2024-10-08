import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/component/sideBar/SideBar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuad Talukder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={openSans.className}>
        <div className="md:min-w-[1280px] lg:max-w-[1980px]">
          <SideBar>{children}</SideBar>
        </div>
      </body>
    </html>
  );
}
