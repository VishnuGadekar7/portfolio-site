export default function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-gray-400 text-lg mb-8">Exciting articles are on the way.</p>
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-800 bg-gray-900/60">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm md:text-base">Coming soon</span>
        </div>
      </div>
    </div>
  );
}


