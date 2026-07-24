export default function Tokens() {
  const tokens = [
    ['SOL', '$186.42', '+7.2%', 'Strong accumulation'],
    ['ETH', '$3,420', '+3.8%', 'Exchange outflow'],
    ['BTC', '$118,900', '+2.1%', 'Whale activity'],
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Token Analytics</h1>
        <p className="text-zinc-500 mt-2">AI-powered market intelligence.</p>
        <div className="mt-8 grid gap-5">
          {tokens.map(([token, price, change, signal]) => (
            <div key={token} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex justify-between">
              <div><h2 className="text-xl font-bold">{token}</h2><p className="text-zinc-500">{signal}</p></div>
              <div className="text-right"><p>{price}</p><p className="text-cyan-300">{change}</p></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
