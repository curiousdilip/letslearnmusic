"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { metadata } from "./metadata";
import Header from "./components/header";
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Let's Learn Music | Classes By Ramen Sir</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
