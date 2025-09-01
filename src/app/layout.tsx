import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-oswald'
});

export const metadata: Metadata = {
  title: "GoViral - Transform Your Content",
  description: "Transform your content into viral sensations. We help brands and creators amplify their reach and engagement.",
  keywords: "viral marketing, content creation, social media, digital marketing",
  authors: [{ name: "GoViral Team" }],
  openGraph: {
    title: "GoViral - Transform Your Content",
    description: "Transform your content into viral sensations",
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
        className={`antialiased font-helvetica ${oswald.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
