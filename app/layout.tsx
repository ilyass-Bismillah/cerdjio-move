import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/ChatRobot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cerdjio Move | Déménagement International France & Europe",
    template: "%s | Cerdjio Move",
  },
  description:
    "Expert en déménagement international et logistique. Liaisons régulières France, Allemagne (Paris-Berlin), Belgique et toute l'Europe. Devis gratuit sous 24h.",
  keywords: [
    "déménagement international",
    "Paris Berlin",
    "transport colis Europe",
    "garde-meuble sécurisé",
    "Cerdjio Move",
    "déménagement France Allemagne",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#12141d]`}
      >
        <Navbar />
        <WhatsAppChat />
        {children}
        <Footer />
      </body>
    </html>
  );
}
