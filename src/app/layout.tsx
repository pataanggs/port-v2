"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ContactBar from "@/components/contact-bar";
import Preloader from "@/components/preloader";
import { useState, useEffect } from "react";

const MontserratRegular = Montserrat({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--pregular",
});

const MontserratBlack = Montserrat({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
  variable: "--pblack",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out
      setTimeout(() => {
        setLoading(false); // Hide preloader completely
      }, 1500); // Match fade-out duration (1.5 seconds)
    }, 3000); // Duration for the preloader display
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${MontserratRegular.variable} ${MontserratBlack.variable}`}
    >
      <head>
        <title>Portfolio | Home</title>
        <meta
          name="Portfolio"
          content="My personal portfolio, coded by Pataangg using Nexts."
        />
      </head>
      <body>
        {loading ? (
          <div
            className={`fixed inset-0 z-50 transition-opacity duration-[1500ms] ${
              fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Preloader />
          </div>
        ) : (
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ContactBar />
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
