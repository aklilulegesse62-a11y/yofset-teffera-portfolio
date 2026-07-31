import Link from "next/link";
import { siteContent } from "./data";
import { ArtworkCard } from "./ui/ArtworkCard";

export default function Home() {
  const featured = siteContent.artworks.slice(0, 4);
  return (
    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">Contemporary Ethiopian Artist</p>
          <h1>Yofset<br/><em>Teffera</em><br/>Tesfaye</h1>
          <p className="location">Addis Ababa, Ethiopia</p>
          <Link className="button" href="/works">View selected works <span>↗</span></Link>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one"/><span className="orbit orbit-two"/><span className="orbit orbit-three"/>
          <div className="hero-art"><span>Artwork<br/>forthcoming</span></div>
        </div>
      </section>

      <section className="intro wrap section-grid">
        <p className="section-no">01 / Introduction</p>
        <div>
          <h2>Painting as a place for <em>memory, culture</em> and human connection.</h2>
          <p className="large-copy">Yofset Teffera is a self-taught contemporary Ethiopian artist whose practice explores identity, emotion, heritage and spirituality through figurative imagery, vivid colour and symbolic detail.</p>
          <Link className="text-link" href="/about">Meet the artist <span>→</span></Link>
        </div>
      </section>

      <section className="works-preview">
        <div className="wrap section-heading">
          <p className="section-no">02 / Selected Works</p>
          <h2>Recent <em>work</em></h2>
        </div>
        {featured.length ? (
          <div className="art-grid wrap">{featured.map((art) => <ArtworkCard key={art.slug} artwork={art}/>)}</div>
        ) : (
          <div className="empty-art wrap">
            <div className="empty-circle" aria-hidden="true"/>
            <p>The collection is being prepared.<br/>Artwork images will appear here soon.</p>
          </div>
        )}
        <div className="wrap"><Link className="text-link" href="/works">Explore all works <span>→</span></Link></div>
      </section>

      <section className="statement-teaser navy">
        <div className="wrap section-grid">
          <p className="section-no">03 / Artist Statement</p>
          <blockquote>“My work is rooted in identity, memory, emotion, and the richness of Ethiopian culture.”</blockquote>
          <Link className="text-link light-link" href="/about#statement">Read the full statement <span>→</span></Link>
        </div>
      </section>

      <section className="exhibition-preview wrap">
        <div className="section-heading">
          <p className="section-no">04 / Exhibitions</p>
          <h2>Solo <em>chapters</em></h2>
        </div>
        {siteContent.exhibitions.slice(0,2).map((ex, i) => (
          <Link href="/exhibitions" className="ex-row" key={ex.title}>
            <span>0{i+1}</span><h3>{ex.amharic}<small>{ex.title}</small></h3><p>{ex.date}<br/>{ex.venue}</p><b>↗</b>
          </Link>
        ))}
      </section>

      <section className="contact-band">
        <div className="wrap">
          <p className="eyebrow">Conversation / Collaboration / Enquiries</p>
          <h2>Let’s begin a <em>conversation.</em></h2>
          <a className="button button-light" href={`mailto:${siteContent.email}`}>Write to Yofset <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
