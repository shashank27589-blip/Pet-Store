// Comprehensive data for TeddyPups clone
// Extracted and aligned with https://puppy.instabizweb.com/

export const WA_URL = "https://wa.me/971500000000?text=Hi%20TeddyPups%2C%20I%27d%20like%20to%20enquire%20about%20a%20puppy.";

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  breed: string;
  gender: 'Male' | 'Female';
  age: string;
  weight: string;
  color: string;
  price: number;
  currency: string;
  status: 'available' | 'reserved' | 'sold';
  source: 'local' | 'imported';
  description: string;
  image: string;
  imageBg: string;
  hasVideo?: boolean;
  tags: string[];
}

export const puppies: Puppy[] = [
  {
    "id": "1",
    "slug": "maltipoo-max-male",
    "name": "Max",
    "breed": "Max Maltipoo",
    "gender": "Male",
    "age": "3 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 7500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Max is an adorable, well-socialized Max Maltipoo puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
    "hasVideo": true,
    "tags": [
      "Boy",
      "3 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f7e0b8"
  },
  {
    "id": "2",
    "slug": "korean-teacup-maltipoo-female",
    "name": "Korean",
    "breed": "Korean Teacup Maltipoo girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 8500,
    "currency": "AED",
    "status": "available",
    "source": "imported",
    "description": "Korean is an adorable, well-socialized Korean Teacup Maltipoo girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
    "hasVideo": true,
    "tags": [
      "Boy",
      "2 months",
      "Korean Import",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f5d5a0"
  },
  {
    "id": "3",
    "slug": "korean-teacup-poodle-female",
    "name": "Korean",
    "breed": "Korean Teacup Poodle girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 9500,
    "currency": "AED",
    "status": "available",
    "source": "imported",
    "description": "Korean is an adorable, well-socialized Korean Teacup Poodle girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Korean Import",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#e8f0f8"
  },
  {
    "id": "4",
    "slug": "maltipoo-cavapoo-male",
    "name": "Maltipoo",
    "breed": "Maltipoo &amp; Cavapoo boy",
    "gender": "Male",
    "age": "3 months Maltipoo &amp; 2 months Cavapoo",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 10500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Maltipoo is an adorable, well-socialized Maltipoo &amp; Cavapoo boy puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
    "hasVideo": true,
    "tags": [
      "Boy",
      "3 months Maltipoo &amp; 2 months Cavapoo",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f0e8d8"
  },
  {
    "id": "5",
    "slug": "toy-poodle-male-female",
    "name": "Toy",
    "breed": "Toy Poodle boy &amp; girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 11500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Toy is an adorable, well-socialized Toy Poodle boy &amp; girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f8f4e8"
  },
  {
    "id": "6",
    "slug": "maltipoo-female-2",
    "name": "Maltipoo",
    "breed": "Maltipoo girl",
    "gender": "Male",
    "age": "3 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 7500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Maltipoo is an adorable, well-socialized Maltipoo girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
    "hasVideo": true,
    "tags": [
      "Boy",
      "3 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f2eaf4"
  },
  {
    "id": "7",
    "slug": "pomeranian-female",
    "name": "Pomeranian",
    "breed": "Pomeranian girl",
    "gender": "Male",
    "age": "3 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 8500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Pomeranian is an adorable, well-socialized Pomeranian girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "3 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#fde8d0"
  },
  {
    "id": "8",
    "slug": "copper-male",
    "name": "Copper",
    "breed": "Copper Cavapoo",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 9500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Copper is an adorable, well-socialized Copper Cavapoo puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#fde8c0"
  },
  {
    "id": "9",
    "slug": "shitzu-female",
    "name": "Shih",
    "breed": "Shih Tzu girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 10500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Shih is an adorable, well-socialized Shih Tzu girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f7e0b8"
  },
  {
    "id": "10",
    "slug": "shitzu-male",
    "name": "Shih",
    "breed": "Shih Tzu boy",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 11500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Shih is an adorable, well-socialized Shih Tzu boy puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f5d5a0"
  },
  {
    "id": "11",
    "slug": "maltipoo-female-1",
    "name": "Maltipoo",
    "breed": "Maltipoo girl",
    "gender": "Male",
    "age": "2.5 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 7500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Maltipoo is an adorable, well-socialized Maltipoo girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2.5 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#e8f0f8"
  },
  {
    "id": "12",
    "slug": "maltipoo-female",
    "name": "Maltipoo",
    "breed": "Maltipoo girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 8500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "Maltipoo is an adorable, well-socialized Maltipoo girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f0e8d8"
  },
  {
    "id": "13",
    "slug": "korean-teacup-pomeranian-1",
    "name": "Korean",
    "breed": "Korean Teacup Pomeranian girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 9500,
    "currency": "AED",
    "status": "available",
    "source": "imported",
    "description": "Korean is an adorable, well-socialized Korean Teacup Pomeranian girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Korean Import",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f8f4e8"
  },
  {
    "id": "14",
    "slug": "korean-teacup-pomeranian",
    "name": "Korean",
    "breed": "Korean Teacup Pomeranian girl",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 10500,
    "currency": "AED",
    "status": "available",
    "source": "imported",
    "description": "Korean is an adorable, well-socialized Korean Teacup Pomeranian girl puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Korean Import",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f2eaf4"
  },
  {
    "id": "15",
    "slug": "korean-teacup-pomeranian-male",
    "name": "Korean",
    "breed": "Korean Teacup Pomeranian boy",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 11500,
    "currency": "AED",
    "status": "available",
    "source": "imported",
    "description": "Korean is an adorable, well-socialized Korean Teacup Pomeranian boy puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Korean Import",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#fde8d0"
  },
  {
    "id": "16",
    "slug": "pomeranian-ace-boy",
    "name": "gone",
    "breed": "gone home ♥ Ace",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 7500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "gone is an adorable, well-socialized gone home ♥ Ace puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#fde8c0"
  },
  {
    "id": "17",
    "slug": "poodle-leo-male",
    "name": "gone",
    "breed": "gone home ♥ Leo",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 8500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "gone is an adorable, well-socialized gone home ♥ Leo puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f7e0b8"
  },
  {
    "id": "18",
    "slug": "maltipoo-mia-girl",
    "name": "gone",
    "breed": "gone home ♥ Mia",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 9500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "gone is an adorable, well-socialized gone home ♥ Mia puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f5d5a0"
  },
  {
    "id": "19",
    "slug": "maltipoo-sadie-girl",
    "name": "gone",
    "breed": "gone home ♥ Sadie",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 10500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "gone is an adorable, well-socialized gone home ♥ Sadie puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#e8f0f8"
  },
  {
    "id": "20",
    "slug": "blue-marle-pomeranian",
    "name": "gone",
    "breed": "gone home ♥ Pomeranian",
    "gender": "Male",
    "age": "2 months",
    "weight": "600g - 1.2kg",
    "color": "Cream / Apricot / White",
    "price": 11500,
    "currency": "AED",
    "status": "available",
    "source": "local",
    "description": "gone is an adorable, well-socialized gone home ♥ Pomeranian puppy with a wonderful playful and affectionate personality. Fully vaccinated, microchipped, and health-certified.",
    "image": "/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif",
    "hasVideo": false,
    "tags": [
      "Boy",
      "2 months",
      "Dubai Showroom",
      "Hypoallergenic",
      "Health Checked"
    ],
    "imageBg": "#f0e8d8"
  }
];

export interface GoneHomeTicket {
  style: string;
  href: string;
  img: string;
  alt: string;
  kicker: string;
  name: string;
  meta: string;
  origin: string;
  destination: string;
}

export const goneHomeTickets: GoneHomeTicket[] = [
  {
    "style": "--tilt:-1.4deg;--i:0",
    "href": "/puppies/pomeranian-ace-boy",
    "img": "/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif",
    "alt": "Ace, male Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Ace",
    "meta": "Pomeranian, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.1deg;--i:1",
    "href": "/puppies/poodle-leo-male",
    "img": "/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif",
    "alt": "Leo, male Poodle puppy",
    "kicker": "one ticket home",
    "name": "Leo",
    "meta": "Poodle, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-0.6deg;--i:2",
    "href": "/puppies/maltipoo-mia-girl",
    "img": "/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif",
    "alt": "Sadie, female Maltipoo puppy, photo 4",
    "kicker": "one ticket home",
    "name": "Mia",
    "meta": "Maltipoo, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.6deg;--i:3",
    "href": "/puppies/maltipoo-sadie-girl",
    "img": "/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif",
    "alt": "Sadie, female Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Sadie",
    "meta": "Maltipoo, girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.1deg;--i:4",
    "href": "/puppies/blue-marle-pomeranian",
    "img": "/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif",
    "alt": "Male Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Pomeranian",
    "meta": "Boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:0.8deg;--i:5",
    "href": "/puppies/pomsky-ollie-boy",
    "img": "/media/Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif",
    "alt": "Ollie, male Pomsky puppy",
    "kicker": "one ticket home",
    "name": "Ollie",
    "meta": "Pomsky, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.4deg;--i:0",
    "href": "/puppies/maltipoo-bruno-boy",
    "img": "/media/w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif",
    "alt": "Bruno, male Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Bruno",
    "meta": "Maltipoo, boy",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.1deg;--i:1",
    "href": "/puppies/maltese-buddy-male",
    "img": "/media/5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif",
    "alt": "Buddy, male Maltese puppy",
    "kicker": "one ticket home",
    "name": "Buddy",
    "meta": "Maltese, boy",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-0.6deg;--i:2",
    "href": "/puppies/maltese-charlie-male",
    "img": "/media/0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif",
    "alt": "Charlie, male Maltese puppy",
    "kicker": "one ticket home",
    "name": "Charlie",
    "meta": "Maltese, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.6deg;--i:3",
    "href": "/puppies/pomeranian-daisy-girl",
    "img": "/media/d_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif",
    "alt": "Daisy, female Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Daisy",
    "meta": "Pomeranian, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.1deg;--i:4",
    "href": "/puppies/pomeranian-bella-female",
    "img": "/media/9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif",
    "alt": "Bella, female Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Bella",
    "meta": "Pomeranian, girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:0.8deg;--i:5",
    "href": "/puppies/poodle-teddy-male",
    "img": "/media/9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif",
    "alt": "Teddy, male Poodle puppy",
    "kicker": "one ticket home",
    "name": "Teddy",
    "meta": "Poodle, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.4deg;--i:0",
    "href": "/puppies/poodle-molly-female",
    "img": "/media/WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif",
    "alt": "Molly, female Poodle puppy",
    "kicker": "one ticket home",
    "name": "Molly",
    "meta": "Poodle, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.1deg;--i:1",
    "href": "/puppies/pomski-coco-girl",
    "img": "/media/CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif",
    "alt": "Coco, female Pomsky puppy",
    "kicker": "one ticket home",
    "name": "Coco",
    "meta": "Pomsky, girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-0.6deg;--i:2",
    "href": "/puppies/pomsky-rosie-girl",
    "img": "/media/FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif",
    "alt": "Rosie, female Pomsky puppy",
    "kicker": "one ticket home",
    "name": "Rosie",
    "meta": "Pomsky, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.6deg;--i:3",
    "href": "/puppies/pomeranian-leo-boy",
    "img": "/media/5iCniMJshKud/8bfe42003c/27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif",
    "alt": "Leo, male Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Leo",
    "meta": "Pomeranian, boy",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.1deg;--i:4",
    "href": "/puppies/poodle-molly-girl",
    "img": "/media/lsaKvJhLwHB4/4cf2a02ed1/27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif",
    "alt": "Molly, female Poodle puppy",
    "kicker": "one ticket home",
    "name": "Molly",
    "meta": "Poodle, girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:0.8deg;--i:5",
    "href": "/puppies/poodle-rocky-boy",
    "img": "/media/51aMfxO7oeVe/6b70c96b1e/27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif",
    "alt": "Rocky, male Poodle puppy",
    "kicker": "one ticket home",
    "name": "Rocky",
    "meta": "Poodle, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.4deg;--i:0",
    "href": "/puppies/maltipoo-sophie-girl",
    "img": "/media/PYYTxpqgo76_/ae53ae6d3c/27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif",
    "alt": "Sophie, female Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Sophie",
    "meta": "Maltipoo, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.1deg;--i:1",
    "href": "/puppies/maltipoo-lola-girl",
    "img": "/media/HPs4cYizPzy9/22b104e2c5/27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif",
    "alt": "Lola, female Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Lola",
    "meta": "Maltipoo, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-0.6deg;--i:2",
    "href": "/puppies/pomeranian-rex-boy",
    "img": "/media/QIIvMqQTe9jr/d997ae172e/27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif",
    "alt": "Rex, male Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Rex",
    "meta": "Pomeranian, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.6deg;--i:3",
    "href": "/puppies/pomsky-finn-male",
    "img": "/media/tEAwWspMD8iG/1f55440daf/27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif",
    "alt": "Finn, male Pomsky puppy",
    "kicker": "one ticket home",
    "name": "Finn",
    "meta": "Pomsky, boy",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.1deg;--i:4",
    "href": "/puppies/maltipoo-zoe-girl",
    "img": "/media/fxj_9aZOSxQM/90c10b9c91/27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif",
    "alt": "Zoe, female Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Zoe",
    "meta": "Maltipoo, girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:0.8deg;--i:5",
    "href": "/puppies/pomeranian-mimi-girl",
    "img": "/media/BLOZLPixUcjE/ea8ee97fd9/27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif",
    "alt": "Mimi, female Pomeranian puppy",
    "kicker": "one ticket home",
    "name": "Mimi",
    "meta": "Pomeranian, girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-1.4deg;--i:0",
    "href": "/puppies/bichon-bailey-boy",
    "img": "/media/fI-hlHuSwrRw/e5ae9b6384/27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif",
    "alt": "Bailey, male Bichon puppy",
    "kicker": "one ticket home",
    "name": "Bailey",
    "meta": "Bichon, boy",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:1.1deg;--i:1",
    "href": "/puppies/puppy",
    "img": "/media/Cl0B4v8U3Y-d/3dea5a9fec/27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif",
    "alt": "Female Maltipoo puppy",
    "kicker": "one ticket home",
    "name": "Maltipoo",
    "meta": "Girl",
    "origin": "TeddyPups",
    "destination": "home ♥"
  },
  {
    "style": "--tilt:-0.6deg;--i:2",
    "href": "/puppies/maltipo",
    "img": "/media/sFgPBojUhFBo/5ac1429cf4/27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif",
    "alt": "Female Poodle puppy",
    "kicker": "one ticket home",
    "name": "Poodle",
    "meta": "Girl",
    "origin": "Dubai showroom",
    "destination": "home ♥"
  }
];

export interface HappyMoment {
  img: string;
  alt: string;
  text?: string;
}

export const happyMoments: HappyMoment[] = [
  {
    "img": "/media/TUslu26Ueaq-/9c3516c040/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/OcgEePeBmGuu/41fb22320b/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/RYkyuv4DBCTC/d9e02a0dc8/edb2f5_7ed2ee1ba89b4230b52f5e3981b1b198-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/d267R4d3lMSv/96d8604ca3/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/XqxhmNftVKic/5adf2f28fe/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/1II_yVrwWdOG/c07a8ef9f1/edb2f5_258010c661f64f3b8b952c5a2f7677de-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/bKP7vwN0R2OU/1aa47534b5/edb2f5_b8d76dffb97f46b5a9f2aaf9c1067b4b-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/ToVkYw_K3UrY/81a2bd9ac1/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/stDfO2jMfvb_/6228a11db2/edb2f5_4b08003ef57c4663b55c9ac0c4147c36-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/K-U7RwW9j2A9/09d7edc058/edb2f5_22d3cc4ae0e14216a0d3a1ec9796649f-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/s23WYu0qJQ_h/d0ad444e50/27b888_a887dbff51fb420d95774cce6a8d54fb-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/ab5hEGUKO4aY/de923fd8eb/edb2f5_d5177ed7ae1344d7acc11e9770df7b74-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/yEfM9sdMluCX/46ecd570ef/edb2f5_099acc542ba14359aa8c0f933cb4ef2c-mv2.jpeg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/_41LE-nBf847/2ea8e152eb/27b888_76aa3ad05faf40bd8eb2a6d826737525-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/tuarxe-C9j5H/913026dd39/27b888_b22e1ced7da74ea7a14a68474d8c2dc0-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/UuJqjsRN-wKL/047b245604/b942a5_a1ead54bc6934e5ab953e98d4aa0312d-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/qZ5mPGpLO-G9/1d4c092a1e/27b888_4af83a5cffb44045bcab615b0cbc237c-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/xHEMhVTwflC_/8859dd626c/b942a5_65113182432144f49bd50bb009e7d88c-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/QYUwdroeZC35/52e467dddb/b942a5_03ab53e8167c454eaf75e37491e51b03-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/rZE7ypWUH0wz/3ccfc972cd/27b888_d8c90ec444654b9c964dc2527814ceaf-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/Sg8iy_EOrJah/684699406d/27b888_3594e056bf964a7a839a1bd5ac0c859e-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/CVsVLsnCV0L3/626d9c9855/27b888_522e394293a845bcae93adec46bf499c-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/1ziQH1fmyl-k/6193c5fa7f/27b888_d76b636e082842139943ca9fece80632-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/2BoSaeBhLer8/05c9d02f5a/27b888_48694c17ac634f32b63bcd21052c10c3-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/QLO4DWvoWlJY/7ccb7aae32/27b888_13d2747a7f454379a5670b552690f728-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/xaIi_2gMoj_N/27123a3e2c/27b888_3375199e717a4f6ca02e902672664e79-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/GyAYtgNRGHUw/379090aed6/27b888_3f1463156de645feb90bf306b2572b76-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/NCnzIyNwzZiC/11eddf4e8e/27b888_f405d17027174cdfa4437b9b1d84eaa2-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/2RCKCPAW7oIk/31af5cd06d/27b888_9b40a22ad84e4e8cbf625acab1bc8e4f-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/d9RWhCKfRHOc/c549944174/27b888_0ad908eb6ba745b7b3e1426338af1803-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/tI7E08CB-sVp/b655581264/27b888_a649f91c871046d2a4231ceda00ec982-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/uL-D7uBZjs12/3cc9e2690e/27b888_96b9eb6428164f41b124137673bc865c-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/AK4nDMw3v53a/9ded532913/27b888_89af9713331443c3b9f4b72a83d646e3-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/SXZSpIZJimpQ/0a488a56a5/27b888_927dffc200a44f9dafcb953b765beec0-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/NBeJ3y_g-Iee/a4a5827b07/27b888_bba195dd5eec46e798d3dc05790f1e99-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/6Abv8pfqHoEA/a6fb93823b/27b888_ff288b45f9694416b3f3d019d7a9a1d4-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/UFzHrheMHQmi/7ce45654d8/27b888_ade4298d721a444888379393d06745cb-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/937wIvKxefpy/a42f072027/27b888_664db706809c46eea8e75db06885de6a-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/BxM75hECdt9p/eb17b83cc8/27b888_659cfe02524541e0ab0a94cc71a2a189-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/O88qTc2s7KH8/032fd55fa2/27b888_da4b7d60a604414e95bfb91efcdad6f6-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/PAAMBTTfmXOK/37d59d6ee3/27b888_dad1db0c47834985a25b98b067cf563e-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/9A74-QBbi78w/d788ec6f31/27b888_96324661ab4742649af7d72ba465f0a8-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/0wEBefsp1F5j/1b67ab78e0/27b888_8727fecbf89b4648b443b9bfab83fffd-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/hu2K_kmYs7s9/0e8b423b7c/27b888_b5a504249d254ac7a02693ba340c74fb-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/LpUvbTEyekwN/556d16df42/27b888_74e15c47a77b48a39e5174d2657bc417-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "Lulu 🧸 with her new mummy ❤️"
  },
  {
    "img": "/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "Adorable Maltipoo baby 🧸❤️"
  },
  {
    "img": "/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "My new teddy puppy 🥰🧸"
  },
  {
    "img": "/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "Our new puppies 🧸🥰🤗"
  },
  {
    "img": "/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "New puppy 🧸😍"
  },
  {
    "img": "/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "Gang of 3 😍🧸"
  },
  {
    "img": "/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "So happy 😍😍"
  },
  {
    "img": "/media/2ZpD4FCAriYZ/56ea196e78/27b888_160a7ee974d74fc7ae452afc6e5fccea-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/BarQuR6VS6XX/3acd4e6449/27b888_2255683016304a278b17353cb21c1f45-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/l_M8IYdzFJHb/bc8ad2f58f/27b888_80b7b3c14907460f8dc1457ffd99a99d-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/aAf69e7YtFrb/e162c491b3/27b888_f18596e1a72543d695d79416569bef23-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/qesMnrX7cliq/da5bec6e86/27b888_3def48865368404392a98437a48e6ec7-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/sqPa3JOR3OPc/4273c20214/27b888_62c31ea0db1f452a8ca28369aef45c8d-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": "New pup 🤗💫"
  },
  {
    "img": "/media/NaV9L3-u1vss/cb3d13765a/27b888_91d95c12076a4efd94128b14dceb216f-mv2.avif",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/EINH5_Xbws14/dae797ecdf/27b888_202b27e8ecca4b4d8715c8f648bd35e4-mv2.avif",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/wyDhW6yEQ6ef/e012615aab/b942a5_9381a9a0ca3e40b4b4f31906cf7fda56-mv2.png",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/n6BJMOg_-QYI/82329c84b0/b942a5_dc4082b7b0454025bcef4c790c4f4e68-mv2.jpg",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  },
  {
    "img": "/media/nTiIYDlSaIjG/334a39f6a3/27b888_febae47e079240d28d1602b54813dca4-mv2.avif",
    "alt": "A happy TeddyPups family with their new puppy",
    "text": ""
  }
];

export const faqItems = [
  {
    id: '1',
    question: 'Are your puppies vaccinated and health-checked?',
    answer: 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.',
    tilt: '-1.6deg',
    pin: 'var(--color-toffee)',
  },
  {
    id: '2',
    question: 'Can I meet a puppy before I decide?',
    answer: 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.',
    tilt: '1.2deg',
    pin: 'var(--color-sky-deep)',
  },
  {
    id: '3',
    question: 'Can I take my puppy home the same day?',
    answer: 'Local puppies are available immediately, so you can take your puppy home the same day.',
    tilt: '-0.8deg',
    pin: '#d9a13c',
  },
  {
    id: '4',
    question: 'Do you import puppies from abroad?',
    answer: 'Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.',
    tilt: '1.8deg',
    pin: '#c45a6a',
  },
  {
    id: '5',
    question: 'How does an imported puppy travel to Dubai?',
    answer: 'We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.',
    tilt: '-1.2deg',
    pin: 'var(--color-toffee)',
  },
  {
    id: '6',
    question: 'Will I see photos and health details first?',
    answer: 'Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.',
    tilt: '0.7deg',
    pin: '#6b9e5c',
  },
  {
    id: '7',
    question: 'Do you deliver?',
    answer: 'Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.',
    tilt: '-1.4deg',
    pin: 'var(--color-sky-deep)',
  },
  {
    id: '8',
    question: 'Which breeds do you usually have?',
    answer: 'Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.',
    tilt: '1.0deg',
    pin: '#a05ca4',
  },
  {
    id: '9',
    question: 'Is there help after my puppy comes home?',
    answer: 'Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.',
    tilt: '-0.6deg',
    pin: '#c45a6a',
  },
];

export const happyFamiliesTestimonial = {
  quote: "“ TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind. ”",
  author: "Sarah M.",
  location: "Dubai, UAE"
};

export const showroomInfo = {
  name: "TeddyPups Downtown Dubai",
  address: "Downtown Dubai, United Arab Emirates",
  phone: "+971 50 000 0000",
  email: "hello@teddypups.ae",
  hoursWeekday: "Sunday – Thursday: 10:00 AM – 8:00 PM",
  hoursWeekend: "Friday – Saturday: 11:00 AM – 9:00 PM",
  description: "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks."
};
