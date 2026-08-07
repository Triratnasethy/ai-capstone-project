export const dynamic = 'force-dynamic';

export default async function HealthPage() {
  // Fetch some dummy data to prove fetching works on this route
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-green-600 flex items-center gap-2">
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
        System Health
      </h1>
      <div className="p-6 bg-white border rounded-xl shadow-sm space-y-4">
        <p className="text-slate-600 font-medium border-b pb-2">Data Fetching Status:</p>
        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
        <p className="text-sm text-slate-500 mt-2">
          If you see the JSON above, Server Component data fetching is working correctly!
        </p>
      </div>
    </div>
  );
}
