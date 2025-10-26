import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

const weddingImages: PortfolioImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop", alt: "Cérémonie de mariage" },
  { id: 2, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop", alt: "Couple de mariés" },
  { id: 3, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1000&fit=crop", alt: "Portrait des mariés" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=800&fit=crop", alt: "Détails mariage" },
  { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop", alt: "Réception mariage" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop", alt: "Première danse" },
  { id: 7, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=1000&fit=crop", alt: "Bouquet de mariée" },
  { id: 8, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=800&fit=crop", alt: "Décoration mariage" },
];

export default function Weddings() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Weddings</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturer les moments les plus précieux de votre journée spéciale avec élégance et authenticité.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {weddingImages.map((image) => (
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

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

