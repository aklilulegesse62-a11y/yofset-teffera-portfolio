import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "../data";

export const metadata: Metadata = { title: "CV" };

const empty = ["Group Exhibitions", "Projects and Commissions", "Awards and Grants"];

export default function CV() {
  return <main id="main">
    <header className="page-hero wrap">
      <p className="eyebrow">Curriculum vitae</p>
      <h1>Artist <em>CV</em></h1>
      <button className="button disabled" aria-disabled="true">Download CV — PDF <span>Forthcoming</span></button>
    </header>
    <div className="wrap">
      <section className="cv-section cv-contact-section">
        <h2>{siteContent.shortName}</h2>
        <div className="cv-contact-details">
          <p><span>Email</span><a href={`mailto:${siteContent.email}`}>{siteContent.email}</a></p>
          <p><span>Phone</span><a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}>{siteContent.phone}</a></p>
          <p><span>Location</span>{siteContent.location}</p>
        </div>
      </section>
      <section className="cv-section">
        <h2>Artist Biography</h2>
        <div className="cv-prose">{siteContent.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="cv-section">
        <h2>Artist Statement</h2>
        <div className="cv-prose">{siteContent.statement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="cv-section">
        <h2>Solo Exhibitions</h2>
        <div className="cv-exhibition-list">{siteContent.exhibitions.slice(0, 2).map((exhibition) => <article className="cv-exhibition" key={exhibition.title}>
          <div><h3>{exhibition.title}</h3>
          <p>{exhibition.date} · {exhibition.venue}, {exhibition.location}</p></div>
          {exhibition.poster && <a href={exhibition.poster} target="_blank" rel="noreferrer" aria-label={`Open ${exhibition.title} exhibition poster`}><Image unoptimized src={exhibition.poster} alt={`${exhibition.title} official exhibition poster`} width={360} height={480} sizes="(max-width: 800px) 45vw, 220px" /></a>}
        </article>)}</div>
      </section>
      <section className="cv-section">
        <h2>Upcoming</h2>
        <div><h3>Third Solo Exhibition (In Progress)</h3><p>{siteContent.exhibitions[2].description}</p></div>
      </section>
      <section className="cv-section">
        <h2>Press and Publications</h2>
        <div className="press-list">{siteContent.press.map((item) => <article className="press-entry" key={item.title}>
          <div>
            <p className="press-meta">{item.publication} · {item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <a href={item.image} target="_blank" rel="noreferrer" aria-label={`Open full press release: ${item.title}`}>
            <Image src={item.image} alt={item.alt} width={989} height={1348} sizes="(max-width: 800px) 100vw, 520px" />
          </a>
        </article>)}</div>
      </section>
      <section className="cv-section">
        <h2>Education</h2>
        <div><h3>Architecture</h3><p>College Education</p><h3>Self-taught artistic practice</h3></div>
      </section>
      <section className="cv-section">
        <h2>Artistic Practice</h2>
        <div className="cv-practice"><span>Contemporary Painting</span><span>Figurative Art</span><span>Ethiopian Cultural Narratives</span><span>Identity and Heritage</span><span>Emotion and Memory</span><span>Spiritual Symbolism</span><p>Based in: {siteContent.location}</p></div>
      </section>
      {empty.map((section) => <section className="cv-section" key={section}><h2>{section}</h2><p>Information forthcoming</p></section>)}
    </div>
  </main>;
}
