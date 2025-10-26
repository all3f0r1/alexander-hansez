import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  room: string;
}

const roomImages: PortfolioImage[] = [
  // Green Room
  { id: 1, src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop", alt: "Green Room Setup", room: "Green Room" },
  { id: 2, src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=800&fit=crop", alt: "Green Room Details", room: "Green Room" },
  { id: 3, src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=1200&fit=crop", alt: "Green Room Ambiance", room: "Green Room" },
  
  // Blue Room
  { id: 4, src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&h=1000&fit=crop", alt: "Blue Room Setup", room: "Blue Room" },
  { id: 5, src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop", alt: "Blue Room Interior", room: "Blue Room" },
  { id: 6, src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1200&fit=crop", alt: "Blue Room Atmosphere", room: "Blue Room" },
  
  // White Room
  { id: 7, src: "https://images.unsplash.com/photo-1616137148897-cc6d5b6f2b7d?w=800&h=1000&fit=crop", alt: "White Room Studio", room: "White Room" },
  { id: 8, src: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=800&h=800&fit=crop", alt: "White Room Minimalist", room: "White Room" },
  { id: 9, src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&h=1200&fit=crop", alt: "White Room Clean", room: "White Room" },
];

export default function Rooms() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [activeRoom, setActiveRoom] = useState<string>("all");

  const filteredImages = activeRoom === "all" 
    ? roomImages 
    : roomImages.filter(img => img.room === activeRoom);

  const rooms = ["all", "Green Room", "Blue Room", "White Room"];

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rooms</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Nos studios professionnels avec différentes ambiances pour vos séances photo.
            </p>

            {/* Room Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {rooms.map((room) => (
                <button
                  key={room}
                  onClick={() => setActiveRoom(room)}
                  className={`px-6 py-2 rounded-sm text-sm font-medium transition-colors ${
                    activeRoom === room
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/80"
                  }`}
                >
                  {room === "all" ? "Tous" : room}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-sm text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.room}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={{ ...selectedImage, category: selectedImage.room }}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

