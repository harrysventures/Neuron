export default function AI() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Ask Neuron AI</h1>
        <p className="text-zinc-500 mt-2">Your blockchain research assistant.</p>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-cyan-300">Neuron:</p>
          <p className="mt-3 text-zinc-300">I detected increased smart wallet accumulation and unusual liquidity movement.</p>
          <div className="mt-8 rounded-xl border border-zinc-800 p-4 text-zinc-500">Ask about wallets, tokens, or market activity...</div>
        </div>
      </div>
    </main>
  );
}
