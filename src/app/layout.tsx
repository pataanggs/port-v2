"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ContactBar from "@/components/contact-bar";
import Preloader from "@/components/preloader";
import { useState } from "react";
import { useEffect } from "react";

// Import Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  // Use a purpose-driven `useEffect` for preloading state
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 5000); // Simulate data preparation or resource loading
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [loading]); // Dependency ensures cleanup and updates occur correctly

  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <title>Portfolio | Home</title>
        <meta
          name="description"
          content="A personal portfolio coded with Next.js, showcasing projects and skills."
        />
      </head>
      <body className="bg-gray-900 text-white">
        {loading ? (
          <Preloader />
        ) : (
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ContactBar />
            <main>{children}</main>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
