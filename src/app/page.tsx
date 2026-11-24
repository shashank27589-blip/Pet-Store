import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { puppies, WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description: 'Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.',
};

const featuredPuppies = puppies.slice(0, 8);

const breeds = [
  { emoji: '🐩', name: 'Toy Poodle', desc: 'Hypoallergenic & brilliant', slug: 'poodle' },
  { emoji: '🐕', name: 'Maltipoo', desc: 'Playful & gentle', slug: 'maltipoo' },
  { emoji: '🦮', name: 'Pomeranian', desc: 'Spirited & fluffy', slug: 'pomeranian' },
  { emoji: '🐶', name: 'Cavapoo', desc: 'Affectionate & sweet', slug: 'cavapoo' },
  { emoji: '🐕‍🦺', name: 'Shih Tzu', desc: 'Gentle & devoted', slug: 'shih-tzu' },
  { emoji: '🐾', name: 'Maltese', desc: 'Elegant & pure', slug: 'maltese' },
];

const homeTestimonials = [
  {
    quote: "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect.",
    author: "Sarah M.",
    location: "Downtown Dubai",
    stars: 5,
  },
  {
    quote: "We visited the showroom on Saturday and immediately fell in love with our Pomeranian. The team was so knowledgeable, gentle, and transparent about everything.",
    author: "Ahmed K.",
    location: "Dubai Marina",
    stars: 5,
  },
  {
    quote: "The 24/7 care support after bringing our Toy Poodle home gave us so much reassurance as first-time puppy owners. Best experience ever!",
    author: "Elena R.",
    location: "Palm Jumeirah",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* ===================== HERO ===================== */}
      <section
        className="tp-hero tp-scene gutter relative pt-12 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #fffdf8 0%, #fff1d8 100%)' }}
        aria-labelledby="hero-title"
      >
        {/* Soft Sun background */}
        <div
          className="absolute -top-16 -right-16 size-80 rounded-full bg-[#f2be6b]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[110rem] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            <p className="font-scrawl text-2xl md:text-3xl text-[var(--color-toffee-ink)] font-bold relative inline-block">
              every puppy is family
              <svg viewBox="0 0 220 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-[var(--color-toffee)]" aria-hidden="true">
                <path d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>

            <h1 id="hero-title" className="font-plush text-5xl sm:text-6xl lg:text-7xl text-[var(--color-cocoa)] leading-[1.08] tracking-tight">
              Premium teacup<br />
              <span className="text-[var(--color-toffee)]">puppies</span> in Dubai
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-cocoa)]/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/puppies"
                className="btn btn-primary px-8 py-4 rounded-full font-bold text-base bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md no-underline"
              >
                View available puppies
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8 py-4 rounded-full font-bold text-base bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md flex items-center gap-2.5 no-underline"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                Enquire on WhatsApp
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs md:text-sm font-bold text-[var(--color-cocoa)]/70">
              <span className="flex items-center gap-1.5">✓ Licensed Vet Health Checked</span>
              <span className="flex items-center gap-1.5">✓ Downtown Dubai Showroom</span>
              <span className="flex items-center gap-1.5">✓ 24/7 Support</span>
            </div>
          </div>

          {/* Hero Lineup / Stage with real puppy photo card */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative aspect-[4/3] max-w-lg mx-auto bg-white rounded-3xl p-4 border-2 border-[var(--color-cocoa)]/15 shadow-xl"
              style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem' }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[var(--color-honey-soft)]">
                {featuredPuppies[0] && (
                  <Image
                    src={featuredPuppies[0].image.startsWith('http') ? featuredPuppies[0].image : (featuredPuppies[0].image.startsWith('/') ? featuredPuppies[0].image : `/${featuredPuppies[0].image}`)}
                    alt={`${featuredPuppies[0].name}, ${featuredPuppies[0].breed}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                )}
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[var(--color-cocoa)]/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[var(--color-toffee-ink)] uppercase">
                      {featuredPuppies[0]?.breed}
                    </span>
                    <h3 className="font-plush text-xl text-[var(--color-cocoa)]">
                      {featuredPuppies[0]?.name}
                    </h3>
                  </div>
                  <Link
                    href={`/puppies/${featuredPuppies[0]?.slug}`}
                    className="px-4 py-2 rounded-full bg-[var(--color-toffee)] text-white text-xs font-bold hover:bg-[var(--color-toffee-ink)] transition-colors no-underline"
                  >
                    Meet {featuredPuppies[0]?.name} →
                  </Link>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-[var(--color-peach)] border-2 border-[var(--color-cocoa)]/20 px-4 py-2 rounded-2xl shadow-md rotate-[-6deg]">
                <span className="font-scrawl text-lg font-bold text-[var(--color-cocoa)]">
                  Available in Dubai 🐾
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== AVAILABLE PUPPIES ===================== */}
      <section className="gutter py-20 max-w-[110rem] mx-auto" aria-labelledby="featured-title">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
              meet the pups
            </span>
            <h2 id="featured-title" className="font-plush text-3xl sm:text-4xl md:text-5xl text-[var(--color-cocoa)] mt-1">
              Available puppies
            </h2>
          </div>
          <Link
            href="/puppies"
            className="btn btn-ghost px-6 py-2.5 rounded-full border-2 border-[var(--color-cocoa)] text-sm font-bold text-[var(--color-cocoa)] hover:bg-[var(--color-peach)] transition-colors w-fit no-underline"
          >
            View all 20 puppies →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPuppies.map((pup) => {
            const imgSrc = pup.image.startsWith('http') ? pup.image : (pup.image.startsWith('/') ? pup.image : `/${pup.image}`);
            return (
              <Link
                key={pup.id}
                href={`/puppies/${pup.slug}`}
                className="group bg-white border-2 border-[var(--color-cocoa)]/15 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col no-underline text-inherit hover:no-underline"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Image Box */}
                <div
                  className="relative aspect-square overflow-hidden bg-[var(--color-honey-soft)] rounded-t-[1.35rem]"
                  style={{ aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden', backgroundColor: '#fef7e8' }}
                >
                  <Image
                    src={imgSrc}
                    alt={`${pup.name}, ${pup.breed}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/90 text-[#25d366] shadow-xs flex items-center gap-1">
                      <span className="size-2 rounded-full bg-[#25d366] animate-pulse" />
                      Available
                    </span>
                  </div>
                  {pup.source === 'imported' && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[0.7rem] font-bold bg-[#fff1d8] text-[#9e5c10] border border-[#d4852a]/30 z-10">
                      ✈️ Imported
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between" style={{ padding: '1.25rem' }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-toffee)] block mb-1">
                      {pup.breed}
                    </span>
                    <h3 className="font-plush text-2xl text-[var(--color-cocoa)] group-hover:text-[var(--color-toffee)] transition-colors">
                      {pup.name}
                    </h3>
                    <p className="text-xs text-[var(--color-cocoa)]/70 font-semibold mt-1">
                      {pup.gender === 'Female' ? 'Girl' : 'Boy'} · {pup.age} · {pup.weight}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--color-cocoa)]/10 flex items-center justify-between">
                    <span className="font-bold text-base text-[var(--color-cocoa)]">
                      {pup.currency} {pup.price.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-[var(--color-toffee)] group-hover:translate-x-1 transition-transform">
                      Meet {pup.name} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===================== POPULAR BREEDS ===================== */}
      <section className="py-20 bg-[var(--color-honey)]/60 border-y border-[var(--color-cocoa)]/10">
        <div className="gutter max-w-[110rem] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
              find your match
            </span>
            <h2 className="font-plush text-3xl sm:text-4xl md:text-5xl text-[var(--color-cocoa)] mt-1">
              Popular breeds
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {breeds.map(({ emoji, name, desc, slug }) => (
              <Link
                key={name}
                href={`/puppies?breed=${encodeURIComponent(slug)}`}
                className="bg-white border-2 border-[var(--color-cocoa)]/15 rounded-2xl p-5 text-center hover:scale-105 hover:border-[var(--color-toffee)] transition-all shadow-sm no-underline text-inherit hover:no-underline block"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  color: '#2a170e',
                }}
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <div className="font-bold text-base text-[var(--color-cocoa)] mb-1">{name}</div>
                <div className="text-xs text-[var(--color-cocoa)]/70">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TWO WAYS TO MEET YOUR PUPPY ===================== */}
      <section className="gutter py-20 max-w-[110rem] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
            choose your path
          </span>
          <h2 className="font-plush text-3xl sm:text-4xl md:text-5xl text-[var(--color-cocoa)] mt-1">
            Two ways to meet your puppy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Way 1: Dubai Showroom */}
          <div
            className="bg-white border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem' }}
          >
            <span className="text-4xl block mb-3">🏪</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d6622] bg-[var(--color-grass)] px-3 py-1 rounded-full">
              Downtown Dubai
            </span>
            <h3 className="font-plush text-3xl text-[var(--color-cocoa)] mt-3 mb-3">
              Puppies in Dubai
            </h3>
            <p className="text-base text-[var(--color-cocoa)]/80 leading-relaxed mb-6">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. Local puppies are available immediately so you can go home together today.
            </p>
            <Link
              href="/puppies"
              className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-colors no-underline"
            >
              Browse showroom puppies →
            </Link>
          </div>

          {/* Way 2: Imported for You */}
          <div
            className="bg-white border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-8 shadow-sm"
            style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem' }}
          >
            <span className="text-4xl block mb-3">✈️</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-sky-deep)] bg-[var(--color-sky-soft)] px-3 py-1 rounded-full">
              Europe · Korea · Dubai
            </span>
            <h3 className="font-plush text-3xl text-[var(--color-cocoa)] mt-3 mb-3">
              Imported for you
            </h3>
            <p className="text-base text-[var(--color-cocoa)]/80 leading-relaxed mb-6">
              Through our Order Upon Request service, we source rare and premium teacup breeds from certified breeders abroad. We manage health checks, flights, and documentation seamlessly.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59] transition-colors no-underline"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              Enquire about imported breeds →
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TICKETS GONE HOME HIGHLIGHT ===================== */}
      <section className="gutter py-16 max-w-[110rem] mx-auto">
        <div
          className="bg-[var(--color-peach)]/60 border-2 border-[var(--color-cocoa)]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
          style={{ borderRadius: '1.5rem' }}
        >
          <div className="space-y-2 max-w-2xl">
            <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
              tickets home
            </span>
            <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)]">
              27 puppies already happily rehomed
            </h2>
            <p className="text-base text-[var(--color-cocoa)]/80 leading-relaxed">
              Every puppy on our Gone Home wall has joined a loving family in Dubai and around the world. See their tickets and stories!
            </p>
          </div>
          <Link
            href="/gone-home"
            className="btn btn-primary px-8 py-3.5 rounded-full font-bold text-sm bg-[var(--color-cocoa)] text-white hover:bg-[var(--color-brown-mid)] transition-transform active:scale-95 whitespace-nowrap no-underline"
          >
            Visit Gone Home Wall 🎟️
          </Link>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="gutter py-20 max-w-[110rem] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
            our happy endings
          </span>
          <h2 className="font-plush text-3xl sm:text-4xl md:text-5xl text-[var(--color-cocoa)] mt-1">
            Happy families &amp; puppies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {homeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[var(--color-cocoa)]/10 rounded-3xl p-7 shadow-sm flex flex-col justify-between"
              style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem' }}
            >
              <div>
                <div className="text-[var(--color-amber)] text-lg mb-3">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="text-sm md:text-base text-[var(--color-cocoa)]/85 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--color-cocoa)]/10">
                <span className="font-bold text-sm text-[var(--color-cocoa)] block">{t.author}</span>
                <span className="text-xs text-[var(--color-toffee-ink)] font-semibold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/happy-families"
            className="btn btn-ghost px-6 py-2.5 rounded-full border border-[var(--color-cocoa)] text-sm font-bold text-[var(--color-cocoa)] hover:bg-[var(--color-peach)] transition-colors no-underline inline-block"
          >
            See all 64 happy family moments →
          </Link>
        </div>
      </section>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="gutter py-20 max-w-[110rem] mx-auto">
        <div className="bg-[var(--color-cocoa)] text-[var(--color-milk)] rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <span className="font-scrawl text-2xl text-[var(--color-amber)] font-bold block mb-2">
            every puppy is family
          </span>
          <h2 className="font-plush text-4xl sm:text-5xl text-[var(--color-peach)] mb-4">
            Ready to meet your new best friend?
          </h2>
          <p className="text-base md:text-lg text-[var(--color-milk)]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Visit our Downtown Dubai showroom to spend time bonding, or message us on WhatsApp to inquire about current or upcoming litters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/puppies"
              className="btn btn-primary px-8 py-3.5 rounded-full font-bold text-sm bg-[var(--color-peach)] text-[var(--color-cocoa)] hover:bg-white transition-transform active:scale-95 shadow-md no-underline"
            >
              Browse available puppies
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp px-8 py-3.5 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md flex items-center gap-2 no-underline"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full font-bold text-sm border-2 border-white/40 text-white hover:border-white transition-colors no-underline"
            >
              Visit our showroom
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
