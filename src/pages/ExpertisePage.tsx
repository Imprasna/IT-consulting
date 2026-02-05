import { motion } from 'framer-motion';
import { Heart, GraduationCap, Landmark, TrendingUp, Trophy, Globe2, ShoppingBag, Plane, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ExpertisePage = () => {
    const expertiseRow1 = [
        { title: 'Healthcare', desc: 'Optimizing patient care and digital health solutions.', icon: Heart },
        { title: 'Education', desc: 'Digital transformation in learning.', icon: GraduationCap },
        { title: 'E-Governance', desc: 'Smart governance for citizens.', icon: Landmark },
        { title: 'Finance', desc: 'Secure and scalable fintech solutions.', icon: TrendingUp },
        { title: 'Sports', desc: 'Data-driven sports analytics.', icon: Trophy },
    ];

    const expertiseRow2 = [
        { title: 'Travel & Tourism', desc: 'AI-powered trip planning.', icon: Globe2 },
        { title: 'Retail & E-commerce', desc: 'Modern retail experiences.', icon: ShoppingBag },
        { title: 'Aviation', desc: 'Innovation for air travel.', icon: Plane },
        { title: 'Consulting', desc: 'Strategic digital guidance.', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen bg-primary">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <h2 className="text-green-500 uppercase tracking-widest text-sm font-bold mb-4">Industry Expertise</h2>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Deep Domain Knowledge Across Industries
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                We bring specialized expertise to every industry we serve, ensuring tailored solutions that drive real business outcomes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Expertise Grid Row 1 */}
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {expertiseRow1.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg text-center group hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-royal-blue/10 flex items-center justify-center mb-4 mx-auto">
                                        <item.icon className="w-7 h-7 text-royal-blue" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-royal-blue to-green-500 text-white text-sm font-medium">
                                        Learn More
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise Grid Row 2 */}
                <section className="py-10 pb-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {expertiseRow2.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg text-center group hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-royal-blue/10 flex items-center justify-center mb-4 mx-auto">
                                        <item.icon className="w-7 h-7 text-royal-blue" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                                        Learn More
                                    </button>
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

export default ExpertisePage;
