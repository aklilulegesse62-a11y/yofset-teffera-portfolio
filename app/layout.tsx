import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yofset-teffera.example"),
  title: { default: "Yofset Teffera Tesfaye — Contemporary Ethiopian Artist", template: "%s — Yofset Teffera Tesfaye" },
  description: "The portfolio of Yofset Teffera Tesfaye, a contemporary Ethiopian artist based in Addis Ababa exploring identity, memory, heritage and spirituality.",
  keywords: ["Yofset Teffera Tesfaye", "Ethiopian artist", "contemporary art", "Addis Ababa"],
  openGraph: { type: "website", locale: "en_ET", title: "Yofset Teffera Tesfaye", description: "Contemporary Ethiopian Artist · Addis Ababa, Ethiopia" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
