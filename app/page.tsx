import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              SportsMorph
            </h1>
          </div>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform any athlete into any pose, any celebration, any move
          </p>
          <p className="text-lg text-purple-300 mt-4 font-medium">
            🏆 Built for the Magic Hour Hackathon
          </p>
        </header>

        {/* Hero Demo Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-16 border border-slate-600/30">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            See the Magic in Action
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            From static pose to dynamic celebration in seconds
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Input Image
                </h3>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-blue-400/30 group hover:border-blue-400/60 transition-all duration-300 aspect-[3/4]">
                <Image
                  src="/input.jpg"
                  alt="Soccer player input image"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <p className="text-slate-400 text-center text-lg">
                Make any soccer player dance in any positions
              </p>
            </div>

            {/* Output Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-pink-400">
                  Output Video
                </h3>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-pink-400/30 group hover:border-pink-400/60 transition-all duration-300 aspect-[3/4]">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/output.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <p className="text-slate-400 text-center text-lg">
                Dynamic celebration with realistic motion
              </p>
            </div>
          </div>
        </div>

        {/* Key Features for Judges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 text-center group hover:border-purple-500/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">
              🔥 Viral Ready
            </h3>
            <p className="text-slate-300">
              Built for social media. Perfect for TikTok, Instagram, and Twitter
              sports content
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 text-center group hover:border-pink-500/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-pink-300">
              ⚡ Ship Ready
            </h3>
            <p className="text-slate-300">
              Production-ready for sports teams, content creators, and social
              media managers
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 text-center group hover:border-blue-500/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">
              🎯 AI Powered
            </h3>
            <p className="text-slate-300">
              Advanced pose transfer and motion synthesis for any athlete, any
              celebration
            </p>
          </div>
        </div>

        {/* Use Cases for Sports Industry */}
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-slate-600/30">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Perfect for Sports Content
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-white mb-2">Social Media</h3>
              <p className="text-slate-400 text-sm">Viral celebration posts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏟️</div>
              <h3 className="font-semibold text-white mb-2">Sports Teams</h3>
              <p className="text-slate-400 text-sm">Player highlight reels</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📺</div>
              <h3 className="font-semibold text-white mb-2">Broadcasters</h3>
              <p className="text-slate-400 text-sm">Enhanced replays</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎮</div>
              <h3 className="font-semibold text-white mb-2">Gaming</h3>
              <p className="text-slate-400 text-sm">Custom celebrations</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-400 border-t border-slate-700/50 pt-8">
          <p className="text-lg">
            &copy; 2024 SportsMorph • Magic Hour Hackathon 2024
          </p>
          <p className="text-sm mt-2">
            Bringing static sports moments to life with AI
          </p>
        </footer>
      </div>
    </div>
  );
}
