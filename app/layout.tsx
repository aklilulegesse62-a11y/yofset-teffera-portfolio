import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://aklilulegesse62-a11y.github.io/yofset-teffera-portfolio/"),
  title: { default: "Yofset Teffera Tesfaye — Contemporary Ethiopian Artist", template: "%s — Yofset Teffera Tesfaye" },
  description: "The portfolio of Yofset Teffera Tesfaye, a contemporary Ethiopian artist based in Addis Ababa exploring identity, memory, heritage and spirituality.",
  keywords: ["Yofset Teffera Tesfaye", "Ethiopian artist", "contemporary art", "Addis Ababa"],
  openGraph: { type: "website", locale: "en_ET", title: "Yofset Teffera Tesfaye", description: "Contemporary Ethiopian Artist · Addis Ababa, Ethiopia" },
  icons: { icon: `${publicBasePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><div className="art-atmosphere" aria-hidden="true"><span className="art-brush art-brush-rust"/><span className="art-brush art-brush-gold"/><span className="art-arc art-arc-one"/><span className="art-arc art-arc-two"/><span className="art-dots art-dots-one"/><span className="art-dots art-dots-two"/><span className="art-flow art-flow-one"/><span className="art-flow art-flow-two"/><span className="art-orbit"/><span className="art-symbol art-eye"><i/></span><span className="art-symbol art-sun"/><span className="art-symbol art-moon"/><span className="art-symbol art-flower"/><span className="art-symbol art-diamond"/><span className="art-symbol art-stairs"/></div><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
