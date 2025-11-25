// TownSquare Icon Component - Phosphor Icons Wrapper (Web)
// Matches mobile implementation exactly
'use client';

import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
  CaretDown,
  CaretUp,
  X,
  XCircle,
  Check,
  CheckCircle,
  MagnifyingGlass,
  Heart,
  Star,
  MapPin,
  Image,
  GridFour,
  ShieldCheck,
  InstagramLogo,
  WhatsappLogo,
  Globe,
  ShareNetwork,
  Clock,
  Question,
  IconProps as PhosphorIconProps,
} from 'phosphor-react';

// Icon component map - explicit imports to avoid SSR issues
const iconComponents: Record<string, React.ComponentType<PhosphorIconProps>> = {
  // Navigation
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
  CaretDown,
  CaretUp,

  // Actions
  X,
  XCircle,
  Check,
  CheckCircle,

  // Common
  MagnifyingGlass,
  Heart,
  Star,

  // Location
  MapPin,

  // Media
  Image,
  GridFour,

  // Verification
  ShieldCheck,

  // Communication
  InstagramLogo,
  WhatsappLogo,
  Globe,
  ShareNetwork,

  // Time
  Clock,

  // Fallback
  Question,
};

// Icon name mapping from Ionicons to Phosphor (same as mobile)
const iconNameMap: Record<string, string> = {
  // Navigation
  'arrow-back': 'ArrowLeft',
  'arrow-forward': 'ArrowRight',
  'chevron-back': 'CaretLeft',
  'chevron-forward': 'CaretRight',
  'chevron-down': 'CaretDown',
  'chevron-up': 'CaretUp',

  // Actions
  close: 'X',
  'close-circle': 'XCircle',
  'x-circle': 'XCircle',
  checkmark: 'Check',
  'checkmark-circle': 'CheckCircle',
  'checkmark-circle-outline': 'CheckCircle',

  // Common
  search: 'MagnifyingGlass',
  heart: 'Heart',
  'heart-outline': 'Heart',
  star: 'Star',

  // Location
  location: 'MapPin',
  'location-outline': 'MapPin',

  // Media
  images: 'Image',
  'images-outline': 'Image',
  grid: 'GridFour',
  'grid-outline': 'GridFour',

  // Verification
  'shield-checkmark': 'ShieldCheck',
  'shield-check': 'ShieldCheck',

  // Communication
  'logo-instagram': 'InstagramLogo',
  'logo-whatsapp': 'WhatsappLogo',
  globe: 'Globe',
  'globe-outline': 'Globe',
  'share-social-outline': 'ShareNetwork',
  'share-social': 'ShareNetwork',

  // Time
  time: 'Clock',
  'time-outline': 'Clock',
};

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  weight?: IconWeight;
  className?: string;
}

export default function Icon({
  name,
  size = 24,
  color = '#000000',
  weight = 'regular',
  className,
}: IconProps) {
  // Map the icon name
  const mappedName = iconNameMap[name] || name;

  // Resolve the icon component
  const ResolvedIcon = iconComponents[mappedName] || Question;

  if (!iconComponents[mappedName]) {
    console.warn(`Icon "${mappedName}" not found. Using fallback "Question".`);
  }

  return <ResolvedIcon size={size} color={color} weight={weight} className={className} />;
}

export type IconName = keyof typeof iconNameMap | string;
