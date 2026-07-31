"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Artwork } from "../data";

export function ArtworkViewer({ artwork, previousSlug, nextSlug }: { artwork: Artwork; previousSlug: string; nextSlug: string }) {
  const router = useRouter();
  const images = [artwork.image, ...(artwork.details ?? [])];
  const [index, setIndex] = useState(0);
  const [installOpen, setInstallOpen] = useState(false);
  const [installSize, setInstallSize] = useState(38);
  const [wallTone, setWallTone] = useState("warm");
  const safeIndex = Math.min(index, images.length - 1);

  const previous = () => safeIndex > 0 ? setIndex(safeIndex - 1) : router.push(`/works/${previousSlug}`);
  const next = () => safeIndex < images.length - 1 ? setIndex(safeIndex + 1) : router.push(`/works/${nextSlug}`);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") setInstallOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <>
      <section className="artwork-viewer" aria-label={`${artwork.title} image viewer`}>
        <button className="viewer-arrow viewer-prev" type="button" onClick={previous} aria-label={safeIndex === 0 ? "Previous artwork" : "Previous image"}>←</button>
        <div className="viewer-stage">
          <Image unoptimized src={images[safeIndex]} alt={safeIndex === 0 ? artwork.alt : `Detail ${safeIndex} of ${artwork.title}`} fill priority sizes="(max-width: 900px) 100vw, 62vw"/>
          <span className="viewer-counter">{safeIndex + 1} / {images.length}</span>
        </div>
        <button className="viewer-arrow viewer-next" type="button" onClick={next} aria-label={safeIndex === images.length - 1 ? "Next artwork" : "Next image"}>→</button>
        {images.length > 1 && <div className="viewer-thumbs" aria-label="Choose image">
          {images.map((src, imageIndex) => <button type="button" className={safeIndex === imageIndex ? "active" : ""} aria-label={`Show image ${imageIndex + 1}`} aria-pressed={safeIndex === imageIndex} onClick={() => setIndex(imageIndex)} key={src}><Image unoptimized src={src} alt="" width={70} height={70}/></button>)}
        </div>}
        <div className="viewer-tools">
          <button className="virtual-install-trigger" type="button" onClick={() => setInstallOpen(true)}><span className="install-icon" aria-hidden="true"><i/><b/></span><span><strong>Virtual Install</strong><small>View this work in a gallery space</small></span><em aria-hidden="true">↗</em></button>
          <span>Use ← → keys to browse</span>
        </div>
      </section>

      {installOpen && <div className="install-overlay" role="dialog" aria-modal="true" aria-labelledby="install-title">
        <div className="install-panel">
          <div className="install-header"><div><p className="eyebrow">Visual preview · Not to scale</p><h2 id="install-title">Virtual Install</h2></div><button type="button" onClick={() => setInstallOpen(false)} aria-label="Close virtual install">×</button></div>
          <div className={`virtual-room wall-${wallTone}`}>
            <div className="gallery-ceiling" aria-hidden="true"><i/><i/><i/></div>
            <div className="gallery-wall-lines" aria-hidden="true"/>
            <div className="installed-art" style={{width:`${installSize}%`}}><div className="install-frame"><Image unoptimized src={artwork.image} alt={`${artwork.title} displayed on a virtual wall`} width={1200} height={1200}/></div><span>{artwork.title}</span></div>
            <div className="room-bench" aria-hidden="true"/>
            <div className="room-plant" aria-hidden="true"><i/><i/><i/><i/><b/></div>
          </div>
          <div className="install-controls"><label className="size-control">Artwork preview size <input type="range" min="20" max="65" value={installSize} onChange={(event) => setInstallSize(Number(event.target.value))}/></label><div className="wall-tones" aria-label="Choose wall tone"><span>Wall tone</span>{[["warm","Warm white"],["stone","Soft stone"],["navy","Deep navy"]].map(([value,label])=><button key={value} type="button" className={`${value} ${wallTone===value?"active":""}`} aria-label={label} aria-pressed={wallTone===value} onClick={()=>setWallTone(value)}/>)}</div></div>
        </div>
      </div>}
    </>
  );
}
