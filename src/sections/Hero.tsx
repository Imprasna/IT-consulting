import { motion } from 'framer-motion';
import { ChevronRight, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-royal-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-royal-gold/10 border border-royal-gold/20 px-4 py-2 rounded-full mb-6">
                        <Award className="w-4 h-4 text-royal-gold" />
                        <span className="text-xs font-semibold text-royal-gold uppercase tracking-wider">5+ Years of Excellence in IT</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                        Your Trusted <br />
                        <span className="text-gradient-gold">IT Manpower</span> <br />
                        Partner
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Connecting top-tier tech talent with industry leaders. We build the teams that drive innovation and digital transformation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="gold-button flex items-center justify-center gap-2 py-4 px-8" aria-label="Hire Top Tech Talent">
                            Hire Top Talent <ChevronRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button className="outline-button flex items-center justify-center gap-2 py-4 px-8" aria-label="Join TechSprint Professional Network">
                            Join Our Network
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">500+</span>
                            <span className="text-xs text-slate-500 uppercase">Placements</span>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">120+</span>
                            <span className="text-xs text-slate-500 uppercase">Hiring Partners</span>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">4.7★</span>
                            <span className="text-xs text-slate-500 uppercase">Rating</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="A diverse team of IT professionals collaborating in a modern office"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center gap-4 animate-bounce-slow">
                            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
                            <div>
                                <p className="text-xs text-slate-400">Current Openings</p>
                                <p className="text-sm font-bold text-white">45+ Senior Engineer Roles</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-royal-gold/30 rounded-tr-3xl" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-royal-gold/30 rounded-bl-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
