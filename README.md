# TownSquare Web Profiles

Public vendor profile pages for TownSquare - mytownsquare.co/[username]

## Features

- Dynamic vendor profile pages
- Server-side rendering for SEO
- Service categories with photos and pricing
- Contact buttons (WhatsApp, Instagram, Website)
- App download CTAs
- Responsive mobile-first design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (read-only access)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```

Required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `NEXT_PUBLIC_APP_STORE_URL` - iOS App Store link
- `NEXT_PUBLIC_PLAY_STORE_URL` - Google Play Store link

3. Run development server:

```bash
npm run dev
```

4. Open http://localhost:3000/[username] to view a profile

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables
4. Set custom domain: mytownsquare.co
5. Deploy

### Environment Variables in Vercel

Go to Project Settings → Environment Variables and add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_STORE_URL`
- `NEXT_PUBLIC_PLAY_STORE_URL`

## File Structure

```
web/
├── app/
│   ├── [username]/
│   │   ├── page.tsx        # Dynamic vendor profile page
│   │   └── not-found.tsx   # 404 page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── VendorProfile.tsx
│   ├── PhotoGallery.tsx
│   └── ServiceCategoryCard.tsx
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── types.ts            # TypeScript types
└── package.json
```

## Database Access

The web app uses read-only access to these Supabase tables/views:

- `vendors_public` (view with privacy-aware location data)
- `service_categories`
- `vendor_photos`
- `categories`

All data is fetched server-side for SEO optimization.

## SEO Features

- Dynamic meta tags per vendor
- Open Graph images from vendor photos
- Semantic HTML structure
- Server-side rendering

## Adding Features

### Supporting Pages (Future)

To add About, Terms, Privacy pages:

1. Create `app/about/page.tsx`
2. Create `app/terms/page.tsx`
3. Create `app/privacy/page.tsx`

### Landing Page (Future)

To add a landing page at the root:

1. Create `app/page.tsx`
2. Add hero section with app download CTAs
3. Show featured vendors

## Troubleshooting

**404 for all profiles:**

- Check Supabase credentials in `.env.local`
- Verify vendors have `status = 'approved'` in database
- Ensure usernames are set in database

**Images not loading:**

- Add Supabase storage domain to `next.config.js` under `images.remotePatterns`

**Build errors:**

- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run build`
