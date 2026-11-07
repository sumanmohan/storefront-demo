import React from 'react';

interface ShopTheLookProps {
  locale?: 'de' | 'fr';
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({ locale = 'de' }) => {
  const labels = {
    de: 'Alle Produkte entdecken', // To be updated to "Die Produkte anzeigen" in AC-8
    fr: 'Tout découvrir',          // To be updated to "Afficher les produits" in AC-8
  };

  return (
    <section className="relative p-6 border rounded-xl bg-slate-50 max-w-md mx-auto shadow-sm my-8">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600"
          alt="Shop the look outfit"
          className="w-full h-72 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-slate-700">
          Shop The Look
        </span>
      </div>

      {/* Mobile breakpoint view (< 768px): Updated for AC-7 to primary button */}
      <div className="block md:hidden mt-4">
        <button
          className="w-full py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-[0.99]"
          data-variant="primary"
          data-track="stl-cta-click"
        >
          {labels[locale]}
        </button>
      </div>

      {/* Desktop/Tablet view (>= 768px): remains untouched */}
      <div className="hidden md:block mt-4 text-center text-sm text-slate-500">
        Hover over items to view product details (Desktop View)
      </div>
    </section>
  );
};
