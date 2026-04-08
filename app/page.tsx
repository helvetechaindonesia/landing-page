import { ArrowRight, Code2, Cpu, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-200 selection:bg-cyan-500/30 font-sans overflow-hidden relative">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar Minimalis */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <h1 className="text-2xl font-bold tracking-tighter text-white">
          helve<span className="text-cyan-400">techa</span>.
        </h1>
        <button className="text-sm font-medium hover:text-cyan-400 transition-colors">
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 mb-8">
          <Sparkles size={16} />
          <span>Pioneering the Digital Unknown</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Experimental <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Digital Development
          </span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          Kami bukan sekadar *agency*. Helvetecha bereksperimen dengan teknologi mutakhir untuk menciptakan pengalaman digital, produk, dan sistem yang menembus batas konvensional.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all">
            Start a Project <ArrowRight size={18} />
          </button>
          <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all">
            Explore Our Labs
          </button>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <Code2 className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Next-Gen Architecture</h3>
            <p className="text-gray-400 leading-relaxed">
              Membangun fondasi web dan aplikasi yang sangat cepat, *scalable*, dan siap menghadapi *traffic* modern menggunakan teknologi terkini.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
            <Cpu className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Experimental Systems</h3>
            <p className="text-gray-400 leading-relaxed">
              Integrasi database *real-time*, pengolahan AI, hingga mekanik UI/UX eksperimental yang belum pernah dilihat kompetitor kamu.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
