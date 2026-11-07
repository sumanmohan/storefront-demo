import React, { useState } from 'react';

interface LookItem {
  id: string;
  name: string;
  imageUrl: string;
  alt: string;
}

const SAMPLE_LOOKS: LookItem[] = [
  {
    id: 'look-1',
    name: 'Autumn Trenchcoat & Denim',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    alt: 'Shop the look - Autumn outfit',
  },
  {
    id: 'look-2',
    name: 'Monochrome Urban Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600',
    alt: 'Shop the look - Monochrome outfit',
  },
  {
    id: 'look-3',
    name: 'Spring Pastel Casual',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
    alt: 'Shop the look - Pastel outfit',
  },
];

interface ShopTheLookProps {
  locale?: 'de' | 'fr';
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({ locale = 'de' }) => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);

  const labels = {
    de: 'Alle Produkte entdecken', // To be updated to "Die Produkte anzeigen" (AC-8)
    fr: 'Tout découvrir',          // To be updated to "Afficher les produits" (AC-8)
  };

  const currentLook = SAMPLE_LOOKS[activeLookIndex];

  return (
    <section className="relative p-6 border rounded-xl bg-slate-50 max-w-md mx-auto shadow-sm my-6">
      {/* Look Selector (for demo & testing image swaps) */}
      <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
        <span className="font-medium text-slate-700">Look: {currentLook.name}</span>
        <div className="flex gap-1">
          {SAMPLE_LOOKS.map((look, idx) => (
            <button
              key={look.id}
              onClick={() => setActiveLookIndex(idx)}
              className={`w-6 h-6 rounded-full text-xs font-semibold border transition-all ${
                activeLookIndex === idx
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
              }`}
              title={`Switch to ${look.name}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-slate-200">
        <img
          src={currentLook.imageUrl}
          alt={currentLook.alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-slate-700 shadow-sm">
          Shop The Look
        </span>
      </div>

      {/* Mobile Breakpoint (< 768px): Primary CTA Button for AC-7 */}
      <div className="block md:hidden mt-4">
        <button
          className="w-full py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-[0.99]"
          data-variant="primary"
          data-track="stl-cta-click"
          data-look-id={currentLook.id}
          onClick={() => {
            console.log(`[Telemetry] stl-cta-click fired for look: ${currentLook.id}, locale: ${locale}`);
            alert(`Telemetry fired: stl-cta-click (Look: ${currentLook.name}, Locale: ${locale})`);
          }}
        >
          {labels[locale]}
        </button>
      </div>

      {/* Desktop / Tablet View (>= 768px): Kept separate as per AC-7 specification */}
      <div className="hidden md:block mt-4 text-center text-sm text-slate-500 py-2 border border-dashed rounded-lg">
        Hover over items to view product details (Desktop View)
      </div>
    </section>
  );
};