export type Artwork = {slug:string;title:string;year:string;medium:string;dimensions:string;description:string;image:string;alt:string;category:string;price?:string;details?:string[]};
export const withBasePath = (path:string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const rawSiteContent = {
  artist: "Yofset Teffera Tesfaye",
  shortName: "Yofset Teffera",
  discipline: "Contemporary Ethiopian Artist",
  location: "Addis Ababa, Ethiopia",
  email: "yofsettefferatesfaye@gmail.com",
  portrait: "/images/portrait/photo_21_2026-07-31_12-42-31.jpg",
  cvPath: "",
  social: { instagram: "", other: "" },
  biography: [
    "Yofset Teffera is a self-taught contemporary Ethiopian artist based in Addis Ababa. After studying architecture and working across different professional fields, she left her career to dedicate herself fully to painting. A year of intensive studio practice led to her debut solo exhibition, where every artwork sold on opening night.",
    "Raised in a family of artists, Yofset’s earliest creative memories include watching her father paint her mother as she prepared traditional Ethiopian coffee. These experiences shaped her understanding of painting as a way to preserve memory, culture and human connection. Her practice explores identity, emotion, Ethiopian heritage and spirituality through figurative imagery, vivid colour and symbolic detail. Following two solo exhibitions, she is currently developing her third body of work."
  ],
  statement: [
    "My work is rooted in identity, memory, emotion, and the richness of Ethiopian culture. Through painting, I explore the connections between personal experience, heritage, and spirituality, creating works that invite viewers to reflect on their own stories while discovering mine.",
    "As a self-taught artist, my practice is driven by curiosity, discipline, and a deep emotional connection to painting. Every canvas represents a journey of self-discovery and a dialogue between tradition and contemporary life.",
    "Growing up in a family of artists taught me that painting is more than an image—it is a way of preserving history, expressing emotion, and creating human connection. My work celebrates Ethiopian identity while exploring universal themes of belonging, resilience, love, and transformation.",
    "Each exhibition represents a chapter in my evolution as both an artist and a person, documenting the experiences that continue to shape my creative voice."
  ],
  facts: ["Based in Addis Ababa, Ethiopia","Self-taught contemporary artist","Background in architecture","Contemporary painting","Figurative art","Ethiopian cultural narratives","Identity and heritage","Emotion and memory","Spiritual symbolism"],
  exhibitions: [
    {amharic:"ሰፈራ",title:"Sefera / Spot",date:"June 15–July 15, 2024",venue:"Social Addis",location:"Addis Ababa, Ethiopia",description:"Sefera, meaning ‘Spot,’ marked the beginning of Yofset’s professional artistic journey. The exhibition explored finding her place in the world through art and featured seven paintings celebrating Ethiopian heritage, culture, traditions and faith. Every artwork was sold on opening night, making the exhibition a defining milestone in her career.",context:"The exhibition also presented 17 original artworks by her grandfather, Ababa Tesfaye, whose work appeared on the long-running Ethiopian television programme Yeljoch Gize."},
    {amharic:"ስሜት",title:"Semet / Emotion",date:"December 6–December 27 · Year TBC",venue:"Atmosphere",location:"Addis Ababa, Ethiopia",description:"Semet, meaning ‘Emotion,’ presented eight paintings exploring different stages of human emotion. Through expressive imagery and symbolism, the exhibition invited viewers to reflect on emotional transformation, vulnerability and healing. Several works were acquired by collectors.",context:""},
    {amharic:"",title:"Third Solo Exhibition",date:"In progress",venue:"Venue TBC",location:"Addis Ababa, Ethiopia",description:"Yofset Teffera is currently developing her third solo exhibition, continuing her exploration of identity, emotion, memory and contemporary Ethiopian visual storytelling.",context:""}
  ],
  press: [
    {
      title: "Ababa Tesfaye’s Legacy Continues: Granddaughter Yofset Teffera Tesfaye Debuts Art Exhibition Featuring Original Artwork from Iconic Show",
      publication: "Social Addis",
      date: "June 2024",
      description: "Press release announcing Yofset Teffera Tesfaye’s debut exhibition, Sefera / Spot, at Social Addis from June 15 to July 15, 2024.",
      image: "/images/press/sefera-press-release.png",
      alt: "Social Addis press release for Yofset Teffera Tesfaye’s Sefera exhibition",
    },
  ],
  artworks: [
    {slug:"untitled-01",title:"Untitled 01",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-01/_CLP9883.jpg",alt:"Four brightly coloured faces surrounded by flowers against a dark ground",category:"Paintings",details:["/images/artworks/project-01/_CLP9884.jpg","/images/artworks/project-01/_CLP9885.jpg","/images/artworks/project-01/_CLP9886.jpg","/images/artworks/project-01/_CLP9887.jpg"]},
    {slug:"untitled-02",title:"Untitled 02",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-02/_CLP9880.jpg",alt:"Black-and-white figurative composition encircled by piano keys",category:"Paintings",details:["/images/artworks/project-02/_CLP9882.jpg"]},
    {slug:"untitled-03",title:"Untitled 03",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-03/_CLP9889.jpg",alt:"Nested red and blue human profiles within yellow, red and blue circular forms",category:"Paintings",details:["/images/artworks/project-03/_CLP9890.jpg"]},
    {slug:"untitled-04",title:"Untitled 04",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-04/_CLP9891.jpg",alt:"Painted architectural gateway framing a road, trees and cloud-filled sky",category:"Spatial Work",details:["/images/artworks/project-04/_CLP9892.jpg","/images/artworks/project-04/_CLP9893.jpg"]},
    {slug:"untitled-05",title:"Untitled 05",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-05/_CLP9895.jpg",alt:"Pale blue face surrounded by an abundant field of colourful flowers",category:"Paintings",details:["/images/artworks/project-05/_CLP9897.jpg"]},
    {slug:"untitled-06",title:"Untitled 06",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-06/_CLP9901.jpg",alt:"Black-and-white abstracted seated figure enclosed by a circle",category:"Paintings",details:["/images/artworks/project-06/_CLP9904.jpg"]},
    {slug:"untitled-07",title:"Untitled 07",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-07/_CLP9907.jpg",alt:"Circular relief portrait with braided hair, jewellery and concentric dotted bands",category:"Mixed Media",details:["/images/artworks/project-07/_CLP9908.jpg","/images/artworks/project-07/_CLP9909.jpg"]},
    {slug:"untitled-08",title:"Untitled 08",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-08/_CLP9913.jpg",alt:"Circular green relief portrait in profile with textured hair and dotted garments",category:"Mixed Media",details:["/images/artworks/project-08/_CLP9910.jpg"]},
    {slug:"untitled-09",title:"Untitled 09",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-09/_CLP9914.jpg",alt:"Round blue object covered with interlocking raised forms and dotted patterns",category:"Objects",details:["/images/artworks/project-09/_CLP9914-2.jpg"]},
    {slug:"untitled-10",title:"Untitled 10",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-10/_CLP9921.jpg",alt:"Textured black profile surrounded by concentric coloured dotted bands",category:"Mixed Media",details:["/images/artworks/project-10/_CLP9925.jpg"]},
    {slug:"untitled-11",title:"Untitled 11",year:"Year TBC",medium:"Medium TBC",dimensions:"Dimensions TBC",description:"Details forthcoming",image:"/images/artworks/project-11/_CLP9919.jpg",alt:"Dotted green surface with raised geometric forms and gold accents",category:"Objects"},
    {slug:"untitled-12",title:"Inner Child",year:"Year TBC",medium:"Oil painting on canvas",dimensions:"1.0 m × 70 cm",description:"By meeting and knowing my inner child, I found the happiness that was missing.",image:"/images/artworks/project-12/photo_2026-07-31_13-06-55.jpg",alt:"Two figures wrapped in deep green cloth standing among tall trees with a sunflower in front",category:"Paintings",price:"ETB 180,000–220,000"},
    {slug:"untitled-13",title:"Guided by the Light",year:"Year TBC",medium:"Oil painting on canvas",dimensions:"1.0 m × 70 cm",description:"I wished for happiness and love, so I’m following the light as they told me, and I found both on my way.",image:"/images/artworks/project-13/photo_2026-07-31_13-06-59.jpg",alt:"A woman wrapped in yellow cloth framed by layered red arches and dotted patterns",category:"Paintings",price:"ETB 180,000–220,000"},
    {slug:"untitled-14",title:"I Followed the Light to Find You",year:"Year TBC",medium:"Oil painting on canvas",dimensions:"1.0 m × 70 cm",description:"About passion and the desire of finally reuniting.",image:"/images/artworks/project-14/photo_2026-07-31_13-07-03.jpg",alt:"Two embracing figures in red and blue garments framed by an ornate arch and flowers",category:"Paintings",price:"ETB 180,000–220,000"},
    {slug:"untitled-15",title:"Emotion",year:"Year TBC",medium:"Oil painting on wood with gypsum sculpture",dimensions:"1.20 m × 1.0 m",description:"“Time of Creation” refers to the point in time when something is brought into existence.",image:"/images/artworks/project-15/photo_2026-07-31_13-07-07.jpg",alt:"Blue figure emerging from concentric dotted circles surrounded by foliage and circular forms",category:"Mixed Media",price:"ETB 180,000–220,000"},
    {slug:"untitled-16",title:"Meeting with the Higher Self",year:"Year TBC",medium:"Oil painting on canvas",dimensions:"1.0 m × 70 cm",description:"Guidance from the higher self—the source of inner wisdom, intuition, and guidance.",image:"/images/artworks/project-16/photo_2026-07-31_13-07-10.jpg",alt:"Six women in green, orange, yellow, blue, red and white garments against a dark ground",category:"Paintings",price:"ETB 180,000–230,000"},
    {slug:"untitled-17",title:"Looking for Yourself",year:"Year TBC",medium:"Oil painting on gypsum and art clay",dimensions:"1.20 m × 1.20 m",description:"Finding yourself is within you. You don’t have to look far or in different places.",image:"/images/artworks/project-17/photo_2026-07-31_20-20-46.jpg",alt:"Nine circular portrait objects arranged together against a black background",category:"Objects",price:"ETB 180,000–220,000"},
    {slug:"untitled-18",title:"Follow the Light",year:"Year TBC",medium:"Oil painting on canvas",dimensions:"1.0 m × 70 cm",description:"Follow the light and you shall find all your desires.",image:"/images/artworks/project-18/photo_2026-07-31_20-20-53.jpg",alt:"Three figures in white, orange and red garments gathered around a luminous arched doorway",category:"Paintings",price:"ETB 180,000–220,000"}
  ] as Artwork[]
};

export const siteContent = {
  ...rawSiteContent,
  portrait: withBasePath(rawSiteContent.portrait),
  exhibitions: rawSiteContent.exhibitions.map((exhibition, index) => ({
    ...exhibition,
    poster: index === 0
      ? withBasePath("/images/exhibitions/sefera-spot-poster.png")
      : index === 1
        ? withBasePath("/images/exhibitions/semet-emotion-poster.png")
        : "",
  })),
  press: rawSiteContent.press.map((item) => ({...item, image: withBasePath(item.image)})),
  artworks: rawSiteContent.artworks.map((artwork) => ({
    ...artwork,
    image: withBasePath(artwork.image),
    details: artwork.details?.map(withBasePath),
  })),
};
