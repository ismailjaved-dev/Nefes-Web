import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "../components/sections/Navbar";
import Footer from "@/components/sections/footer";
import AdminNav from "@/components/sections/adminNav";
const inter = Bebas_Neue({ subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "Nefes | Experience the ultimate hookah",
  description: "Experience the ultimate hookah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AdminNav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
