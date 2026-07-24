export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Neuron</div>
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
            See crypto markets through a smarter brain.
          </h1>
          <p className="mt-8 text-xl text-zinc-400 max-w-xl">
            Neuron combines AI analysis, smart wallet tracking, and real-time market intelligence into one powerful crypto terminal.
          </p>
          <button className="mt-10 rounded-xl bg-white px-8 py-4 text-black font-semibold">
            Connect Wallet
          </button>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
          <div className="text-sm text-zinc-500">Neuron Intelligence Dashboard</div>
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-zinc-800 p-5">
              Smart Wallet Activity
              <div className="text-zinc-500 mt-2">Tracking high-conviction on-chain movements</div>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5">
              AI Market Signals
              <div className="text-zinc-500 mt-2">Real-time insights powered by intelligence models</div>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5">
              Portfolio Analytics
              <div className="text-zinc-500 mt-2">Understand your positions and opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24 grid md:grid-cols-3 gap-6">
        {[
          ['Wallet Intelligence', 'Monitor smart money and emerging trends.'],
          ['AI Research', 'Instant market analysis and narratives.'],
          ['On-chain Alerts', 'Never miss important movements.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-4 text-zinc-500">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
