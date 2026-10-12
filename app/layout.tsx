import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/FooterRedesign";
import Header from "@/components/HeaderRedesign";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/ThemeProvider";

const siteUrl = "https://skolay.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sowdarjya Kolay — AI Engineer & Full-Stack Developer",
    template: "%s | Sowdarjya Kolay",
  },
  description:
    "Portfolio of Sowdarjya Kolay — AI Engineer & Full-Stack Software Developer specialising in Next.js, FastAPI, and intelligent systems. Based in Kolkata, India.",
  keywords: [
    "Sowdarjya Kolay",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "FastAPI",
    "Machine Learning",
    "Portfolio",
    "Kolkata",
    "India",
    "React Developer",
    "TypeScript",
    "LangChain",
    "DevOps",
  ],
  authors: [{ name: "Sowdarjya Kolay", url: siteUrl }],
  creator: "Sowdarjya Kolay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sowdarjya Kolay — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Sowdarjya Kolay — AI Engineer & Full-Stack SDE specialising in Next.js, FastAPI, and intelligent systems.",
    siteName: "Sowdarjya Kolay Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sowdarjya Kolay — AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sowdarjya Kolay — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Sowdarjya Kolay — AI Engineer & Full-Stack SDE specialising in Next.js, FastAPI, and intelligent systems.",
    creator: "@_Kolayyyyyyy__",
    images: ["/og-image.png"],
  },
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
      className=""
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider>
            <ScrollProgressBar />
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
