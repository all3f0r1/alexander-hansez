import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { instagramImages } from "@/data/instagramImages";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

export default function Weddings() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  // Utiliser les images 40-55 pour Weddings
  const weddingImages = instagramImages.slice(40, 55);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">Wedding(s)</h1>
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

