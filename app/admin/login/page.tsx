export default function AdminLoginPage() {
  return (
    <main className="mx-auto max-w-sm px-4 py-10">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-lg font-bold">Admin Portal</h1>
        <p className="mt-1 text-sm text-slate-600">Restricted access only.</p>
        <input
          className="mt-4 w-full rounded-lg border border-slate-300 p-3"
          placeholder="Admin email"
        />
        <input
          className="mt-3 w-full rounded-lg border border-slate-300 p-3"
          placeholder="Password"
          type="password"
        />
        <button className="mt-4 w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white">
          Sign in
        </button>
      </section>
    </main>
  );
}
