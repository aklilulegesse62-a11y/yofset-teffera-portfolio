import type { Metadata } from "next";
import { siteContent } from "../data";

export const metadata: Metadata = { title: "Contact" };

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.7" r="1" className="social-icon-fill"/></svg>;
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 3v11.1a4.8 4.8 0 1 1-4.1-4.75v3.1a1.85 1.85 0 1 0 1.05 1.67V3h3.05c.28 2.15 1.5 3.48 3.8 3.82v3.05a7.5 7.5 0 0 1-3.8-1.32"/></svg>;
}

function TelegramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4 3.8 10.7c-1.17.47-1.16 1.12-.21 1.41l4.42 1.38 1.69 5.18c.2.55.1.77.68.77.45 0 .65-.2.9-.45l2.13-2.07 4.43 3.27c.82.45 1.4.22 1.6-.76L22.3 5.9C22.6 4.72 21.85 4.18 21 4Zm-2.04 3.12-7.72 6.97-.3 3.2-1.17-3.8 8.38-5.28c.37-.22.71-.1.81.1Z"/></svg>;
}

export default function Contact() {
  return <main id="main" className="contact-shell">
    <section className="premium-contact wrap">
      <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
      <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
      <div className="premium-contact-copy">
        <p className="eyebrow">Contact · Addis Ababa</p>
        <h1>Let’s begin a<br /><em>conversation.</em></h1>
        <p className="contact-intro">For exhibitions, acquisitions, residencies and thoughtful collaborations.</p>
        <a className="premium-email" href={`mailto:${siteContent.email}`}>
          <span>Email Yofset</span><strong>{siteContent.email}</strong><b aria-hidden="true">↗</b>
        </a>
      </div>
      <aside className="contact-details-panel" aria-label="Contact details">
        <div className="contact-detail-row"><span>Phone</span><a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}>{siteContent.phone}</a></div>
        <div className="contact-detail-row"><span>Studio</span><p>{siteContent.location}</p></div>
        <div className="premium-socials">
          <p className="eyebrow">Follow the practice</p>
          <div className="social-icon-row">
            <a className="premium-social-link" href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Yofset on Instagram"><InstagramIcon /><span>Instagram</span><small>@_______yofset_______</small></a>
            <div className="premium-social-link social-tbc" aria-label="TikTok link forthcoming"><TikTokIcon /><span>TikTok</span><small>Link TBC</small></div>
            <a className="premium-social-link" href={siteContent.social.telegram} target="_blank" rel="noreferrer" aria-label="Yofset on Telegram"><TelegramIcon /><span>Telegram</span><small>@Yofi888</small></a>
          </div>
        </div>
      </aside>
    </section>
  </main>;
}
