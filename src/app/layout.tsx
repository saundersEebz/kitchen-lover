import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Providers from "@/store/context/Providers";
import { MenuWrapper } from "@/components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitchen Lover",
  description: "Conceived in the kitchen",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`h-screen w-screen ${geistSans.variable} ${geistMono.variable} ${oswald.className} flex flex-col antialiased`}>
          <MenuWrapper />
          {children}
        </body>
      </Providers>
    </html>
  );
}
