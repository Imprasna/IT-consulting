import { motion } from 'framer-motion';
import { GraduationCap, Building2, Landmark, Link2, Shield, Heart, Users, RefreshCw, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SolutionsPage = () => {
    const solutions = [
        { title: 'EdTech Solutions', desc: 'Personalized, scalable, and engaging learning solutions.', icon: GraduationCap },
        { title: 'E-Government EdTech', desc: 'Accessible and inclusive government-led education platforms.', icon: Building2 },
        { title: 'FinTech Solutions', desc: 'Secure and innovative financial technology services.', icon: Link2, featured: true },
        { title: 'Blockchain Solutions', desc: 'Decentralized, secure, and transparent blockchain systems.', icon: Shield },
        { title: 'E-Government Platforms', desc: 'Transparent and efficient government service platforms.', icon: Landmark },
        { title: 'Healthcare in E-Gov', desc: 'Digital healthcare systems for better accessibility.', icon: Heart },
        { title: 'CRM Development', desc: 'Streamlined customer relationship management tools.', icon: Users },
        { title: 'Digital Transformation', desc: 'Helping businesses embrace digital-first strategies.', icon: RefreshCw },
        { title: 'Demand Forecasting', desc: 'AI-powered forecasting for sales & inventory.', icon: TrendingUp },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-primary">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl" />
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
                                Our Solutions
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                We offer a comprehensive portfolio of AI, IT, and software services designed to meet modern business challenges.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutions.map((solution, idx) => (
                                <motion.div
                                    key={solution.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 rounded-2xl glass border border-cyan-500 dark:border-white/10 hover:border-royal-gold/30 transition-all group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-royal-gold/20 flex items-center justify-center mb-4 group-hover:bg-royal-gold transition-colors">
                                        <solution.icon className="w-6 h-6 text-royal-gold group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{solution.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{solution.desc}</p>
                                    <button className="text-royal-gold text-sm font-medium hover:underline">Learn More</button>
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

export default SolutionsPage;
