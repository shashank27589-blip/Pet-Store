import type { Metadata } from 'next';
import Link from 'next/link';
import { WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'How it works | TeddyPups U.A.E.',
  description: 'Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.',
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="gutter max-w-[110rem] mx-auto text-center pt-8 pb-12">
        <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
          choose your way
        </span>
        <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl text-[var(--color-cocoa)] mt-2 mb-4">
          How it works
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-cocoa)]/80 leading-relaxed">
          Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.
        </p>

        {/* Quick Jump Anchors */}
        <nav aria-label="Sections" className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { href: '#two-ways', label: '1. Two ways home' },
            { href: '#promise', label: '2. Our premium promise' },
            { href: '#delivery', label: '3. Delivery & collection' },
            { href: '#why-us', label: '4. Why choose us' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full border border-[var(--color-cocoa)]/20 bg-[var(--color-honey-soft)] text-xs md:text-sm font-bold text-[var(--color-cocoa)] hover:bg-[var(--color-peach)] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* SECTION 1: TWO WAYS HOME */}
      <section id="two-ways" className="gutter max-w-[110rem] mx-auto py-12 scroll-mt-28">
        <div className="text-center mb-12">
          <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
            your options
          </span>
          <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mt-1">
            Two ways home
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Way 1: Meet in Person */}
          <div className="bg-[var(--color-milk)] border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--color-grass)] text-[#2d6622] text-xs font-bold uppercase tracking-wider">
                  Downtown Dubai Showroom
                </span>
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="font-plush text-2xl text-[var(--color-cocoa)] mb-3">
                Meet your puppy in person
              </h3>
              <p className="text-[var(--color-cocoa)]/80 text-sm md:text-base leading-relaxed mb-6">
                Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they’re raised with care, proper nutrition, and veterinary checks.
              </p>

              <ol className="space-y-4">
                {[
                  { step: 'Step 1', title: 'Explore our puppies', desc: 'Browse our website to view available puppies. Each listing includes photos, breed details, age, and health information.' },
                  { step: 'Step 2', title: 'Choose your puppy', desc: 'Once you find a puppy you love, open their profile for more information or reach out to us directly on WhatsApp.' },
                  { step: 'Step 3', title: 'Meet before you choose', desc: 'Visit our Downtown Dubai showroom to spend time bonding before making your final decision.' },
                  { step: 'Step 4', title: 'Pick-up or delivery', desc: 'Pick up your puppy the same day or have them delivered safely to your home within Dubai.' },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-3 bg-[var(--color-honey-soft)]/60 p-3.5 rounded-xl border border-[var(--color-cocoa)]/10">
                    <span className="font-bold text-xs bg-[var(--color-peach)] text-[var(--color-toffee-ink)] px-2 py-1 rounded h-fit shrink-0">
                      {step}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--color-cocoa)]">{title}</h4>
                      <p className="text-xs md:text-sm text-[var(--color-cocoa)]/75 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-cocoa)]/10 flex gap-3">
              <Link href="/puppies" className="btn btn-primary text-sm w-full py-2.5 rounded-full font-bold bg-[var(--color-toffee)] text-white text-center">
                Browse showroom puppies
              </Link>
            </div>
          </div>

          {/* Way 2: Order Upon Request */}
          <div className="bg-[var(--color-milk)] border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--color-sky-soft)] text-[var(--color-sky-deep)] text-xs font-bold uppercase tracking-wider">
                  Europe · Korea · Dubai
                </span>
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="font-plush text-2xl text-[var(--color-cocoa)] mb-3">
                Order upon request
              </h3>
              <p className="text-[var(--color-cocoa)]/80 text-sm md:text-base leading-relaxed mb-6">
                Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world’s most sought-after teacup breeds — ethically sourced from certified, top-tier breeders across Europe, Korea, and beyond.
              </p>

              <ol className="space-y-4">
                {[
                  { step: 'Step 1', title: 'Reserve your puppy', desc: 'Browse rare breeds and place a reservation for the teacup puppy that captures your heart.' },
                  { step: 'Step 2', title: 'Personalized consultation', desc: 'We work closely with you to finalize preferences and send continuous WhatsApp photo & video updates.' },
                  { step: 'Step 3', title: 'Import and arrival', desc: 'We manage all veterinary certificates, travel bookings, and Dubai customs documentation seamlessly.' },
                  { step: 'Step 4', title: 'Welcome home', desc: 'Upon arrival, we deliver your puppy to your door with full care guidance and 24/7 post-arrival support.' },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-3 bg-[var(--color-sky-soft)]/40 p-3.5 rounded-xl border border-[var(--color-cocoa)]/10">
                    <span className="font-bold text-xs bg-[var(--color-sky-soft)] text-[var(--color-sky-deep)] px-2 py-1 rounded h-fit shrink-0">
                      {step}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--color-cocoa)]">{title}</h4>
                      <p className="text-xs md:text-sm text-[var(--color-cocoa)]/75 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-cocoa)]/10 flex gap-3">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-sm w-full py-2.5 rounded-full font-bold bg-[#25d366] text-white text-center flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                Enquire about imports
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PREMIUM PUPPY PROMISE */}
      <section id="promise" className="gutter max-w-[110rem] mx-auto py-12 scroll-mt-28">
        <div className="bg-[var(--color-honey-soft)] border-2 border-[var(--color-toffee)]/30 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
              our standards
            </span>
            <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mt-1">
              Our premium puppy promise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⭐', title: 'Hand-selected breeders', text: 'We work only with licensed, highly ethical breeders who prioritize the long-term health, genetics, and socialization of every puppy.' },
              { icon: '📸', title: 'Full transparency', text: 'Real photos, videos, and certified vet health certificates are shared before any puppy travels to ensure total peace of mind.' },
              { icon: '🛡️', title: 'Safe, stress-free delivery', text: 'We handle every detail of the travel and customs process so your puppy arrives happy, healthy, and ready to love you.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-white p-6 rounded-2xl border border-[var(--color-cocoa)]/10 shadow-sm text-center">
                <span className="text-3xl block mb-3">{icon}</span>
                <h3 className="font-bold text-lg text-[var(--color-cocoa)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-cocoa)]/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERY & COLLECTION */}
      <section id="delivery" className="gutter max-w-[110rem] mx-auto py-12 scroll-mt-28">
        <div className="text-center mb-10">
          <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
            travel & arrival
          </span>
          <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mt-1">
            Delivery &amp; collection
          </h2>
          <p className="text-base text-[var(--color-cocoa)]/80 max-w-xl mx-auto mt-2">
            From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏠', title: 'Same-day showroom pick-up', desc: 'Local puppies are available immediately — visit, fall in love, and go home together.' },
            { icon: '🚗', title: 'Delivery within Dubai', desc: 'Prefer home delivery? We bring your puppy directly to your door safely in a temperature-controlled vehicle.' },
            { icon: '✈️', title: 'Safe international cargo', desc: 'We handle all travel paperwork, crates, and airline pet protocols for a smooth international flight.' },
            { icon: '🌍', title: 'Worldwide delivery', desc: 'Our trusted partners deliver puppies safely to loving homes all around the globe with full tracking.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[var(--color-milk)] border border-[var(--color-cocoa)]/15 rounded-2xl p-6 shadow-sm">
              <span className="text-3xl block mb-3">{icon}</span>
              <h3 className="font-bold text-base text-[var(--color-cocoa)] mb-2">{title}</h3>
              <p className="text-xs md:text-sm text-[var(--color-cocoa)]/75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section id="why-us" className="gutter max-w-[110rem] mx-auto py-12 scroll-mt-28">
        <div className="bg-[var(--color-peach)]/40 border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
              the TeddyPups difference
            </span>
            <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mt-1">
              Why choose us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💖', title: 'Unique & high quality', text: 'We curate exceptional miniature lines known for hypoallergenic coats, teddy bear faces, and calm, loving temperaments.' },
              { icon: '🩺', title: 'Health guarantee', text: 'All puppies come with a verified health certificate from licensed vets, up-to-date vaccinations, deworming, and microchip.' },
              { icon: '💬', title: 'Support 24/7', text: 'Our team is here 24/7 to advise on feeding, crate training, vaccines, and settling in for complete peace of mind.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-white p-6 rounded-2xl border border-[var(--color-cocoa)]/10 shadow-sm text-center">
                <span className="text-3xl block mb-2">{icon}</span>
                <h3 className="font-bold text-base text-[var(--color-cocoa)] mb-2">{title}</h3>
                <p className="text-xs md:text-sm text-[var(--color-cocoa)]/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md"
            >
              Get in touch with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
