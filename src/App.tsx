import { useState } from 'react';
import { ShopTheLook } from './components/ShopTheLook';

function App() {
  const [locale, setLocale] = useState<'de' | 'fr'>('de');

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <header className="max-w-md mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Storefront Demo</h1>
        <p className="text-xs text-slate-500 mt-1">
          Resize window or use DevTools (&lt; 768px) to inspect mobile breakpoint
        </p>

        {/* Locale switcher for AC-8 CMS localization demo */}
        <div className="mt-4 inline-flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400 px-2">CMS Locale:</span>
          <button
            type="button"
            onClick={() => setLocale('de')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              locale === 'de'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            DE (German)
          </button>
          <button
            type="button"
            onClick={() => setLocale('fr')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              locale === 'fr'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            FR (French)
          </button>
        </div>
      </header>

      <main>
        <ShopTheLook locale={locale} />
      </main>
    </div>
  );
}

export default App;
