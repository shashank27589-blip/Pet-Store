import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/icons";
import { WA_URL } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#fffdf8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    template: "%s | TeddyPups U.A.E.",
  },
  description: "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
  applicationName: "TeddyPups U.A.E.",
  keywords: ["teacup puppies Dubai", "Maltipoo Dubai", "Pomeranian Dubai", "toy poodle Dubai", "Yorkshire terrier Dubai", "puppy shop Dubai"],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description: "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
    type: "website",
    locale: "en_AE",
    siteName: "TeddyPups U.A.E.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description: "Teddy bear and teacup puppies in Dubai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Pacifico&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:left-4 focus:top-4 focus:rounded-full focus:px-5 focus:py-3 focus:font-semibold bg-[#2a170e] text-[#fffdf8]"
        >
          Skip to content
        </a>

        <Header />

        <div id="main" tabIndex={-1} className="relative outline-none">
          {children}
        </div>

        <Footer />

        {/* Floating WhatsApp button */}
        <a
          href={WA_URL}
          className="tp-wa-float fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8 fill-white" />
        </a>
      </body>
    </html>
  );
}
