import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Solovic",
  description: "Portfolio website",
  icons: "../favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar></Navbar>

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
