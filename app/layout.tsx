import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Analytics from "@/components/Analytics/google-analytics";
import { Toaster } from "@/components/ui/sonner";

// Primary font - Clean, modern, slightly warm
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Secondary font - Geometric, techy feel for headings
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

// Accent font - Elegant serif for contrast and sophistication
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayano | Developer & Designer",
  description: "Creative developer crafting digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${cormorant.variable} font-sans antialiased bg-[#1a1a1a] text-foreground no-scrollbar`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
        <Toaster richColors position="top-center" />
      </body>

      <Analytics />
    </html>
  );
}
