import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { Button } from "@/components/ui/button";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  room: string;
}

const roomImages: PortfolioImage[] = [
  // Green Room
  { id: 1, src: "https://static.wixstatic.com/media/d7415b9336a9ba0607ec0d~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/d7415b9336a9ba0607ec0d~mv2.jpg", alt: "Green Room", room: "Green Room" },
  { id: 2, src: "https://static.wixstatic.com/media/634194997b26ba74b3dbef~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/634194997b26ba74b3dbef~mv2.jpg", alt: "Green Room", room: "Green Room" },
  { id: 3, src: "https://static.wixstatic.com/media/294bbda5648ece5777225a~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/294bbda5648ece5777225a~mv2.jpg", alt: "Green Room", room: "Green Room" },
  
  // Blue Room
  { id: 4, src: "https://static.wixstatic.com/media/a44a0ebba93a66265dc74f~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/a44a0ebba93a66265dc74f~mv2.jpg", alt: "Blue Room", room: "Blue Room" },
  { id: 5, src: "https://static.wixstatic.com/media/3e44c48b0e4fa3a55aea7a~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/3e44c48b0e4fa3a55aea7a~mv2.jpg", alt: "Blue Room", room: "Blue Room" },
  { id: 6, src: "https://static.wixstatic.com/media/bf43d0afac90b6bbbe0563~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/bf43d0afac90b6bbbe0563~mv2.jpg", alt: "Blue Room", room: "Blue Room" },
  
  // White Room
  { id: 7, src: "https://static.wixstatic.com/media/8f4b449a637500047fc651~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/8f4b449a637500047fc651~mv2.jpg", alt: "White Room", room: "White Room" },
  { id: 8, src: "https://static.wixstatic.com/media/b649ed8b43745ae8f2e262~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/b649ed8b43745ae8f2e262~mv2.jpg", alt: "White Room", room: "White Room" },
  { id: 9, src: "https://static.wixstatic.com/media/d94f3d9b8cc4642022af04~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01/d94f3d9b8cc4642022af04~mv2.jpg", alt: "White Room", room: "White Room" },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Room(s)</h1>

            {/* Room Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {rooms.map((room) => (
                <Button
                  key={room}
                  variant={activeRoom === room ? "default" : "outline"}
                  onClick={() => setActiveRoom(room)}
                  className="capitalize"
                >
                  {room}
                </Button>
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

