"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    alt: "Mountain landscape at sunrise",
    category: "Landscapes",
    location: "Swiss Alps",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=1200&fit=crop",
    alt: "Urban skyline at night",
    category: "Urban",
    location: "New York City",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
    alt: "Traditional temple architecture",
    category: "Travel",
    location: "Kyoto, Japan",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",
    alt: "Snowy mountain peak",
    category: "Landscapes",
    location: "Mount Rainier",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1200&fit=crop",
    alt: "City street at dusk",
    category: "Urban",
    location: "Paris, France",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    alt: "Tropical beach at sunset",
    category: "Landscapes",
    location: "Maldives",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop",
    alt: "Downtown aerial view",
    category: "Urban",
    location: "Chicago",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1200&fit=crop",
    alt: "Dramatic mountain range",
    category: "Landscapes",
    location: "Patagonia",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop",
    alt: "Iconic tower at golden hour",
    category: "Travel",
    location: "Paris, France",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
    alt: "Misty forest morning",
    category: "Landscapes",
    location: "Pacific Northwest",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=1200&fit=crop",
    alt: "Historic clock tower",
    category: "Urban",
    location: "London, UK",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
    alt: "Valley with winding river",
    category: "Landscapes",
    location: "Iceland",
  },
]

const categories = ["All", "Landscapes", "Urban", "Travel"]

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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-accent text-sm tracking-wider uppercase mb-4">
            Photography
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6">
            Capturing{" "}
            <span className="text-accent italic font-serif">moments</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond fintech, I find clarity behind a camera. These images represent quiet moments 
            between the noise—landscapes, cityscapes, and the places that inspire perspective.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs tracking-wide uppercase border rounded-full transition-colors ${
                  category === selectedCategory
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative block w-full overflow-hidden rounded-lg bg-secondary cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-foreground">{photo.location}</p>
                      <p className="text-xs text-muted-foreground">{photo.category}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
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
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
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
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Equipment Note */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-wider text-accent mb-4">Equipment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most of these images were captured with a Sony A7R IV and a collection of prime lenses. 
              I believe in traveling light—usually just a 35mm and 85mm cover most situations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For prints or licensing inquiries, please{" "}
              <a href="mailto:hello@alexchen.dev" className="text-accent hover:underline">
                get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
