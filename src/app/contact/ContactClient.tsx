'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WhatsAppIcon } from '@/components/icons';

interface Props {
  info: {
    name: string;
    address: string;
    phone: string;
    email: string;
    hoursWeekday: string;
    hoursWeekend: string;
    description: string;
  };
  waUrl: string;
}

export default function ContactClient({ info, waUrl }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [posted, setPosted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPosted(true);
  };

  return (
    <div className="gutter max-w-[110rem] mx-auto">
      {/* Header */}
      <section className="text-center pt-8 pb-12 max-w-3xl mx-auto">
        <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
          we’d love to hear from you
        </span>
        <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl text-[var(--color-cocoa)] mt-2 mb-4">
          Get in touch with us
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-cocoa)]/80 leading-relaxed">
          Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we’d love to hear from you!
        </p>
      </section>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
        {/* Letter Form Column */}
        <div className="lg:col-span-7">
          <div className="tp-letter relative">
            {/* Postal Stamp Top-Right */}
            <div className="absolute top-6 right-6 flex flex-col items-center">
              <div className="tp-stamp">
                <span className="text-base">🐾</span>
                <span className="text-[0.65rem] uppercase tracking-wider">Dubai Air</span>
                <span className="text-[0.6rem] opacity-70">1st Class</span>
              </div>
            </div>

            <span className="font-scrawl text-sm text-[var(--color-toffee-ink)] font-bold block mb-1">
              with love, a future puppy parent
            </span>
            <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mb-6">
              Dear TeddyPups,
            </h2>

            {posted ? (
              <div className="bg-[var(--color-grass)] border-2 border-[#2d6622]/30 rounded-2xl p-8 text-center my-6">
                <span className="text-4xl block mb-2">💌</span>
                <h3 className="font-plush text-2xl text-[#2d6622] mb-2">
                  Letter posted!
                </h3>
                <p className="text-sm text-[#2d6622]/90 leading-relaxed max-w-md mx-auto">
                  Thank you, {name || 'friend'}! We received your message and will reach out to you via WhatsApp / phone shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPosted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 px-6 py-2 rounded-full border border-[#2d6622] text-[#2d6622] text-sm font-bold hover:bg-white transition-colors"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-base md:text-lg leading-loose text-[var(--color-cocoa)] font-medium">
                  my name is{' '}
                  <input
                    type="text"
                    required
                    placeholder="your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inline-block border-b-2 border-[var(--color-cocoa)] bg-transparent px-2 py-0.5 text-[var(--color-cocoa)] font-bold placeholder-[var(--color-cocoa)]/40 focus:outline-none focus:border-[var(--color-toffee)] w-48 sm:w-60"
                  />
                  , and you can reach me on{' '}
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="inline-block border-b-2 border-[var(--color-cocoa)] bg-transparent px-2 py-0.5 text-[var(--color-cocoa)] font-bold placeholder-[var(--color-cocoa)]/40 focus:outline-none focus:border-[var(--color-toffee)] w-44 sm:w-56"
                  />
                  {' '}or by email at{' '}
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inline-block border-b-2 border-[var(--color-cocoa)] bg-transparent px-2 py-0.5 text-[var(--color-cocoa)] font-bold placeholder-[var(--color-cocoa)]/40 focus:outline-none focus:border-[var(--color-toffee)] w-48 sm:w-64"
                  />
                  .
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--color-cocoa)] mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the puppy you’re dreaming of, preferred breed, timing, or any questions…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-2xl border-2 border-[var(--color-cocoa)]/20 bg-white p-4 text-sm text-[var(--color-cocoa)] placeholder-[var(--color-cocoa)]/40 focus:outline-none focus:border-[var(--color-toffee)]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="font-scrawl text-lg text-[var(--color-toffee-ink)] font-bold">
                    sealed with a paw ♥
                  </span>
                  <button
                    type="submit"
                    className="btn btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md"
                  >
                    Post my letter 📮
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Showroom & Contact Details Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Showroom Card */}
          <div className="bg-[var(--color-honey-soft)] border-2 border-[var(--color-toffee)]/30 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏪</span>
              <div>
                <span className="font-scrawl text-sm text-[var(--color-toffee-ink)] font-bold block">
                  our dubai home
                </span>
                <h3 className="font-plush text-xl md:text-2xl text-[var(--color-cocoa)]">
                  Visit us in Downtown Dubai
                </h3>
              </div>
            </div>

            <p className="text-sm text-[var(--color-cocoa)]/80 leading-relaxed mb-6">
              {info.description}
            </p>

            <ul className="space-y-3 text-sm font-medium text-[var(--color-cocoa)]">
              <li className="flex items-start gap-2.5">
                <span className="text-base">📍</span>
                <span>{info.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base">🕒</span>
                <div>
                  <p>{info.hoursWeekday}</p>
                  <p className="text-xs text-[var(--color-cocoa)]/70">{info.hoursWeekend}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-base">📞</span>
                <a href={`tel:${info.phone}`} className="hover:text-[var(--color-toffee)] font-bold">
                  {info.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-base">✉️</span>
                <a href={`mailto:${info.email}`} className="hover:text-[var(--color-toffee)] font-bold">
                  {info.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--color-cocoa)]/10">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full justify-center py-3 rounded-full font-bold bg-[#25d366] text-white flex items-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="bg-white border border-[var(--color-cocoa)]/15 rounded-3xl p-6 shadow-sm">
            <h4 className="font-bold text-base text-[var(--color-cocoa)] mb-2 flex items-center gap-2">
              <span>🚗</span> Parking &amp; Showroom Visits
            </h4>
            <p className="text-xs md:text-sm text-[var(--color-cocoa)]/75 leading-relaxed">
              Complimentary valet and guest parking is available for showroom visitors. We recommend messaging us 30 minutes in advance on WhatsApp so we can prepare your favorite puppy for playtime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
