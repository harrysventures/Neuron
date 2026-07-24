export default function Alerts() {
  const alerts = [
    'Whale wallet purchased 250K SOL',
    'Large ETH exchange outflow detected',
    'New smart money wallet discovered',
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Alerts Center</h1>
        <p className="text-zinc-500 mt-2">Your personalized blockchain monitoring feed.</p>
        <div className="mt-8 space-y-4">
          {alerts.map((alert) => (
            <div key={alert} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-cyan-200">
              {alert}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
