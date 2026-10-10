import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Marquee from "@/components/common/Marquee";
import Footer from "@/components/common/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
})

export const metadata: Metadata = {
  title: "বাজার দর — আজকের দাঁড়ির দাম",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের দাম, বাজারভিত্তিক তুলনা ও দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" data-scroll-behavior="smooth" data-theme="light">
      <body className={`${hindSiliguri.variable} min-h-full flex flex-col bg-base-200 text-base-content`}>
        <Header />
        <Marquee />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}