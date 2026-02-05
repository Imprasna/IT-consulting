import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ChevronRight, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CareersPage = () => {
    const jobs = [
        { title: 'Senior AI/ML Engineer', location: 'Chennai, India', type: 'Full-time', department: 'AI & Data Science' },
        { title: 'Full Stack Developer (React/Node)', location: 'Remote', type: 'Full-time', department: 'Engineering' },
        { title: 'Cloud Solutions Architect', location: 'Singapore', type: 'Full-time', department: 'Cloud Services' },
        { title: 'DevOps Engineer', location: 'Dubai, UAE', type: 'Full-time', department: 'Infrastructure' },
        { title: 'UI/UX Designer', location: 'Chennai, India', type: 'Full-time', department: 'Design' },
        { title: 'Business Analyst', location: 'USA (Remote)', type: 'Contract', department: 'Consulting' },
    ];

    const benefits = [
        'Competitive Salary & Bonuses',
        'Remote Work Flexibility',
        'Health & Wellness Programs',
        'Learning & Development Budget',
        'Global Team Collaboration',
        'Career Growth Opportunities',
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
                                Join Our <span className="text-gradient-gold">Global Team</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Build the future with us. We're looking for passionate technologists to join our global delivery teams.
                            </p>
                            <a href="#openings" className="gold-button inline-flex items-center gap-2">
                                View Open Positions <ChevronRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">Why TechSprint?</h2>
                            <p className="text-slate-400">We invest in our people because they are our greatest asset.</p>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                                >
                                    <p className="text-white font-medium">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section id="openings" className="py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
                        </motion.div>
                        <div className="space-y-4">
                            {jobs.map((job, idx) => (
                                <motion.div
                                    key={job.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 rounded-2xl glass border border-white/10 hover:border-royal-gold/30 transition-all group cursor-pointer"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-royal-gold transition-colors">{job.title}</h3>
                                            <p className="text-slate-500 text-sm">{job.department}</p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-royal-gold transition-colors shrink-0" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* General Application */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 text-center"
                        >
                            <p className="text-slate-400 mb-4">Don't see a role that fits? Send us your resume anyway.</p>
                            <button className="outline-button inline-flex items-center gap-2">
                                <Send className="w-5 h-5" /> Submit General Application
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CareersPage;
