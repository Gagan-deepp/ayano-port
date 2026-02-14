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
  metadataBase: new URL("https://ayano.port"), // Replace with actual domain when ready
  title: {
    default: "Ayano | Developer & Designer",
    template: "%s | Ayano",
  },
  description: "A digital archive focusing on architectural logic and the hidden integrity of systems.",
  keywords: ["DevOps", "Architecture", "Systems", "Minimalist Design", "Invisible Integrity"],
  authors: [{ name: "Ayano" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayano.port",
    title: "Ayano | Developer & Designer",
    description: "A digital archive focusing on architectural logic and systems.",
    siteName: "Ayano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayano | Developer & Designer",
    description: "A digital archive focusing on architectural logic.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
