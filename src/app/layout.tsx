import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mehedi Hasan | Portfolio",
  description: "Personal portfolio of Mehedi Hasan, showcasing projects, skills, and experience.",
  openGraph: {
    title: "Mehedi Hasan | Portfolio",
    description: "Personal portfolio of Mehedi Hasan",
    url: "https://mister-mehedi.vercel.app/",
    siteName: "Mehedi Hasan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-gray-100">
        <Providers>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
