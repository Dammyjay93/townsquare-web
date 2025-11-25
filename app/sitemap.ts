import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mytownsquare.co';

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  try {
    // Fetch all vendor profiles for dynamic routes
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data: vendors } = await supabase
      .from('profiles')
      .select('username, updated_at')
      .eq('role', 'vendor')
      .eq('is_vendor_profile_complete', true)
      .not('username', 'is', null);

    if (vendors && vendors.length > 0) {
      const vendorRoutes: MetadataRoute.Sitemap = vendors.map((vendor) => ({
        url: `${baseUrl}/${vendor.username}`,
        lastModified: new Date(vendor.updated_at || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

      return [...routes, ...vendorRoutes];
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return routes;
}
