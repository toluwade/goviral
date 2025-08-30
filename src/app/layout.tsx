import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App - Modern Web Application",
  description: "A clean Next.js application with TypeScript and Tailwind CSS",
  keywords: "Next.js, React, TypeScript, Tailwind CSS",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your App",
    description: "A modern web application",
    type: "website",
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
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
