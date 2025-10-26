import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
    category?: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        {image.category && (
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-sm text-sm">
            {image.category}
          </div>
        )}
      </div>
    </div>
  );
}

