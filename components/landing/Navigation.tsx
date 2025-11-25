'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, List, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvents } from '@/lib/posthog';

export default function Navigation({ variant = 'default', forceWhiteBg = false }: { variant?: 'default' | 'solid', forceWhiteBg?: boolean }) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Set window height on client side
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Trigger when leaving hero section (viewport height minus some buffer)
  const isScrolled = scrollY > windowHeight - 100;

  // Determine styles based on variant and scroll state
  const getHeaderStyles = () => {
    if (variant === 'solid') {
      return {
        top: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 16,
      };
    }
    return {
      top: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
    };
  };

  const getNavStyles = () => {
    if (variant === 'solid') {
      return {
        borderRadius: 9999,
        maxWidth: '80rem',
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      };
    }

    // Mobile: use 16px radius, Desktop: use full pill
    const mobileBorderRadius = 16;

    return {
      borderRadius: mobileBorderRadius,
      maxWidth: '80rem',
      paddingLeft: 16,
      paddingRight: 16,
      borderWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    };
  };

  const getBackgroundStyles = () => {
    if (variant === 'solid') {
      return {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(226, 232, 240, 1)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      };
    }

    // Keep white background during open state AND during closing animation
    const shouldBeWhite = forceWhiteBg || isScrolled || isMobileMenuOpen || isAnimating;

    return {
      backgroundColor: shouldBeWhite ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)',
      borderColor: shouldBeWhite ? 'rgba(226, 232, 240, 1)' : 'rgba(255, 255, 255, 0.08)',
      backdropFilter: shouldBeWhite ? 'none' : 'blur(12px)',
      WebkitBackdropFilter: shouldBeWhite ? 'none' : 'blur(12px)',
    };
  };

  const getShadowClass = () => {
    if (variant === 'solid') return 'shadow-sm';
    return forceWhiteBg ? 'shadow-sm' : (isScrolled ? 'shadow-sm' : 'shadow-lg');
  };

  const getTextColorClass = () => {
    if (variant === 'solid') return 'text-slate-900';
    return forceWhiteBg || isScrolled || isMobileMenuOpen || isAnimating ? 'text-slate-900' : 'text-white';
  };

  const getTextSecondaryColorClass = () => {
    if (variant === 'solid') return 'text-slate-600';
    return isScrolled ? 'text-slate-600' : 'text-white/70';
  };

  const getHoverColorClass = () => {
    if (variant === 'solid') return 'hover:text-slate-600';
    return isScrolled ? 'hover:text-slate-600' : 'hover:text-white/70';
  };

  const getButtonStyles = () => {
    if (variant === 'solid') {
      return {
        text: 'text-white',
        bg: 'bg-primary-500',
        hoverBg: 'group-hover:bg-white',
        hoverText: 'group-hover:text-primary-500',
        iconBg: 'bg-primary-500',
        iconHoverBg: 'group-hover:bg-white',
        iconColor: 'text-white',
        iconHoverColor: 'group-hover:text-primary-500',
      };
    }
    if (forceWhiteBg || isScrolled || isMobileMenuOpen || isAnimating) {
      return {
        text: 'text-white',
        bg: 'bg-primary-500',
        hoverBg: 'group-hover:bg-white',
        hoverText: 'group-hover:text-primary-500',
        iconBg: 'bg-primary-500',
        iconHoverBg: 'group-hover:bg-white',
        iconColor: 'text-white',
        iconHoverColor: 'group-hover:text-primary-500',
      };
    }
    return {
      text: 'text-primary-500',
      bg: 'bg-white',
      hoverBg: 'group-hover:bg-primary-500',
      hoverText: 'group-hover:text-white',
      iconBg: 'bg-white',
      iconHoverBg: 'group-hover:bg-primary-500',
      iconColor: 'text-primary-500',
      iconHoverColor: 'group-hover:text-white',
    };
  };

  const textColor = getTextColorClass();
  const textSecondaryColor = getTextSecondaryColorClass();
  const hoverColor = getHoverColorClass();
  const buttonStyles = getButtonStyles();

  return (
    <motion.header
      className="fixed z-50 left-0 right-0"
      initial={false}
      animate={getHeaderStyles()}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <motion.div
        className={`mx-auto transition-shadow duration-500 ${getShadowClass()}`}
        initial={false}
        animate={{
          ...getNavStyles(),
          height: isMobileMenuOpen || isAnimating ? `calc(100vh - 32px)` : 'auto',
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          ...getBackgroundStyles(),
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Top bar with logo and buttons - Fixed size */}
        <div className="flex items-center justify-between gap-4 py-3 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-500/40">
              <span className="text-sm font-semibold tracking-tight text-white">TS</span>
            </div>
            <span className={`text-sm font-semibold tracking-tight transition-colors duration-500 ${textColor}`}>
              TownSquare
            </span>
          </div>

          <nav className={`hidden md:flex items-center gap-7 text-sm transition-colors duration-500 ${textColor}`}>
            <Link href="/#why-townsquare" onClick={() => trackEvents.navClick('about', 'header')} className={`transition-colors ${hoverColor}`}>
              About
            </Link>
            <Link href="/#testimonials" onClick={() => trackEvents.navClick('testimonials', 'header')} className={`transition-colors ${hoverColor}`}>
              Testimonials
            </Link>
            <Link href="/#vendors" onClick={() => trackEvents.navClick('vendors', 'header')} className={`transition-colors ${hoverColor}`}>
              Vendors
            </Link>
            <Link href="/#faq" onClick={() => trackEvents.navClick('faq', 'header')} className={`transition-colors ${hoverColor}`}>
              FAQs
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/download"
              onClick={() => trackEvents.ctaClick('nav_get_app')}
              className="hidden sm:inline-flex group items-center gap-0 transition-all duration-100"
            >
              <span className={`px-4 sm:px-6 py-2.5 text-sm font-semibold tracking-tight transition-all duration-100 rounded-l-full rounded-r-full whitespace-nowrap ${buttonStyles.text} ${buttonStyles.bg} ${buttonStyles.hoverBg} ${buttonStyles.hoverText}`}>
                Get the app
              </span>
              <span className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-100 group-hover:rotate-45 ${buttonStyles.iconBg} ${buttonStyles.iconHoverBg}`}>
                <ArrowUpRight size={16} weight="bold" className={`transition-colors duration-100 ${buttonStyles.iconColor} ${buttonStyles.iconHoverColor}`} />
              </span>
            </Link>

            {/* Mobile hamburger/close menu */}
            <button
              onClick={() => {
                if (isMobileMenuOpen) {
                  setIsAnimating(true);
                  setIsMobileMenuOpen(false);
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              className={`md:hidden flex items-center justify-center w-10 h-10 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - grows independently */}
        <AnimatePresence
          onExitComplete={() => setIsAnimating(false)}
        >
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.1 }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2 }
              }}
              onAnimationStart={() => {
                if (!isMobileMenuOpen) setIsAnimating(true);
              }}
              className="md:hidden flex flex-col flex-1 justify-between px-6 pb-12 pt-6 min-h-0"
            >
              <nav className="flex flex-col flex-shrink-0">
                <Link
                  href="/#why-townsquare"
                  onClick={() => {
                    trackEvents.navClick('about', 'mobile_menu');
                    setIsAnimating(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-4 text-2xl font-medium text-slate-900 hover:text-primary-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/#testimonials"
                  onClick={() => {
                    trackEvents.navClick('testimonials', 'mobile_menu');
                    setIsAnimating(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-4 text-2xl font-medium text-slate-900 hover:text-primary-600 transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/#vendors"
                  onClick={() => {
                    trackEvents.navClick('vendors', 'mobile_menu');
                    setIsAnimating(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-4 text-2xl font-medium text-slate-900 hover:text-primary-600 transition-colors"
                >
                  Vendors
                </Link>
                <Link
                  href="/#faq"
                  onClick={() => {
                    trackEvents.navClick('faq', 'mobile_menu');
                    setIsAnimating(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-4 text-2xl font-medium text-slate-900 hover:text-primary-600 transition-colors"
                >
                  FAQs
                </Link>
              </nav>

              {/* Get the app button in mobile menu */}
              <Link
                href="/download"
                onClick={() => {
                  trackEvents.ctaClick('mobile_menu_get_app');
                  setIsAnimating(true);
                  setIsMobileMenuOpen(false);
                }}
                className="group inline-flex items-center gap-0 transition-all duration-100 w-full flex-shrink-0"
              >
                <span className="flex-1 px-8 py-4 text-lg font-semibold tracking-tight transition-all duration-100 rounded-l-full rounded-r-full whitespace-nowrap text-center text-white bg-primary-500 group-hover:bg-white group-hover:text-primary-500">
                  Get the app
                </span>
                <span className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-100 group-hover:rotate-45 bg-primary-500 group-hover:bg-white">
                  <ArrowUpRight size={24} weight="bold" className="transition-colors duration-100 text-white group-hover:text-primary-500" />
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
