export default function TruthLensPrototype() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-8 py-16 bg-gradient-to-br from-black via-slate-900 to-blue-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              TruthLens
            </h1>
            <p className="text-2xl mt-4 text-cyan-400 font-semibold">
              See Content. Know Its Truth.
            </p>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              AI-powered misinformation detection platform that analyzes online content in real-time and helps users verify information instantly.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/30 transition-all">
                Try Demo
              </button>

              <button className="border border-cyan-500 px-6 py-3 rounded-2xl hover:bg-cyan-500/10 transition-all">
                Watch AI Scan
              </button>
            </div>
          </div>

          {/* Fake Browser Demo */}
          <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-sm text-gray-400">globalnews-alerts.com</div>
            </div>

            <div className="p-6">
              <div className="text-3xl font-bold leading-snug">
                BREAKING: Miracle Cure Found! Doctors Don’t Want You To Know!
              </div>

              <div className="mt-6 bg-black/60 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">TruthLens AI Scan</h3>
                    <p className="text-gray-400 text-sm mt-1">Analyzing source credibility...</p>
                  </div>
                  <div className="animate-pulse text-cyan-400 font-bold">LIVE</div>
                </div>

                <div className="mt-5 w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[72%]"></div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800 p-3 rounded-xl">
                    ✓ Source Verification
                  </div>
                  <div className="bg-slate-800 p-3 rounded-xl">
                    ✓ Fact Comparison
                  </div>
                  <div className="bg-slate-800 p-3 rounded-xl">
                    ✓ NLP Detection
                  </div>
                  <div className="bg-slate-800 p-3 rounded-xl">
                    ✓ AI Trust Score
                  </div>
                </div>

                <div className="mt-6 bg-red-500/10 border border-red-500/40 rounded-2xl p-5">
                  <div className="text-red-400 text-2xl font-bold">
                    Likely False / Misleading
                  </div>
                  <div className="mt-2 text-gray-300">
                    Confidence Score: 28%
                  </div>

                  <ul className="mt-4 text-sm text-gray-400 space-y-2 list-disc list-inside">
                    <li>No trusted medical source found</li>
                    <li>Headline uses sensational language</li>
                    <li>Claim does not match official reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            What Makes TruthLens Unique?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Real-Time Detection',
                desc: 'TruthLens scans and analyzes content instantly while users browse online.'
              },
              {
                title: 'AI + Trusted Sources',
                desc: 'Combines AI analysis with trusted source comparison for better accuracy.'
              },
              {
                title: 'Easy for Everyone',
                desc: 'Simple trust score system makes misinformation detection accessible to all users.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20 rounded-3xl p-8 hover:scale-105 transition-all shadow-xl"
              >
                <div className="text-cyan-400 text-2xl font-bold">0{index + 1}</div>
                <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="px-8 py-16 bg-gradient-to-r from-blue-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Future Vision</h2>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our vision is to integrate TruthLens into browsers, social media platforms, and mobile devices to create a smarter and safer digital ecosystem.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {['Browser Extension', 'Mobile App', 'Social Media Integration', 'Deepfake Detection'].map((item, i) => (
              <div key={i} className="bg-black/50 border border-cyan-500/20 rounded-2xl p-6 text-cyan-300 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-slate-800 text-center bg-black">
        <h3 className="text-3xl font-bold text-cyan-400">TruthLens</h3>
        <p className="mt-3 text-gray-400">
          Your Shield Against Misinformation.
        </p>
      </footer>
    </div>
  );
}
