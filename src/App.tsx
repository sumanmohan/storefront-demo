cat << 'EOF' > src/App.tsx
import { ShopTheLook } from './components/ShopTheLook';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <header className="max-w-md mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Storefront Demo</h1>
        <p className="text-sm text-slate-600">Simulating mobile viewport A/B test rollout</p>
      </header>
      <main>
        <ShopTheLook locale="de" />
      </main>
    </div>
  );
}

export default App;
EOF