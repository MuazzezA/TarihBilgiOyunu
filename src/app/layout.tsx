import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500" ,"700"], // normal ve bold
});

export const metadata: Metadata = {
  title: "Tarih Bilgi Oyunu",
  description: "Türkiye Cumhuriyeti tarihi interaktif bilgi oyunu",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="tr">
      <body className={outfit.className}>
      {children}
      </body>
      </html>
  );
}
