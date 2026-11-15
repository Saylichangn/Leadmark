import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Leadmark by Sayli Changan",
    template: "%s | Leadmark",
  },
  description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
  applicationName: "Leadmark",
  authors: [{ name: "Sayli Changan" }],
  keywords: ["local business finder", "OpenStreetMap", "lead generation", "business outreach"],
  openGraph: {
    title: "Leadmark by Sayli Changan",
    description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leadmark by Sayli Changan",
    description: "Discover local businesses, analyze their online presence, and track your outreach seamlessly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
