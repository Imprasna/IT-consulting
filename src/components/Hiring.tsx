import { useState } from "react";
import { ChevronRight, ChevronDown, Check } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Application Review",
    description: "Quick evaluation of your experience and fit.",
  },
  {
    id: "02",
    title: "First Dive",
    description: "Intro call to explore skills and expectations.",
  },
  {
    id: "03",
    title: "Technical Jam",
    description: "Solve a real-world challenge with our team.",
  },
  {
    id: "04",
    title: "Leadership Chat",
    description: "Discuss vision, culture, and long-term growth.",
  },
  {
    id: "05",
    title: "Welcome Aboard",
    description: "Offer rollout and smooth onboarding begins.",
  },
];

export default function HiringJourney() {
  const [active, setActive] = useState("03");

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#071326] via-[#081a33] to-[#071326]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Our Hiring Journey
          </h2>

          <p className="mt-4 text-slate-400 max-w-xl">
            Transparency starts on day zero. Here is how we navigate the journey
            from being strangers to teammates.
          </p>

          <div className="mt-10 space-y-4">
            {steps.map((step) => {
              const isActive = active === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActive(step.id)}
                  className={`cursor-pointer rounded-2xl border transition-all
                  ${
                    isActive
                      ? "bg-cyan-500 text-slate-900 dark:text-white border-cyan-400 shadow-lg"
                      : "bg-white/5 border-cyan-500 dark:border-white/10 hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-lg font-bold ${
                          isActive ? "text-slate-900 dark:text-white" : "text-slate-400"
                        }`}
                      >
                        {step.id}
                      </span>

                      <span className="font-semibold">{step.title}</span>
                    </div>

                    {isActive ? <ChevronDown /> : <ChevronRight />}
                  </div>

                  {isActive && step.description && (
                    <p className="px-6 pb-6 text-sm text-slate-800/90 dark:text-white/90">
                      {step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[32px] border border-cyan-500 dark:border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
            <Check className="text-slate-900 dark:text-white w-7 h-7" />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
            Fast-Tracked Process
          </h3>

          {/* Description */}
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            We value your time. Our typical process takes{" "}
            <span className="text-slate-900 dark:text-white font-semibold">10–14 days</span> from
            initial application to final offer.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-cyan-500 dark:border-white/10 bg-white/5 py-6">
              <p className="text-2xl font-bold text-cyan-400">100%</p>
              <p className="text-xs text-slate-400 tracking-widest mt-1">
                REMOTE SETUP
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500 dark:border-white/10 bg-white/5 py-6">
              <p className="text-2xl font-bold text-cyan-400">4.9/5</p>
              <p className="text-xs text-slate-400 tracking-widest mt-1">
                INTERVIEW RATING
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}