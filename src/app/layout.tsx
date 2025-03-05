import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catch Talent | Creative Agency",
  description:
    "Discover exceptional talent and creative solutions for your projects. We connect visionaries with opportunities.",
  keywords:
    "talent agency, creative agency, casting, production, entertainment, portfolio",
  openGraph: {
    title: "Catch Talent | Creative Agency",
    description:
      "Discover exceptional talent and creative solutions for your projects",
    type: "website",
    locale: "en_US",
    url: "https://catchtalent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catch Talent | Creative Agency",
    description:
      "Discover exceptional talent and creative solutions for your projects",
  },
  robots: "index, follow",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
