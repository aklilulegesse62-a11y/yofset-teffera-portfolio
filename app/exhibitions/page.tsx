import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "../data";

export const metadata: Metadata = { title: "Exhibitions" };

export default function Exhibitions() {
  return <main id="main">
    <header className="page-hero wrap">
      <p className="eyebrow">Solo exhibitions</p>
      <h1>Chapters in <em>motion</em></h1>
      <p>Each exhibition records an evolving conversation between identity, emotion and place.</p>
    </header>
    <section className="exhibitions-list wrap">
      {siteContent.exhibitions.map((exhibition, index) => <article className="exhibition" key={exhibition.title}>
        <span className="ex-number">0{index + 1}</span>
        <div>
          <h2>{exhibition.amharic}<small>{exhibition.title}</small></h2>
          <div className="ex-meta">
            <p><b>Date / Status</b><br />{exhibition.date}</p>
            <p><b>Venue</b><br />{exhibition.venue}</p>
            <p><b>Location</b><br />{exhibition.location}</p>
          </div>
          <p className="ex-desc">{exhibition.description}</p>
          {exhibition.context && <p>{exhibition.context}</p>}
          {exhibition.poster && <Image unoptimized className="exhibition-image" src={exhibition.poster} alt={`${exhibition.title} official exhibition poster`} width={1080} height={1350} sizes="(max-width:800px) 100vw, 60vw" />}
        </div>
      </article>)}
    </section>
  </main>;
}
