import WalletConnect from './components/WalletConnect';

export default function Home() {
  const features = [
    ['Smart Wallet Radar', 'Track wallets before moves become obvious.'],
    ['AI Research Engine', 'Turn blockchain data into market intelligence.'],
    ['On-chain Alerts', 'Monitor important activity in real time.'],
  ];

  const activity = [
    ['0x71...92A', 'Bought SOL', '+$142K'],
    ['0x8F...31B', 'Accumulated ETH', '+$89K'],
    ['0x4C...88D', 'Moved USDC', '$250K'],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,170,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(80,100,255,0.18),transparent_35%)]" />
      <div className="relative">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Neuron</div>
          <WalletConnect />
        </nav>

        <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-400">AI Crypto Intelligence Platform</span>
            <h1 className="text-6xl md:text-7xl font-bold mt-5 tracking-tight">
              Your AI brain for the blockchain.
            </h1>
            <p className="text-zinc-400 text-xl mt-6">
              Neuron analyzes markets, tracks smart wallets, and discovers opportunities before the crowd.
            </p>
            <div className="mt-8"><WalletConnect /></div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-zinc-950/80 backdrop-blur p-8 shadow-2xl shadow-cyan-500/10">
            <div className="flex justify-between text-sm text-cyan-400">
              <span>Neuron Terminal</span><span>ONLINE</span>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/50">
                Portfolio Intelligence
                <div className="text-3xl font-bold mt-2">$128,420.52</div>
                <div className="text-emerald-400 mt-2">+12.4% today</div>
              </div>
              <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/50">
                Smart Wallet Activity
                {activity.map(([wallet, action, amount]) => (
                  <div key={wallet} className="flex justify-between mt-4 text-sm">
                    <span>{wallet} · {action}</span><span className="text-cyan-300">{amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-3 gap-6">
          {features.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950/60 hover:border-cyan-400/50 transition">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-zinc-500 mt-3">{description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
