import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TrackingScript from "@/components/TrackingScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlacementSprint | Get Placed in 90 Days",
  description: "DSA prep, resume reviews, mock interviews and job tracking — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <TrackingScript />
        <EmailModal />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}