"use client";
import "./style/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
