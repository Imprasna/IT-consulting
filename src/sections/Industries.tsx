import { motion } from 'framer-motion';
import { Building2, Heart, Trophy, Truck, Film, Shield, Sprout, Plane, Rocket } from 'lucide-react';

const Industries = () => {
    const industries = [
        { title: 'E-Government', desc: 'Smart governance with digital solutions.', icon: Building2 },
        { title: 'Healthcare', desc: 'Innovative healthcare IT services.', icon: Heart },
        { title: 'Sports', desc: 'Next-gen solutions for sports analytics.', icon: Trophy },
        { title: 'Logistics Software', desc: 'Efficient logistics & supply chain software.', icon: Truck },
        { title: 'Media & Entertainment', desc: 'Digital transformation for media businesses.', icon: Film },
        { title: 'Cybersecurity', desc: 'Protecting your data with advanced security.', icon: Shield },
        { title: 'Agriculture', desc: 'Smart farming solutions powered by technology.', icon: Sprout },
        { title: 'Travel & Hospitality', desc: 'Tech-driven travel and hospitality services.', icon: Plane },
        { title: 'Startups', desc: 'Agile development services for startups.', icon: Rocket },
    ];

    return (
        <section id="industries" className="py-24 bg-slate-50 dark:bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Industries We Serve</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        We bring deep domain expertise across diverse industries, ensuring reliable and scalable technology delivery.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, idx) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-6 rounded-2xl bg-primary-light border border-cyan-500 dark:border-white/10 hover:border-green-500/30 transition-all group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors mx-auto">
                                <industry.icon className="w-7 h-7 text-green-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-2">{industry.title}</h3>
                            <p className="text-slate-500 text-sm text-center">{industry.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
