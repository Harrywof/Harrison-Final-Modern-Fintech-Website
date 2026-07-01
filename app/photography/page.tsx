"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    id: 1,
    src: "/photos/georgia-mountains-2.jpg",
    alt: "Snow-capped mountains above a green valley in Georgia",
    category: "Landscapes",
    location: "Georgia",
  },
  {
    id: 2,
    src: "/photos/georgia-mountains.jpg",
    alt: "Mountain range and wildflowers in Georgia",
    category: "Landscapes",
    location: "Georgia",
  },
  {
    id: 3,
    src: "/photos/georgia-old-towers.jpg",
    alt: "Historic stone towers in the Georgian mountains",
    category: "Travel",
    location: "Georgia",
  },
  {
    id: 4,
    src: "/photos/georgia-wine-region.jpg",
    alt: "Church overlooking the Georgian wine region",
    category: "Travel",
    location: "Georgia",
  },
  {
    id: 5,
    src: "/photos/georgian-valley.jpg",
    alt: "Green valley and stream in Georgia",
    category: "Landscapes",
    location: "Georgia",
  },
  {
    id: 6,
    src: "/photos/dog-es.jpg",
    alt: "Dog sitting against a blue wall in El Salvador",
    category: "Travel",
    location: "El Salvador",
  },
  {
    id: 7,
    src: "/photos/dsc_0635.jpg",
    alt: "Quiet street with green hills in the background",
    category: "Travel",
    location: "El Salvador",
  },
  {
    id: 8,
    src: "/photos/esshop.jpg",
    alt: "Colorful neighborhood storefront in El Salvador",
    category: "Travel",
    location: "El Salvador",
  },
  {
    id: 9,
    src: "/photos/esvolcano.jpg",
    alt: "Volcanic crater lake under low clouds",
    category: "Landscapes",
    location: "El Salvador",
  },
  {
    id: 10,
    src: "/photos/greececar.jpg",
    alt: "Car driving along a coastal road in Greece",
    category: "Travel",
    location: "Greece",
  },
  {
    id: 11,
    src: "/photos/greecefilm.jpg",
    alt: "Cliffs and turquoise water on the Greek coast",
    category: "Landscapes",
    location: "Greece",
  },
  {
    id: 12,
    src: "/photos/mangoes.jpg",
    alt: "Mangoes growing on a tree",
    category: "Travel",
    location: "El Salvador",
  },
  {
    id: 13,
    src: "/photos/nhmountian.jpg",
    alt: "Mountain valley view in New Hampshire",
    category: "Landscapes",
    location: "New Hampshire",
  },
  {
    id: 14,
    src: "/photos/romaniarainbow.jpg",
    alt: "Rainbow over a Romanian hillside town",
    category: "Travel",
    location: "Romania",
  },
  {
    id: 15,
    src: "/photos/romaniasibiu.jpg",
    alt: "Historic rooftops and streets in Sibiu",
    category: "Street",
    location: "Sibiu, Romania",
  },
  {
    id: 16,
    src: "/photos/romaniasunset.jpg",
    alt: "Sunset over rooftops in Romania",
    category: "Street",
    location: "Romania",
  },
  {
    id: 17,
    src: "/photos/romaniatown.jpg",
    alt: "Town square scene in Romania",
    category: "Street",
    location: "Romania",
  },
]

const categories = ["All", "Travel", "Landscapes", "Street"]

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(p => p.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredPhotos.length - 1 : lightboxIndex - 1)
    }
  }
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredPhotos.length - 1 ? 0 : lightboxIndex + 1)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="max-w-3xl">
          <p className="text-accent text-sm tracking-wider uppercase mb-4">
            Photography
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6">
            Capturing{" "}
            <span className="text-accent italic font-serif">moments</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Outside of fintech, I enjoy travel and photography. I like bringing a camera along when
            I am exploring new places, especially cities, coastlines, and landscapes that make me
            slow down a bit.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs tracking-wide uppercase border rounded-full transition-colors ${
                  category === selectedCategory
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div key={photo.id}>
              <button
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-lg bg-secondary cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-foreground">{photo.location}</p>
                    <p className="text-xs text-muted-foreground">{photo.category}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 p-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 p-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto mx-auto rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-foreground font-medium">{filteredPhotos[lightboxIndex].location}</p>
              <p className="text-sm text-muted-foreground">{filteredPhotos[lightboxIndex].category}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
            {lightboxIndex + 1} / {filteredPhotos.length}
          </div>
        </div>
      )}

      {/* Equipment Note */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-wider text-accent mb-4">Equipment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nikon D3300, Pentax K1000, Canon AF35ML
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
