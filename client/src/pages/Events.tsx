import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

const eventImages: PortfolioImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1200&fit=crop", alt: "Événement corporatif" },
  { id: 2, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop", alt: "Concert live" },
  { id: 3, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop", alt: "Conférence" },
  { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=800&fit=crop", alt: "Soirée gala" },
  { id: 5, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=1200&fit=crop", alt: "Festival" },
  { id: 6, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop", alt: "Événement sportif" },
  { id: 7, src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=1000&fit=crop", alt: "Exposition" },
  { id: 8, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=800&fit=crop", alt: "Lancement produit" },
];

export default function Events() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Documentation professionnelle de vos événements corporatifs, concerts, conférences et célébrations.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {eventImages.map((image) => (
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

