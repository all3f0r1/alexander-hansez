import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Images de placeholder avec des dimensions variées pour un effet masonry
const portfolioImages: PortfolioImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop", alt: "Portrait élégant", category: "Portrait" },
  { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop", alt: "Mariage romantique", category: "Wedding" },
  { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop", alt: "Portrait professionnel", category: "Headshot" },
  { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop", alt: "Événement corporatif", category: "Event" },
  { id: 5, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1200&fit=crop", alt: "Portrait artistique", category: "Portrait" },
  { id: 6, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop", alt: "Cérémonie de mariage", category: "Wedding" },
  { id: 7, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop", alt: "Portrait homme", category: "Headshot" },
  { id: 8, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop", alt: "Événement social", category: "Event" },
  { id: 9, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop", alt: "Portrait femme", category: "Portrait" },
  { id: 10, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop", alt: "Couple mariage", category: "Wedding" },
  { id: 11, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop", alt: "Portrait studio", category: "Headshot" },
  { id: 12, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop", alt: "Événement musical", category: "Event" },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Alexander Hansez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Film & Photography
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Portfolio
          </h2>
          
          {/* Masonry Grid using CSS columns */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

