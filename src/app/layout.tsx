import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "AG Diebra Ecosystem Platform | Agribusiness Marketplace",
  description:
    "Memadukan agribisnis, teknologi, AI, logistik berpendingin, dan hilirisasi perdagangan dalam satu ekosistem terintegrasi untuk transformasi pertanian Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
      <body className="min-h-screen bg-[#101D14] text-white font-body antialiased selection:bg-[#FEBA27] selection:text-[#101D14] flex flex-col">
        {/* Subtle atmospheric grid pattern background from agdiebra.com */}
        <div
          className="fixed inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 106, 58, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Ambient radial glows */}
        <div
          className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(18, 106, 58, 0.16) 0%, rgba(212, 175, 55, 0.06) 45%, transparent 70%)",
          }}
        />

        <Navbar />

        <main className="relative z-10 pt-20 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
