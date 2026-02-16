import { motion } from 'framer-motion';
import { ChevronRight, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    
    return (
        <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-royal-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-royal-gold/10 border border-royal-gold/20 px-4 py-2 rounded-full mb-6">
                        <Award className="w-4 h-4 text-royal-gold" />
                        <span className="text-xs font-semibold text-royal-gold uppercase tracking-wider">Global Technology Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
                        Empowering <br />
                        <span className="text-gradient-gold">businesses through</span> <br />
                        Digital Excellence
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Empowering global enterprises with cutting-edge SaaS solutions, robust IT consulting, and bespoke software development designed for the future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => navigate("/solutions")} className="gold-button flex items-center justify-center gap-2 py-4 px-8" aria-label="Explore Our Solutions">
                            Explore Solutions <ChevronRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button onClick={() => navigate("/about")} className="outline-button flex items-center justify-center gap-2 py-4 px-8" aria-label="Join TechSprint Professional Network">
                            About Our Mission
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">Global</span>
                            <span className="text-xs text-slate-500 uppercase">Presence</span>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">200+</span>
                            <span className="text-xs text-slate-500 uppercase">Experts</span>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">24/7</span>
                            <span className="text-xs text-slate-500 uppercase">Support</span>
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
                            src="/src/assets/hero_vision.png"
                            alt="A futuristic visualization of AI nodes and global technology connectivity"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center gap-4 animate-bounce-slow">
                            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
                            <div>
                                <p className="text-xs text-slate-400">System Performance</p>
                                <p className="text-sm font-bold text-white">Optimized & Scalable</p>
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
