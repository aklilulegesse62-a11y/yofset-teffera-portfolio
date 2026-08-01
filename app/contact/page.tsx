import type { Metadata } from "next";
import { siteContent } from "../data";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return <main id="main">
    <header className="page-hero wrap"><p className="eyebrow">Contact</p><h1>Begin a <em>conversation</em></h1><p>For exhibition, collection, residency and collaboration enquiries.</p></header>
    <section className="contact-page wrap">
      <div><p className="eyebrow">Email Yofset</p><a className="email-big" href={`mailto:${siteContent.email}`}>{siteContent.email}</a></div>
      <div className="contact-meta">
        <div><small>Phone</small><a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}>{siteContent.phone}</a></div>
        <div><small>Based</small>{siteContent.location}</div>
        <div><small>Instagram</small><a href={siteContent.social.instagram} target="_blank" rel="noreferrer">@_______yofset_______ ↗</a></div>
        <div><small>Telegram</small><a href={siteContent.social.telegram} target="_blank" rel="noreferrer">@Yofi888 ↗</a></div>
      </div>
    </section>
  </main>;
}
