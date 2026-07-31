import Link from "next/link";
import { notFound } from "next/navigation";
import { siteContent } from "../../data";
import { ArtworkViewer } from "../../ui/ArtworkViewer";

export function generateStaticParams(){return siteContent.artworks.map((artwork)=>({slug:artwork.slug}))}

export default async function ArtworkDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const index=siteContent.artworks.findIndex((artwork)=>artwork.slug===slug);
  if(index<0)notFound();
  const artwork=siteContent.artworks[index];
  const previous=siteContent.artworks[(index-1+siteContent.artworks.length)%siteContent.artworks.length];
  const next=siteContent.artworks[(index+1)%siteContent.artworks.length];
  return <main id="main" className="artwork-page">
    <div className="artwork-back wrap"><Link href="/works">← All Selected Works</Link><span>{(index+1).toString().padStart(2,"0")} / {siteContent.artworks.length.toString().padStart(2,"0")}</span></div>
    <div className="artwork-layout wrap">
      <ArtworkViewer key={artwork.slug} artwork={artwork} previousSlug={previous.slug} nextSlug={next.slug}/>
      <aside className="artwork-info">
        <p className="eyebrow">{artwork.category}</p>
        <h1>{artwork.title}</h1>
        <p className="artwork-series">Yofset Teffera Tesfaye</p>
        <dl><div><dt>Year</dt><dd>{artwork.year}</dd></div><div><dt>Medium</dt><dd>{artwork.medium}</dd></div><div><dt>Dimensions</dt><dd>{artwork.dimensions}</dd></div></dl>
        <a className="button artwork-inquire" href={`mailto:${siteContent.email}?subject=Inquiry about ${artwork.title}`}>Inquire <span>↗</span></a>
        <p className="artwork-description">{artwork.description}</p>
      </aside>
    </div>
    <nav className="artwork-project-nav wrap" aria-label="Previous and next artwork"><Link href={`/works/${previous.slug}`}>← {previous.title}</Link><Link href={`/works/${next.slug}`}>{next.title} →</Link></nav>
  </main>
}
