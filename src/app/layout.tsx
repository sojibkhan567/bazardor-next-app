import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

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
    <html lang="bn">
      <body className={`${hindSiliguri.variable} min-h-full flex flex-col bg-base-200 text-base-content`}>
        <Header />
        <Marquee />
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
            {children}
          </div>
          </main>
      </body>
    </html>
  );
}