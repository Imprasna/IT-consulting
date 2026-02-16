import { motion } from 'framer-motion';
import { Server, Cloud, Network, Shield, Monitor, Database } from 'lucide-react';

const CloudHosting = () => {
    const services = [
        { title: 'Cloud-Native Application Development', icon: Server },
        { title: 'Cloud Migration & Modernization', icon: Cloud },
        { title: 'Hybrid & Multi-Cloud Solutions', icon: Network },
        { title: 'Cloud Integration Services', icon: Database },
        { title: 'Secure & Scalable Infrastructure', icon: Shield },
        { title: 'Remote Desktop', icon: Monitor },
    ];

    return (
        <section id="cloud-hosting" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Cloud Hosting Services</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            TechSprint provides cloud-native applications, migration, and integration services for scalable digital transformation. Our cloud solutions help businesses reduce costs, improve flexibility, and innovate faster.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-cyan-500 dark:border-white/10 hover:border-green-500/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                        <service.icon className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-slate-900 dark:text-white text-sm font-medium">{service.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-full overflow-hidden border border-cyan-500 dark:border-white/10 shadow-2xl w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                                alt="Team working on cloud solutions"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CloudHosting;
