import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sowdarjya Kolay",
  description: "Sowdarjya Kolay Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${jetbrainsMono.variable}`}
    >
      <body className="font-mono">
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
