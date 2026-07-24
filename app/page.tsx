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
    <main className="min-h-screen bg-black text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">Neuron</div>
        <WalletConnect />
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-zinc-500">AI Crypto Intelligence Platform</span>
          <h1 className="text-6xl md:text-7xl font-bold mt-5 tracking-tight">
            Your AI brain for the blockchain.
          </h1>
          <p className="text-zinc-400 text-xl mt-6">
            Neuron analyzes markets, tracks smart wallets, and discovers opportunities before the crowd.
          </p>
          <div className="mt-8"><WalletConnect /></div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>Neuron Terminal</span>
            <span>ONLINE</span>
          </div>
          <div className="mt-8 grid gap-4">
            <div className="rounded-xl border border-zinc-800 p-5">
              Portfolio Intelligence
              <div className="text-3xl font-bold mt-2">$128,420.52</div>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5">
              Smart Wallet Activity
              {activity.map(([wallet, action, amount]) => (
                <div key={wallet} className="flex justify-between mt-4 text-sm">
                  <span>{wallet} · {action}</span><span>{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-3 gap-6">
        {features.map(([title, description]) => (
          <div key={title} className="rounded-2xl border border-zinc-800 p-8 hover:bg-zinc-950 transition">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-zinc-500 mt-3">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
