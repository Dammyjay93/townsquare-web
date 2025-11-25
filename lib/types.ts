export interface VendorPublic {
  id: string;
  business_name: string;
  category_id: string | null;
  description: string | null;
  district_id: string | null;
  location: string | null;
  postal_code: string | null;
  city: string | null;
  services: string[] | null;
  whatsapp: string | null;
  instagram: string | null;
  website: string | null;
  phone: string | null;
  booking_link: string | null;
  username: string;
  latitude: number | null;
  longitude: number | null;
  logo_url: string | null;
  approved_at: string | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
}

export interface ServiceCategory {
  id: string;
  vendor_id: string;
  name: string;
  description: string | null;
  price: string | null;
  duration: string | null;
  variants: ServiceVariant[] | null;
  group: string | null;
  display_order: number;
}

export interface ServiceVariant {
  size?: string;
  type?: string;
  price: number;
  description?: string;
}

export interface VendorPhoto {
  id: string;
  vendor_id: string;
  photo_url: string;
  service_category_id: string | null;
  is_primary: boolean;
  display_order: number;
}

export interface District {
  name: string;
  city: string;
}

export interface VendorProfileData {
  vendor: VendorPublic;
  category: Category | null;
  district: District | null;
  serviceCategories: (ServiceCategory & { photos: VendorPhoto[] })[];
  allPhotos: VendorPhoto[];
}
