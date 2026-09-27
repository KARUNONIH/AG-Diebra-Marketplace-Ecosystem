import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "AG Diebra Ecosystem Platform | Program Kolaborasi Agribisnis Terpadu",
  description:
    "Platform fasilitasi dan marketplace kemitraan agribisnis: menghubungkan offtaker industri, petani produsen, teknologi IoT, dan logistik cold chain melalui kurasi berbasis Dual-Consent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-body antialiased selection:bg-[#FEBA27] selection:text-[#101D14] flex flex-col bg-[#F8FAF9] text-slate-900 overflow-x-hidden">
        <Navbar />

        <main className="relative pt-20 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
