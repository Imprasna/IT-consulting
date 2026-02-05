import { motion } from 'framer-motion';
import { Database, Cloud, Shield, Layout, Laptop, Building2, Globe2 } from 'lucide-react';

const Services = () => {

    return (
        <section id="services" className="py-24 bg-slate-900/40 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Solutions</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Technology Services</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        From custom AI development to global BPO optimization, we deliver end-to-end technology solutions designed for the modern digital era.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: 'AI & ML Solutions', desc: 'Predictive analytics, demand forecasting, and custom AI development to drive operational intelligence.', icon: Database },
                        { title: 'Software Development', desc: 'Full-cycle web and mobile application development using cutting-edge tech stacks for scalable growth.', icon: Laptop },
                        { title: 'Cloud Infrastructure', desc: 'Migration, modernization, and secure cloud-native solutions for hybrid and multi-cloud environments.', icon: Cloud },
                        { title: 'BPO Optimization', desc: 'Streamlined business process outsourcing to reduce costs and improve overall service delivery quality.', icon: Shield },
                        { title: 'Digital Transformation', desc: 'Expert consulting to navigate complex digital shifts and adopt modern, future-proof business strategies.', icon: Layout },
                        { title: 'FinTech & Blockchain', desc: 'Specialized financial technology solutions and secure decentralized platforms for the new economy.', icon: Building2 },
                    ].map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl glass border border-white/10 hover:border-royal-gold/20 transition-all group"
                        >
                            <div className="bg-royal-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-royal-gold transition-colors">
                                <service.icon className="w-8 h-8 text-royal-gold group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                            <button className="text-royal-gold text-sm font-bold flex items-center gap-2 group/btn">
                                Learn More <Laptop className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Global Locations */}
                <div className="mt-20">
                    <p className="text-center text-slate-500 uppercase tracking-widest text-xs font-bold mb-10">Global Delivery Hubs</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2">
                            <Globe2 className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Chennai, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Singapore</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Dubai, UAE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

