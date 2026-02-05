import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Palette, Settings } from 'lucide-react';

const DesignDevelopment = () => {
    const services = [
        { title: 'Responsive Design', icon: Monitor },
        { title: 'React Web Development', icon: Settings },
        { title: 'Android Apps Development', icon: Smartphone },
        { title: 'Laravel Web Development', icon: Code },
        { title: 'iOS Apps Development', icon: Smartphone },
        { title: 'UX/UI Design', icon: Palette },
    ];

    return (
        <section id="design-development" className="py-24 bg-royal-blue/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaborating on design and development"
                                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-royal-gold/20 rounded-full blur-xl" />
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full blur-lg" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Design & Development</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            We offer a comprehensive portfolio of AI, IT, and software services designed to meet modern business challenges.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                        <service.icon className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-white text-sm font-medium">{service.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignDevelopment;
