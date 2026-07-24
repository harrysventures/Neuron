export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Neuron</div>
        <button className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-white hover:text-black transition">
          Connect Wallet
        </button>
      </nav>

      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 mb-8">
            AI-powered crypto intelligence
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            The intelligence layer for crypto.
          </h1>
          <p className="mt-8 text-xl text-zinc-400 max-w-xl">
            Track smart money, analyze markets, and discover opportunities with an AI-powered crypto terminal.
          </p>
          <button className="mt-10 rounded-xl bg-white px-8 py-4 text-black font-semibold">
            Connect Wallet
          </button>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>Neuron Terminal</span>
            <span>LIVE</span>
          </div>
          <div className="mt-8 grid gap-4">
            <div className="rounded-xl border border-zinc-800 p-5 hover:border-zinc-500 transition">
              <div className="text-lg">Smart Wallet Radar</div>
              <div className="text-zinc-500 mt-2">Following high-conviction wallets before the market reacts.</div>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 hover:border-zinc-500 transition">
              <div className="text-lg">AI Market Engine</div>
              <div className="text-zinc-500 mt-2">Real-time narratives, sentiment, and market intelligence.</div>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 hover:border-zinc-500 transition">
              <div className="text-lg">Portfolio Brain</div>
              <div className="text-zinc-500 mt-2">Understand risk, positions, and opportunities.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ['10K+', 'Wallets tracked'],
            ['24/7', 'Market monitoring'],
            ['AI', 'Research engine'],
            ['Real-time', 'On-chain alerts'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-800 p-8">
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-zinc-500 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <h2 className="text-4xl font-bold">Built for the next generation of crypto users.</h2>
        <p className="mt-4 text-zinc-500 max-w-2xl">
          Neuron turns blockchain data into actionable intelligence.
        </p>
      </section>
    </main>
  );
}
