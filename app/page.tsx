import WalletConnect from './components/WalletConnect';

export default function Home() {
  const features = [
    ['Smart Wallet Intelligence', 'Follow high conviction wallets and detect moves before the market reacts.'],
    ['AI Market Research', 'Transform blockchain activity into actionable trading intelligence.'],
    ['Real-Time Alerts', 'Stay ahead with instant notifications for important on-chain events.'],
  ];

  const activity = [
    ['0x71...92A', 'Accumulated SOL', '+$142K'],
    ['0x8F...31B', 'Bought ETH', '+$89K'],
    ['0x4C...88D', 'Moved USDC', '$250K'],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,170,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(70,90,255,0.16),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <nav className="flex justify-between items-center py-8">
          <div className="text-3xl font-bold tracking-tight">Neuron</div>
          <WalletConnect />
        </nav>

        <section className="grid lg:grid-cols-2 gap-16 items-center py-24">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm">Crypto Intelligence Terminal</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mt-6">
              The AI brain for your crypto portfolio.
            </h1>
            <p className="text-zinc-400 text-xl mt-8 max-w-xl">
              Neuron combines AI analysis, smart wallet tracking, alerts, and execution tools into one powerful trading intelligence platform.
            </p>
            <div className="mt-10">
              <WalletConnect />
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur p-8 shadow-2xl">
            <div className="flex justify-between text-sm text-cyan-400">
              <span>NEURON TERMINAL</span>
              <span>LIVE</span>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 p-6">
              <p className="text-zinc-400">Portfolio Intelligence</p>
              <h2 className="text-4xl font-bold mt-3">$128,420.52</h2>
              <p className="text-emerald-400 mt-2">+12.4% today</p>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-800 p-6">
              <p className="text-zinc-400">Smart Wallet Activity</p>
              {activity.map(([wallet, action, amount]) => (
                <div key={wallet} className="flex justify-between mt-5 text-sm">
                  <span>{wallet} · {action}</span>
                  <span className="text-cyan-300">{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 pb-24">
          {features.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 hover:border-cyan-400/50 transition">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-zinc-500 mt-4">{description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
