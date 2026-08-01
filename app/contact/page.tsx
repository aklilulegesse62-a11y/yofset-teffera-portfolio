import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "../data";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return <main id="main" className="contact-showcase">
    <section className="contact-stage wrap">
      <Image unoptimized className="contact-stage-image" src={siteContent.portrait} alt="Yofset Teffera seated beneath a circular arrangement of artworks" fill priority sizes="(max-width: 800px) 100vw, 1280px" />
      <div className="contact-stage-shade" aria-hidden="true" />
      <div className="contact-stage-content">
        <p className="contact-kicker"><span /> Start a conversation</p>
        <h1>Let’s create a meaningful <em>connection.</em></h1>
        <p className="contact-intro">For exhibitions, collections, residencies and thoughtful collaborations, reach Yofset directly.</p>
        <div className="contact-actions">
          <a className="contact-action contact-action-primary" href={`mailto:${siteContent.email}`}><span aria-hidden="true">✉</span> Email Yofset</a>
          <a className="contact-action contact-action-secondary" href={`tel:${siteContent.phone.replace(/\s/g, "")}`}><span aria-hidden="true">☎</span> {siteContent.phone}</a>
        </div>
        <div className="contact-socials" aria-label="Social links">
          <a href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Yofset on Instagram"><b>IG</b><span>Instagram</span></a>
          <a href={siteContent.social.telegram} target="_blank" rel="noreferrer" aria-label="Yofset on Telegram"><b>TG</b><span>Telegram</span></a>
        </div>
        <p className="contact-location">Addis Ababa, Ethiopia</p>
      </div>
      <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
      <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
    </section>
    <section className="contact-direct wrap">
      <p>Direct email</p>
      <a href={`mailto:${siteContent.email}`}>{siteContent.email}<span>↗</span></a>
    </section>
  </main>;
}
