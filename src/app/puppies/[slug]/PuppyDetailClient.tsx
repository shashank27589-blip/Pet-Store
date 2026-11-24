'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Puppy, WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

interface Props {
  pup: Puppy;
  prevPup: Puppy;
  nextPup: Puppy;
}

export default function PuppyDetailClient({ pup, prevPup, nextPup }: Props) {
  // Build slide images
  const imgSrc = pup.image.startsWith('http') ? pup.image : (pup.image.startsWith('/') ? pup.image : `/${pup.image}`);
  const slides = [imgSrc, imgSrc]; // can show 2 angles
  const [activeSlide, setActiveSlide] = useState(0);

  // Enquiry form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  const waEnquiryUrl = `${WA_URL}&text=${encodeURIComponent(`Hi TeddyPups, I'd like to ask about ${pup.name} the ${pup.breed}. Is ${pup.name} still available?`)}`;

  return (
    <div className="gutter max-w-[110rem] mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-[var(--color-toffee-ink)] font-semibold">
        <Link href="/puppies" className="hover:underline">Available puppies</Link>
        <span>/</span>
        <span className="text-[var(--color-cocoa)] font-bold">{pup.name}</span>
      </nav>

      <div className="space-y-12">
        {/* CHAPTER 1: HELLO, IT'S ME */}
        <section className="tp-chapter bg-[var(--color-milk)] rounded-3xl border-2 border-[var(--color-cocoa)]/15 p-6 md:p-10 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-[var(--color-cocoa)]/10 pb-4">
            <span className="tp-chapter__badge">
              <span>📖</span> Chapter 1 · hello, it’s me
            </span>
            <span className="text-xs font-bold text-[var(--color-cocoa)]/60 uppercase tracking-wider">
              {pup.source === 'imported' ? '✈️ Imported Breed' : '🏪 Downtown Showroom'}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[var(--color-cocoa)]/20 bg-[var(--color-honey-soft)] shadow-inner">
                <Image
                  src={slides[activeSlide]}
                  alt={`${pup.name}, ${pup.breed}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                  priority
                  unoptimized
                />

                {/* Slides arrows */}
                {slides.length > 1 && (
                  <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button
                      type="button"
                      onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                      className="pointer-events-auto size-10 rounded-full bg-white/80 hover:bg-white text-[var(--color-cocoa)] font-bold shadow-md flex items-center justify-center transition-transform active:scale-90"
                      aria-label="Previous photo"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                      className="pointer-events-auto size-10 rounded-full bg-white/80 hover:bg-white text-[var(--color-cocoa)] font-bold shadow-md flex items-center justify-center transition-transform active:scale-90"
                      aria-label="Next photo"
                    >
                      ›
                    </button>
                  </div>
                )}

                {/* Counter */}
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold backdrop-blur-xs">
                  {activeSlide + 1} / {slides.length}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`relative size-20 rounded-xl overflow-hidden border-2 transition-transform ${
                      activeSlide === idx
                        ? 'border-[var(--color-toffee)] scale-105 shadow-md'
                        : 'border-[var(--color-cocoa)]/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={s} alt="" fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[var(--color-wa-green)]/15 text-[#1b7e3d] flex items-center gap-1">
                    <span className="size-2 rounded-full bg-[var(--color-wa-green)] animate-pulse" />
                    Available now
                  </span>
                  <span className="text-xs font-bold text-[var(--color-toffee-ink)]">
                    {pup.breed}
                  </span>
                </div>
                <h1 className="font-plush text-4xl sm:text-5xl text-[var(--color-cocoa)] mt-1 mb-2">
                  {pup.name}
                </h1>
                <p className="text-2xl font-bold text-[var(--color-toffee-ink)]">
                  {pup.currency} {pup.price.toLocaleString()}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[var(--color-honey-soft)]/70 p-4 rounded-2xl border border-[var(--color-cocoa)]/10 text-center">
                <div>
                  <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Gender</span>
                  <span className="text-sm font-bold text-[var(--color-cocoa)]">{pup.gender}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Age</span>
                  <span className="text-sm font-bold text-[var(--color-cocoa)]">{pup.age}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Weight</span>
                  <span className="text-sm font-bold text-[var(--color-cocoa)]">{pup.weight}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Origin</span>
                  <span className="text-sm font-bold text-[var(--color-cocoa)]">{pup.source === 'imported' ? 'Import' : 'Dubai'}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-[var(--color-cocoa)]/85 leading-relaxed">
                {pup.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pup.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-peach)]/70 text-[var(--color-toffee-ink)] border border-[var(--color-toffee)]/20"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={waEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp flex-1 justify-center py-3.5 rounded-full font-bold bg-[#25d366] text-white flex items-center gap-2 shadow-md hover:bg-[#20ba59] transition-transform active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  Ask about {pup.name} on WhatsApp
                </a>
                <a
                  href="#chapter-4"
                  className="btn btn-secondary px-6 py-3.5 rounded-full font-bold bg-[var(--color-cocoa)] text-white hover:bg-[var(--color-brown-mid)] transition-transform text-center active:scale-95"
                >
                  Send an enquiry ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 2: WHAT COMES WITH PUPPY */}
        <section className="tp-chapter bg-[var(--color-honey-soft)] rounded-3xl border-2 border-[var(--color-toffee)]/30 p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-cocoa)]/10 pb-4">
            <span className="tp-chapter__badge bg-white">
              <span>🩺</span> Chapter 2 · what comes with {pup.name}
            </span>
          </div>

          <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mb-6">
            Every Teddy Pup comes
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Vaccinated', desc: 'Up-to-date with essential puppy vaccinations and veterinary record.' },
              { title: 'Dewormed', desc: 'Preventative care and health checks completed by registered vets.' },
              { title: 'Verified Certificate', desc: 'Licensed veterinary certificate confirming general health and fitness.' },
              { title: 'Thoroughly Checked', desc: 'Socialized, gentle, and ready to thrive in your loving home.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-5 rounded-2xl border border-[var(--color-cocoa)]/10 shadow-xs">
                <span className="text-2xl text-[var(--color-wa-green)] block mb-2">✓</span>
                <h3 className="font-bold text-base text-[var(--color-cocoa)] mb-1">{title}</h3>
                <p className="text-xs text-[var(--color-cocoa)]/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER 3: THE WAY HOME */}
        <section className="tp-chapter bg-[var(--color-milk)] rounded-3xl border-2 border-[var(--color-cocoa)]/15 p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-cocoa)]/10 pb-4">
            <span className="tp-chapter__badge">
              <span>🚗</span> Chapter 3 · the way home
            </span>
          </div>

          <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mb-6">
            {pup.source === 'imported' ? 'Coming home from abroad' : 'Taking your puppy home'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'Reserve your puppy', desc: 'Tell us that this puppy has captured your heart.' },
              { num: '2', title: 'Personalized consultation', desc: 'We finalize details with you and share live photos & videos.' },
              { num: '3', title: 'Arrival or showroom visit', desc: 'Meet face-to-face or arrange safe door-to-door delivery.' },
              { num: '4', title: 'Welcome home', desc: 'We help your new puppy settle in with 24/7 care guidance.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-[var(--color-honey-soft)]/60 p-5 rounded-2xl border border-[var(--color-cocoa)]/10 relative">
                <span className="font-plush text-2xl text-[var(--color-toffee)] block mb-1">#{num}</span>
                <h3 className="font-bold text-sm text-[var(--color-cocoa)] mb-1">{title}</h3>
                <p className="text-xs text-[var(--color-cocoa)]/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER 4: DEAR TEDDYPUPS ENQUIRY FORM */}
        <section id="chapter-4" className="tp-chapter bg-white rounded-3xl border-2 border-[var(--color-cocoa)]/15 p-6 md:p-10 shadow-sm scroll-mt-28">
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-cocoa)]/10 pb-4">
            <span className="tp-chapter__badge">
              <span>💌</span> Chapter 4 · dear TeddyPups…
            </span>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="font-plush text-3xl text-[var(--color-cocoa)] mb-2 text-center">
              Ask about {pup.name}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-cocoa)]/75 text-center mb-8">
              Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
            </p>

            {enquirySent ? (
              <div className="bg-[var(--color-grass)] border-2 border-[#2d6622]/30 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-2">🎉</span>
                <h3 className="font-plush text-2xl text-[#2d6622] mb-1">
                  Enquiry sent for {pup.name}!
                </h3>
                <p className="text-sm text-[#2d6622]/90 max-w-md mx-auto">
                  Our adoption counselor will reach out to you within a few hours. For immediate answers, connect with us on WhatsApp!
                </p>
                <a
                  href={waEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleEnquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-cocoa)] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-cocoa)]/30 text-sm focus:outline-none focus:border-[var(--color-toffee)]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-cocoa)] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-cocoa)]/30 text-sm focus:outline-none focus:border-[var(--color-toffee)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-cocoa)] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-cocoa)]/30 text-sm focus:outline-none focus:border-[var(--color-toffee)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-cocoa)] uppercase mb-1">
                    Your Location (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai Marina, Abu Dhabi, etc."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-cocoa)]/30 text-sm focus:outline-none focus:border-[var(--color-toffee)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-cocoa)] uppercase mb-1">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Tell us any questions you have about ${pup.name}…`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-cocoa)]/30 text-sm focus:outline-none focus:border-[var(--color-toffee)]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-3.5 rounded-full font-bold bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md mt-2"
                >
                  Send enquiry for {pup.name}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* PREV / NEXT NAVIGATION */}
        <nav aria-label="Puppy pagination" className="flex items-center justify-between border-t border-[var(--color-cocoa)]/15 pt-8">
          <Link
            href={`/puppies/${prevPup.slug}`}
            className="flex items-center gap-3 group text-left hover:text-[var(--color-toffee)]"
          >
            <span className="size-10 rounded-full border border-[var(--color-cocoa)]/20 flex items-center justify-center font-bold group-hover:border-[var(--color-toffee)]">
              ←
            </span>
            <div>
              <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Previous pup</span>
              <span className="font-plush text-lg text-[var(--color-cocoa)] group-hover:text-[var(--color-toffee)]">
                {prevPup.name} ({prevPup.breed})
              </span>
            </div>
          </Link>

          <Link
            href={`/puppies/${nextPup.slug}`}
            className="flex items-center gap-3 group text-right hover:text-[var(--color-toffee)]"
          >
            <div>
              <span className="text-xs text-[var(--color-cocoa)]/60 font-bold block uppercase">Next pup</span>
              <span className="font-plush text-lg text-[var(--color-cocoa)] group-hover:text-[var(--color-toffee)]">
                {nextPup.name} ({nextPup.breed})
              </span>
            </div>
            <span className="size-10 rounded-full border border-[var(--color-cocoa)]/20 flex items-center justify-center font-bold group-hover:border-[var(--color-toffee)]">
              →
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
