import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Sovix Lab",
   icons: {
    icon: "/favicon.svg",
  },
};

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains", 
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
