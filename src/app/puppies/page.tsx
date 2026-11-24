import type { Metadata } from 'next';
import PuppiesClient from './PuppiesClient';

export const metadata: Metadata = {
  title: 'Available puppies',
  description: 'Browse our available teacup and miniature puppies in Dubai. Maltipoos, Pomeranians, Toy Poodles, Yorkies and more.',
};

export default function PuppiesPage() {
  return <PuppiesClient />;
}
