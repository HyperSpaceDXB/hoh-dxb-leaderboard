import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PPMon = localFont({
  src: "../../public/fonts/PPMonumentExtendedVariable/PPMonumentExtended-Variable.woff",
  variable: "--font-PPMon",
});

const GE_SS_Two = localFont({
  src: "../../public/fonts/GE_SS_Two/GE SS Two Medium.woff",
  variable: "--font-geSS",
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
      <body className={`${PPMon.variable} ${GE_SS_Two.variable}`}>
        {children}
      </body>
    </html>
  );
}
