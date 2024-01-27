import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const urbane = localFont({ 
  src: [
    {
      path: "../public/fonts/Urbane-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/Urbane-Medium.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Urbane-DemiBold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/Urbane-Bold.woff2",
      weight: "800",
      style: "normal"
    },
  ]
 });

export const metadata: Metadata = {
  title: "Liva",
  description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
};
// yes, the description is the lorem ipsum that is below the logo in the footer
// i thought it was funny

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbane.className}>{children}</body>
    </html>
  );
}
