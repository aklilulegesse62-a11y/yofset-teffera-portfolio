import Link from "next/link";
import { siteContent } from "../data";

export function Footer() {
  return <footer className="site-footer">
    <div className="wrap footer-grid">
      <div className="footer-name">Yofset<br />Teffera</div>
      <div className="footer-links"><Link href="/works">Selected Works</Link><Link href="/about">About</Link><Link href="/exhibitions">Exhibitions</Link><Link href="/cv">CV</Link></div>
      <div className="footer-links">
        <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
        <span>{siteContent.location}</span>
        <a href={siteContent.social.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={siteContent.social.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
      </div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Yofset Teffera Tesfaye</span><span>Art, memory &amp; contemporary Ethiopian stories</span></div>
  </footer>;
}
