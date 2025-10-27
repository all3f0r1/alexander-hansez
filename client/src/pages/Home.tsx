import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ImageModal";
import { instagramImages } from "@/data/instagramImages";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  // Utiliser les 40 premières images Instagram pour la page d'accueil
  const portfolioImages = instagramImages.slice(0, 40);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Alexander Hansez</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Film & Photography
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Capturing authentic moments and creating stories through the lens
            </p>

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

          {/* CTA Section */}
          <div className="text-center py-16 bg-accent/5 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Let's Create Something Beautiful</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a wedding, event, or portrait session, I'm here to capture your story
              with authenticity and artistry.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Get in Touch
              </Button>
            </Link>
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

