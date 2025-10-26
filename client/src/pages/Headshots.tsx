import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

const headshotImages: PortfolioImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop", alt: "Portrait professionnel homme" },
  { id: 2, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop", alt: "Portrait professionnel femme" },
  { id: 3, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop", alt: "Portrait studio" },
  { id: 4, src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop", alt: "Portrait élégant" },
  { id: 5, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1200&fit=crop", alt: "Portrait artistique" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop", alt: "Portrait corporate" },
  { id: 7, src: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&h=1200&fit=crop", alt: "Portrait business" },
  { id: 8, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop", alt: "Portrait femme professionnelle" },
];

export default function Headshots() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Headshots & Portraits</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Portraits professionnels et artistiques qui capturent votre personnalité et votre essence unique.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {headshotImages.map((image) => (
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

