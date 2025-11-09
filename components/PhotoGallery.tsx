'use client';

import Image from 'next/image';
import { VendorPhoto } from '@/lib/types';
import { useState, useRef, useEffect } from 'react';
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
  const currentPhoto = photos[selectedIndex];
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      // Prevent scrolling on both html and body
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
        // Restore scrolling and position
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

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    const offset = currentTouch - touchStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && selectedIndex < photos.length - 1) {
      onSelectPhoto(selectedIndex + 1);
    } else if (isRightSwipe && selectedIndex > 0) {
      onSelectPhoto(selectedIndex - 1);
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

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

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <div className="relative group">
        {/* Main Image - Responsive height with swipe support */}
        <div
          ref={containerRef}
          className="relative h-[280px] sm:h-[350px] lg:h-[400px] w-full bg-gray-100 rounded-xl overflow-hidden touch-pan-y cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleImageClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-300 ease-out ${
              isDragging ? 'transition-none' : ''
            }`}
            style={{
              transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
            }}
          >
            <Image
              src={currentPhoto.photo_url}
              alt={businessName}
              fill
              className="object-cover select-none"
              priority
              draggable={false}
            />
          </div>

          {/* Logo Overlay */}
          {logoUrl && (
            <div className="absolute bottom-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg pointer-events-none">
              <div className="relative w-16 h-16">
                <Image src={logoUrl} alt={`${businessName} logo`} fill className="object-contain" />
              </div>
            </div>
          )}

          {/* Navigation Arrows - Desktop & Tablet */}
          {photos.length > 1 && (
            <>
              {/* Left Arrow */}
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all sm:opacity-0 sm:group-hover:opacity-100 opacity-100 active:scale-95"
                  aria-label="Previous photo"
                >
                  <Icon name="chevron-back" size={20} color="#1a3e46" />
                </button>
              )}

              {/* Right Arrow */}
              {selectedIndex < photos.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all sm:opacity-0 sm:group-hover:opacity-100 opacity-100 active:scale-95"
                  aria-label="Next photo"
                >
                  <Icon name="chevron-forward" size={20} color="#1a3e46" />
                </button>
              )}
            </>
          )}

        {/* Pagination Dots */}
        {photos.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => onSelectPhoto(index)}
                className="p-1 touch-manipulation"
                aria-label={`View photo ${index + 1}`}
              >
                <div
                  className={`rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-white w-6 h-1.5'
                      : 'bg-white/60 w-1.5 h-1.5'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

        {/* Thumbnail Strip */}
        {photos.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto">
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

      {/* Expanded Image Modal - Using Portal */}
      {mounted && isExpanded && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black overflow-hidden overscroll-none"
          style={{
            height: '100vh',
            height: '100dvh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            touchAction: 'none',
          }}
          onClick={() => setIsExpanded(false)}
          onTouchMove={(e) => {
            // Prevent any scrolling in the modal
            e.preventDefault();
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
            aria-label="Close expanded view"
          >
            <Icon name="close" size={24} color="white" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-5xl max-h-full">
              <Image
                src={currentPhoto.photo_url}
                alt={businessName}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Navigation in expanded view */}
          {photos.length > 1 && (
            <>
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  aria-label="Previous photo"
                >
                  <Icon name="chevron-back" size={24} color="white" />
                </button>
              )}

              {selectedIndex < photos.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  aria-label="Next photo"
                >
                  <Icon name="chevron-forward" size={24} color="white" />
                </button>
              )}
            </>
          )}

          {/* Photo counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
