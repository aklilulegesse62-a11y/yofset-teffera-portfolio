# Yofset Teffera Tesfaye — Artist Portfolio

A responsive portfolio for contemporary Ethiopian artist Yofset Teffera Tesfaye.

## Content and images

All editable content is centralized in `app/data.ts`.

- Add artwork images to `public/images/artworks/`.
- Add exhibition posters to `public/images/exhibitions/`.
- Add the artist portrait to `public/images/portrait/yofset-portrait.jpg`.
- Add the CV to `public/documents/yofset-cv.pdf`.

### Add an artwork

Add an object to the `artworks` array in `app/data.ts`:

```ts
{
  slug: "untitled-01",
  title: "Untitled 01",
  year: "Year TBC",
  medium: "Medium TBC",
  dimensions: "Dimensions TBC",
  description: "Details forthcoming",
  image: "/images/artworks/artwork-01.jpg",
  alt: "Describe only what can be visibly observed in the image",
  category: "Selected Works"
}
```

The same record controls the grid, artwork detail page, title, year, materials, dimensions, description, category, and image order.

## Other updates

- Portrait: set `portrait` in `app/data.ts`, then replace the placeholder in `app/about/page.tsx` with a Next.js Image using that path.
- Exhibitions: edit the `exhibitions` array in `app/data.ts`; the Semet year is intentionally `Year TBC`.
- Social links: add verified URLs under `social` in `app/data.ts`, then replace the TBC labels in the footer and Contact page.
- CV: add the PDF and set `cvPath` in `app/data.ts`, then enable the button in `app/cv/page.tsx`.
- Public URL: replace `https://yofset-teffera.example` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` after the final domain is known.

## Run and check

Use `pnpm dev` for local development, `pnpm build` for a production build, `pnpm lint` for linting, and `pnpm exec tsc --noEmit` for type checking.

No artwork, portrait, posters, or CV were available in the shared folder when this version was created. The site therefore uses explicit, tasteful “forthcoming” states and does not invent or generate visual material.
