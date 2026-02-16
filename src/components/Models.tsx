import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Models() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Transparent Engagement Models */}
            <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#081a33] to-[#071326]">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-4">
                            How We Partner
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Transparent Engagement Models
                        </h2>

                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Flexible structures designed to align with your business goals, team
                            structure, and budgetary requirements.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="rounded-3xl border border-cyan-500 dark:border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-royal-gold/40 transition">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                                    Project-Based
                                </h3>

                                <p className="text-slate-400 mb-6">
                                    Ideal for clearly defined scopes and fixed timelines. We deliver
                                    turn-key solutions.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Fixed Budget",
                                        "Milestone Payments",
                                        "Dedicated Project Manager",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-200">
                                            <span className="w-5 h-5 rounded-full bg-royal-gold flex items-center justify-center text-xs font-bold">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-8 w-full border border-royal-gold/40 text-royal-gold py-3 rounded-xl hover:bg-royal-gold/10 transition"
                            >
                                Discuss this Model
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-3xl border border-cyan-500 dark:border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-royal-gold/40 transition">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                                    Dedicated Pod
                                </h3>

                                <p className="text-slate-400 mb-6">
                                    An extension of your team. Highly skilled engineers focused solely
                                    on your product.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Agile Integration",
                                        "Direct Communication",
                                        "Flexible Scaling",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-200">
                                            <span className="w-5 h-5 rounded-full bg-royal-gold flex items-center justify-center text-xs font-bold">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-8 w-full border border-royal-gold/40 text-royal-gold py-3 rounded-xl hover:bg-royal-gold/10 transition"
                            >
                                Discuss this Model
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-3xl border border-cyan-500 dark:border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-royal-gold/40 transition">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                                    Managed Services
                                </h3>

                                <p className="text-slate-400 mb-6">
                                    Long-term maintenance, security, and cloud optimization for existing
                                    platforms.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "24/7 Monitoring",
                                        "SLA Guarantees",
                                        "Quarterly Audits",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-200">
                                            <span className="w-5 h-5 rounded-full bg-royal-gold flex items-center justify-center text-xs font-bold">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-8 w-full border border-royal-gold/40 text-royal-gold py-3 rounded-xl hover:bg-royal-gold/10 transition"
                            >
                                Discuss this Model
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Models