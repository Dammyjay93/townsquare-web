'use client';

import Image from 'next/image';
import { VendorPhoto } from '@/lib/types';

interface Props {
  photos: VendorPhoto[];
  businessName: string;
  selectedIndex: number;
  onSelectPhoto: (index: number) => void;
  logoUrl?: string | null;
}

export default function PhotoGallery({
  photos,
  businessName,
  selectedIndex,
  onSelectPhoto,
  logoUrl,
}: Props) {
  const currentPhoto = photos[selectedIndex];

  return (
    <div className="relative">
      {/* Main Image - Responsive height */}
      <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] w-full bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={currentPhoto.photo_url}
          alt={businessName}
          fill
          className="object-cover"
          priority
        />

        {/* Logo Overlay */}
        {logoUrl && (
          <div className="absolute bottom-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="relative w-16 h-16">
              <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
            </div>
          </div>
        )}

        {/* Pagination Dots - Larger touch targets */}
        {photos.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => onSelectPhoto(index)}
                className="p-2 touch-manipulation"
                aria-label={`View photo ${index + 1}`}
              >
                <div
                  className={`rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-white w-8 h-2'
                      : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {photos.length > 1 && (
        <div className="flex gap-2 p-4 overflow-x-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => onSelectPhoto(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                index === selectedIndex
                  ? 'border-blue-500'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image
                src={photo.photo_url}
                alt={`${businessName} - Photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
