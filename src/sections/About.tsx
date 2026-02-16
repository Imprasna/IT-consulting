import { motion } from 'framer-motion';
import { Users, Building2, Globe2, Briefcase } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Global Offices', value: '4+', icon: Globe2 },
        { label: 'Solutions Delivered', value: '500+', icon: Users },
        { label: 'Tech Partners', value: '120+', icon: Building2 },
        { label: 'Domains Covered', value: '15+', icon: Briefcase },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-cyan-500 dark:border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                                alt="Our Workspace"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl border border-cyan-500 dark:border-royal-gold/30 shadow-2xl">
                            <span className="block text-4xl font-bold text-royal-gold mb-1">5+</span>
                            <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">Years of Trusted <br />Operations</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Heritage & Vision</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Global Technology <br />
                            <span className="text-gradient-gold">Real Business Impact</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Founded with a mission to bridge the gap between complex business challenges and cutting-edge technology, TechSprint Solution has evolved into a global powerhouse in AI, IT, ML and CLOUD excellence. From automated operational intelligence to global delivery hubs, we provide the technical foundations for modern enterprise success.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.03] border border-cyan-500 dark:border-white/5 hover:border-royal-gold/30 transition-colors group">
                                    <stat.icon className="w-6 h-6 text-royal-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
