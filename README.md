# 🐾 TeddyPups U.A.E. — Next.js Full-Stack Clone

An end-to-end, high-fidelity clone of **[TeddyPups U.A.E.](https://puppy.instabizweb.com/)**, built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Turbopack**.

---

## 🌟 Overview & Pages Implemented

This project reproduces all pages, responsive layouts, interactive widgets, typography, and visual assets of the original site:

| Page Route | Description |
|---|---|
| **`/`** | **Homepage**: Hero parade with sunburst, popular breeds grid, showroom vs import paths, tickets highlight, testimonials, and booking CTA. |
| **`/puppies`** | **Available Puppies**: Live search bar, breed pills, gender & origin filters, cards with live video & availability badges, and link to gone-home tickets. |
| **`/puppies/[slug]`** | **Interactive Storybook Detail Page**: 4 chapters — Chapter 1: "hello, it's me" photo carousel & specs; Chapter 2: "what comes with [pup]" vet & health guarantee; Chapter 3: "the way home" 4-step journey; Chapter 4: "dear TeddyPups…" interactive enquiry form; plus previous/next puppy navigation. |
| **`/happy-families`** | **Wall of Happy Endings**: 64 polaroid-style client moments with tilt transforms, client quote testimonial feature, and lightbox zoom modal. |
| **`/how-it-works`** | **Full Adoption Guide**: Quick jump navigation, Two ways home (Downtown Dubai Showroom & Order Upon Request), Premium Puppy Promise, Delivery & Collection (`#delivery`), and The TeddyPups Difference. |
| **`/faq`** | **Questions & Answers**: Interactive corkboard with 9 pinned sticky notes featuring custom tilts and colorful pins, live question search, and "Ask your own question" form. |
| **`/contact`** | **Visit & Contact**: Whimsical "Dear TeddyPups" letter form with postal air stamp, Showroom details (Downtown Dubai, phone, WhatsApp, opening hours), and visitor guidance. |
| **`/gone-home`** | **Tickets Home**: Ticket booth header with counter, 27 vintage ticket cards featuring perforated "admit one" stubs, route markers, puppy photos, and rehoming stats. |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4 (App Router, Turbopack)
- **Language:** TypeScript 5 (Strict type checking)
- **Styling:** Tailwind CSS 4, CSS Design Tokens, Custom Keyframe Animations
- **Typography:** Fraunces (plush serif), Figtree (modern sans-serif), Shantell Sans / Caveat (scrawled notes)
- **Icons:** Custom SVG Paw & Brand Icons + Lucide React
- **Image Optimization:** Next.js Image component with zero-broken-image fallback and local asset caching
- **Deployment Target:** Vercel

---

## 📁 Project Structure

```
├── public/
│   ├── brand/
│   │   └── logo.png              # Official TeddyPups high-res logo
│   ├── media/                    # Cached puppy photos and happy family moments
│   ├── icon.png                  # Favicon & mobile icons
│   └── apple-icon.png
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global metadata, font definitions & floating WhatsApp
│   │   ├── globals.css           # Design tokens, wavy borders, ticket stubs & polaroids
│   │   ├── page.tsx              # Homepage
│   │   ├── puppies/
│   │   │   ├── page.tsx          # Available puppies server wrapper
│   │   │   └── PuppiesClient.tsx # Client-side search, breed/gender filters & cards
│   │   ├── puppies/[slug]/
│   │   │   ├── page.tsx          # Dynamic SSG page (generateStaticParams)
│   │   │   └── PuppyDetailClient.tsx # 4-chapter storybook, carousel & enquiry form
│   │   ├── happy-families/
│   │   │   ├── page.tsx          # Wall of happy endings server page
│   │   │   └── HappyFamiliesClient.tsx # 64-moment polaroid grid & lightbox modal
│   │   ├── how-it-works/
│   │   │   └── page.tsx          # Adoption steps, delivery & puppy guarantee
│   │   ├── faq/
│   │   │   ├── page.tsx          # FAQ server page
│   │   │   └── FaqClient.tsx     # 9 sticky notes corkboard & question search
│   │   ├── contact/
│   │   │   ├── page.tsx          # Visit & contact server page
│   │   │   └── ContactClient.tsx # Interactive postal letter form & showroom info
│   │   └── gone-home/
│   │       └── page.tsx          # Ticket booth with 27 vintage tickets home
│   ├── components/
│   │   ├── Header.tsx            # Sticky header with wavy hem, active links & mobile drawer
│   │   ├── Footer.tsx            # Hill wave, twinkling stars, explore links & social icons
│   │   └── icons.tsx             # Optimized SVG icons (Paw, WhatsApp, Verified)
│   └── lib/
│       └── data.ts               # Shared database: 20 puppies, 27 tickets, 64 moments, FAQs
├── next.config.ts                # Next.js image remotePatterns & config
├── package.json
└── tsconfig.json
```

---

## 💡 Key Challenges Solved

1. **Pixel-Perfect Aesthetic & Texture:**
   - Engineered custom SVG patterns for the scalloped/wavy header hem and footer hill curves.
   - Recreated realistic "tickets home" featuring dashed perforation lines, angled tilt variables (`--tilt`), and vertical "admit one" ticket stubs.
   - Implemented corkboard sticky notes on `/faq` with multi-colored pushpins, paper drop-shadows, and organic rotation angles.
   - Built the letter-writing contact experience on `/contact` with airmail stamp graphics, handwriting font headers, and inline text inputs.

2. **Zero Broken Images:**
   - Downloaded and bundled core brand logos and high-priority puppy media directly into `public/`.
   - Configured `next.config.ts` with `remotePatterns` for `puppy.instabizweb.com` so all images render seamlessly with automatic optimization and zero 404s.

3. **High-Performance Static Site Generation (SSG):**
   - Utilized Next.js `generateStaticParams()` on `/puppies/[slug]` to prerender all 20 puppy profile routes at build time.
   - Verified that `npm run build` generates 30/30 pages cleanly without any runtime bottlenecks or hydration mismatches.

4. **Multi-Faceted Client Filtering:**
   - Built instant multi-criteria filtering on `/puppies` (combining free-text search, breed tags, gender toggles, and origin filters) with real-time counters and empty state handling.

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shashank27589-blip/Pet-Store.git
   cd Pet-Store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run a production build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Deploying to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Ensure your repository has been pushed to GitHub (`main` branch):
   `https://github.com/shashank27589-blip/Pet-Store`
2. Go to **[vercel.com](https://vercel.com/)** and sign in.
3. Click **"Add New..."** -> **"Project"**.
4. Select `shashank27589-blip/Pet-Store` from your GitHub repository list.
5. In the configuration screen:
   - **Framework Preset:** Next.js (automatically detected)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default)
6. Click **Deploy**. Your site will be live on a `*.vercel.app` URL in less than 2 minutes!

### Option 2: Deploying via Vercel CLI
If you have the Vercel CLI installed:
```bash
npx vercel
# Follow prompts to link project and deploy
npx vercel --prod
```

---

## 📹 Video Walkthrough Notes (Loom)
When recording your Loom video:
1. **Show the Homepage (`/`):** Demonstrate the hero section, the puppy parade, popular breeds, and responsive navbar.
2. **Show Available Puppies (`/puppies`):** Showcase the live search, breed and gender filters, and smooth card transitions.
3. **Show Puppy Detail Storybook (`/puppies/[slug]`):** Walk through Chapter 1 (carousel), Chapter 2 (health items), Chapter 3 (journey steps), and Chapter 4 (the interactive enquiry form).
4. **Show Tickets Home (`/gone-home`):** Highlight the perforated ticket cards and vintage stubs.
5. **Show Wall of Moments (`/happy-families`):** Demonstrate polaroid tiles, the quote, and the image enlargement lightbox modal.
6. **Show How It Works & FAQ:** Showcase the multi-step adoption guide and the sticky notes corkboard.
7. **Show Visit & Contact (`/contact`):** Fill in the letter form to demonstrate client-side submission and showroom info.
8. **Show Clean Build:** Show terminal output of `npm run build` confirming 30/30 static pages compiled with zero errors.
