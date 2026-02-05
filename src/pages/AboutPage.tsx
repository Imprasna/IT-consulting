import { motion } from 'framer-motion';
import { Target, Users, Globe2, Award, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    const values = [
        { title: 'Innovation First', desc: 'We push boundaries to deliver cutting-edge solutions.', icon: Target },
        { title: 'Global Mindset', desc: 'Our teams span continents, bringing diverse perspectives.', icon: Globe2 },
        { title: 'People-Centric', desc: 'Our talent and clients are at the heart of everything we do.', icon: Users },
        { title: 'Excellence', desc: 'We strive for quality in every line of code and every interaction.', icon: Award },
    ];

    const milestones = [
        { year: '2019', event: 'Founded in Chennai, India' },
        { year: '2021', event: 'Expanded to Singapore & UAE' },
        { year: '2023', event: 'Launched AI & ML Division' },
        { year: '2025', event: 'Opened USA Operations' },
    ];

    return (
        <div className="min-h-screen bg-primary">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                About <span className="text-gradient-gold">TechSprint</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                We are a global technology solutions provider specializing in AI, IT, and BPO excellence. Our mission is to empower businesses with innovative, scalable, and secure digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-4">Our Story</h2>
                                <h3 className="text-4xl font-bold text-white mb-6">
                                    From Vision to <span className="text-gradient-gold">Global Impact</span>
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Founded with a mission to bridge complex business challenges with cutting-edge technology, TechSprint has evolved from a boutique IT consultancy into a global powerhouse.
                                </p>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Today, we serve clients across 20+ countries, delivering AI-powered solutions, enterprise software, cloud infrastructure, and optimized BPO services. Our team of 200+ experts works tirelessly to ensure your success.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="TechSprint Team"
                                    className="rounded-3xl border border-white/10 shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl glass border border-white/10 text-center"
                                >
                                    <div className="w-14 h-14 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4 mx-auto">
                                        <value.icon className="w-7 h-7 text-royal-gold" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                                    <p className="text-slate-400 text-sm">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 bg-slate-900/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
                        </motion.div>
                        <div className="space-y-8">
                            {milestones.map((milestone, idx) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-royal-gold/20 flex items-center justify-center shrink-0">
                                        <span className="text-royal-gold font-bold text-xl">{milestone.year}</span>
                                    </div>
                                    <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-white font-medium flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            {milestone.event}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
