import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { puppies } from '@/lib/data';
import PuppyDetailClient from './PuppyDetailClient';

export function generateStaticParams() {
  return puppies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pup = puppies.find((p) => p.slug === slug);
  if (!pup) return { title: 'Puppy not found | TeddyPups' };
  return {
    title: `${pup.name} — ${pup.breed} | TeddyPups U.A.E.`,
    description: pup.description,
  };
}

export default async function PuppyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentIndex = puppies.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const pup = puppies[currentIndex];
  const prevPup = currentIndex > 0 ? puppies[currentIndex - 1] : puppies[puppies.length - 1];
  const nextPup = currentIndex < puppies.length - 1 ? puppies[currentIndex + 1] : puppies[0];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <PuppyDetailClient pup={pup} prevPup={prevPup} nextPup={nextPup} />
    </main>
  );
}
