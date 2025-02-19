import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "YT_PLAYGROUND",
  description: "A playground for YT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className='relative'
      >
        <Header />
        <div className='container'>
            <div className='inner'>
                {children}
            </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
