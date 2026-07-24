export default function Signals() {
  const signals = [
    ['SOL Whale Accumulation', 'High', '+8.4%'],
    ['ETH Exchange Outflow', 'Medium', '+3.1%'],
    ['BTC Smart Money Flow', 'High', '+5.7%'],
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">AI Signals</h1>
        <p className="text-zinc-500 mt-2">Real-time opportunities detected by Neuron intelligence.</p>

        <div className="mt-8 space-y-4">
          {signals.map(([name, risk, move]) => (
            <div key={name} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex justify-between">
              <span>{name}</span>
              <span className="text-cyan-300">{risk} · {move}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
