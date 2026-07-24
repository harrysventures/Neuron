export default function Wallets() {
  const wallets = [
    ['0x71...92A', 'Smart Money', '$4.2M'],
    ['0x8F...31B', 'Whale', '$1.8M'],
    ['0x4C...88D', 'Fund Wallet', '$920K'],
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Wallet Intelligence</h1>
        <p className="text-zinc-500 mt-2">Track wallets that move markets.</p>

        <div className="mt-8 grid gap-5">
          {wallets.map(([address, type, value]) => (
            <div key={address} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex justify-between">
              <div>{address}<div className="text-zinc-500">{type}</div></div>
              <div className="text-cyan-300">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
