import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhay Jain - Entrepreneur, Investor & Writer",
    template: "%s | Abhay Jain"
  },
  description: "Abhay Jain is a 19-year-old entrepreneur from New Delhi, running Lindy GEO - the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
  keywords: "Abhay Jain, entrepreneur, investor, writer, Lindy GEO, AI, SEO, GEO, Delhi",
  authors: [{ name: "Abhay Jain" }],
  creator: "Abhay Jain",
  metadataBase: new URL("https://abhayjain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhayjain.com",
    siteName: "Abhay Jain",
    title: "Abhay Jain - Entrepreneur, Investor & Writer",
    description: "19-year-old entrepreneur running Lindy GEO, the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@abhayadityajain",
    title: "Abhay Jain - Entrepreneur, Investor & Writer",
    description: "19-year-old entrepreneur running Lindy GEO, the first agency scaling brands by ensuring they rank first in LLM-Generated Answers.",
  },
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
