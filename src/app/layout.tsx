import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Arco = localFont({
  src: "../../public/fonts/arco/ARCO.ttf",
  variable: "--font-arco",
});

const GE_SS_Two = localFont({
  src: "../../public/fonts/GE_SS_Two/GE SS Two Medium.woff",
  variable: "--font-geSS",
});

const PPMon = localFont({
  src: "../../public/fonts/PPMonumentExtendedVariable/PPMonumentExtended-Variable.woff",
  variable: "--font-PPMon",
});

export const metadata: Metadata = {
  title: "Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Arco.variable} ${GE_SS_Two.variable} ${PPMon.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
