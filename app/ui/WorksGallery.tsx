"use client";

import { useState } from "react";
import type { Artwork } from "../data";
import { ArtworkCard } from "./ArtworkCard";

const categories = ["All Works", "Paintings", "Mixed Media", "Objects", "Spatial Work"];

export function WorksGallery({ artworks }: { artworks: Artwork[] }) {
  const [active, setActive] = useState("All Works");
  const visible = active === "All Works" ? artworks : artworks.filter((artwork) => artwork.category === active);

  return (
    <>
      <div className="filter-row wrap" aria-label="Filter artwork by category">
        {categories.map((category) => (
          <button
            type="button"
            className={active === category ? "active" : ""}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            key={category}
          >
            {category}
          </button>
        ))}
        <span className="work-count">{visible.length.toString().padStart(2, "0")} works</span>
      </div>
      <div className="art-grid works-grid wrap">
        {visible.map((artwork) => <ArtworkCard key={artwork.slug} artwork={artwork}/>) }
      </div>
    </>
  );
}
