'use client';

import Image from 'next/image';
import { VendorPhoto } from '@/lib/types';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mainImage = photos[0];
  const gridImages = photos.slice(1, 5);
  const currentPhoto = photos[selectedIndex];

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== mobileIndex && newIndex >= 0 && newIndex < photos.length) {
      setMobileIndex(newIndex);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${scrollY}px`;
      document.documentElement.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.documentElement.style.overflow = '';
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        document.documentElement.style.width = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isExpanded]);

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      onSelectPhoto(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex < photos.length - 1) {
      onSelectPhoto(selectedIndex + 1);
    }
  };

  const handleImageClick = (index: number) => {
    onSelectPhoto(index);
    setIsExpanded(true);
  };

  // Render desktop grid based on photo count
  const renderDesktopGrid = () => {
    const count = photos.length;

    // 1 photo: Single full-width image
    if (count === 1) {
      return (
        <div className="hidden md:block h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden relative">
          <div
            className="w-full h-full relative cursor-pointer group overflow-hidden bg-gray-100"
            onClick={() => handleImageClick(0)}
          >
            <Image
              src={mainImage.photo_url}
              alt={businessName}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {logoUrl && (
              <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
                <div className="relative w-12 h-12">
                  <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // 2 photos: Two equal columns
    if (count === 2) {
      return (
        <div className="hidden md:grid grid-cols-2 gap-2 h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden relative">
          {photos.slice(0, 2).map((img, index) => (
            <div
              key={img.id}
              className="relative cursor-pointer group overflow-hidden bg-gray-100"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={img.photo_url}
                alt={`${businessName} - Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {index === 0 && logoUrl && (
                <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
                  <div className="relative w-12 h-12">
                    <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // 3 photos: Main left (tall, 2/3 width), 2 stacked on right (1/3 width)
    if (count === 3) {
      return (
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden relative">
          <div
            className="col-span-2 row-span-2 relative cursor-pointer group overflow-hidden bg-gray-100"
            onClick={() => handleImageClick(0)}
          >
            <Image
              src={photos[0].photo_url}
              alt={businessName}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {logoUrl && (
              <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
                <div className="relative w-12 h-12">
                  <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
          {photos.slice(1, 3).map((img, index) => (
            <div
              key={img.id}
              className="relative cursor-pointer group overflow-hidden bg-gray-100"
              onClick={() => handleImageClick(index + 1)}
            >
              <Image
                src={img.photo_url}
                alt={`${businessName} - Photo ${index + 2}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      );
    }

    // 4 photos: Main top (wide), 3 below in a row
    if (count === 4) {
      return (
        <div className="hidden md:grid grid-cols-3 grid-rows-[2fr_1fr] gap-2 h-[400px] lg:h-[450px] w-full rounded-xl overflow-hidden relative">
          <div
            className="col-span-3 relative cursor-pointer group overflow-hidden bg-gray-100"
            onClick={() => handleImageClick(0)}
          >
            <Image
              src={photos[0].photo_url}
              alt={businessName}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {logoUrl && (
              <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
                <div className="relative w-12 h-12">
                  <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
          {photos.slice(1, 4).map((img, index) => (
            <div
              key={img.id}
              className="relative cursor-pointer group overflow-hidden bg-gray-100"
              onClick={() => handleImageClick(index + 1)}
            >
              <Image
                src={img.photo_url}
                alt={`${businessName} - Photo ${index + 2}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      );
    }

    // 5+ photos: Airbnb-style grid
    return (
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[400px] lg:h-[450px] w-full rounded-xl overflow-hidden relative">
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group overflow-hidden bg-gray-100"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={mainImage.photo_url}
            alt={businessName}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          {logoUrl && (
            <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
              <div className="relative w-12 h-12">
                <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
              </div>
            </div>
          )}
        </div>
        {gridImages.map((img, index) => (
          <div
            key={img.id}
            className="relative cursor-pointer group overflow-hidden bg-gray-100"
            onClick={() => handleImageClick(index + 1)}
          >
            <Image
              src={img.photo_url}
              alt={`${businessName} - Photo ${index + 2}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
        {photos.length > 5 && (
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all border border-gray-200"
            >
              Show all photos
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop/Tablet Grid Layout */}
      {renderDesktopGrid()}

      {/* Mobile Layout - Native Scroll Snap Carousel */}
      <div className="md:hidden relative h-[280px] rounded-xl overflow-hidden bg-gray-100">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="flex-shrink-0 w-full h-full snap-center relative"
              onClick={() => {
                onSelectPhoto(index);
                setIsExpanded(true);
              }}
            >
              <Image
                src={photo.photo_url}
                alt={`${businessName} - Photo ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Logo Overlay - Mobile */}
        {logoUrl && mobileIndex === 0 && (
          <div className="absolute bottom-12 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md pointer-events-none">
            <div className="relative w-10 h-10">
              <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
            </div>
          </div>
        )}

        {/* Dots Indicator */}
        {photos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
            {photos.slice(0, Math.min(photos.length, 5)).map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === mobileIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
            {photos.length > 5 && (
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            )}
          </div>
        )}

        <div className="absolute bottom-3 right-3 pointer-events-auto">
          <button
            onClick={() => {
              onSelectPhoto(mobileIndex);
              setIsExpanded(true);
            }}
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5"
          >
            <Icon name="images-outline" size={14} color="#1a3e46" />
            {mobileIndex + 1}/{photos.length}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {mounted &&
        isExpanded &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-white flex flex-col overflow-hidden"
            style={{
              height: '100dvh',
              width: '100vw',
            }}
          >
            {/* Lightbox Header */}
            <div
              className="flex items-center justify-between py-3 px-4 bg-white flex-shrink-0"
              style={{ borderBottom: '0.5px solid #e5e7eb' }}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close gallery"
              >
                <Icon name="close" size={22} color="#1a3e46" />
              </button>
              <span className="font-medium text-sm text-gray-500">
                {selectedIndex + 1} of {photos.length}
              </span>
              <div className="w-10" />
            </div>

            {/* Main Viewer */}
            <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-gray-50">
              {/* Navigation Arrows */}
              {photos.length > 1 && selectedIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
                  aria-label="Previous photo"
                >
                  <Icon name="chevron-back" size={20} color="#1a3e46" />
                </button>
              )}

              <div className="relative w-full h-full max-w-4xl">
                <Image
                  src={currentPhoto.photo_url}
                  alt={businessName}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {photos.length > 1 && selectedIndex < photos.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
                  aria-label="Next photo"
                >
                  <Icon name="chevron-forward" size={20} color="#1a3e46" />
                </button>
              )}
            </div>

            {/* Thumbnails Strip */}
            <div
              className="h-20 bg-white flex items-center px-4 gap-2 overflow-x-auto flex-shrink-0"
              style={{ borderTop: '0.5px solid #e5e7eb' }}
            >
              {photos.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => onSelectPhoto(index)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${
                    selectedIndex === index
                      ? 'border-primary-500 opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.photo_url}
                    alt={`${businessName} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
