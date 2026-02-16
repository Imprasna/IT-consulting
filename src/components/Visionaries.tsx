import { ArrowRight } from "lucide-react";

export default function VisionariesSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-slate-50 dark:bg-primary">
      <div className="relative max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-xl">

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1b33] via-[#0e2547] to-[#0a1630]" />

        {/* Subtle glow pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-6 md:px-12 py-12 md:py-16">

          {/* Left text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Built by Visionaries.
              <br />
              <span className="text-cyan-400">Driven by Excellence.</span>
            </h2>

            <p className="mt-6 text-slate-300 max-w-lg">
              Our team is a global collective of architects, developers, and
              strategists who believe that the best technology is that which
              disappears, allowing you to focus on your core mission.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all">
              Meet Our Leadership
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right avatars */}
          <div className="flex justify-start lg:justify-end">
            <div className="flex -space-x-4">

              {/* Avatar 1 */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-yellow-200 border-4 border-[#0b1b33]" />

              {/* Avatar 2 */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-200 border-4 border-[#0b1b33]" />

              {/* Avatar 3 */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-indigo-900 border-4 border-[#0b1b33]" />

              {/* +150 badge */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cyan-500 border-4 border-[#0b1b33] flex items-center justify-center text-white font-semibold text-sm md:text-base">
                +150
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}