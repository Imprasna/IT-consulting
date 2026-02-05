import { motion } from 'framer-motion';
import { CheckCircle2, Database, Cloud, Shield, Layout, Laptop, Building2, Users, Phone } from 'lucide-react';

const Services = () => {
    const employerServices = [
        'Permanent IT Staffing',
        'Contract & Contract-to-Hire',
        'Remote & On-site Talent',
        'Bulk Hiring Support',
        'Niche Skill Hiring',
    ];

    const candidateServices = [
        'Job Matching',
        'Career Guidance',
        'Resume Shortlisting',
        'Interview Scheduling',
        'Offer Negotiation Support',
    ];

    return (
        <section id="services" className="py-24 bg-slate-900/40 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Solutions</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Recruitment Services</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto px-10">Tailored strategies to meet the evolving needs of both industry-leading employers and high-potential tech professionals.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* For Employers */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl glass border border-white/10 hover:border-royal-gold/20 transition-all group"
                    >
                        <div className="bg-royal-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-royal-gold transition-colors">
                            <Building2 className="w-8 h-8 text-royal-gold group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6">For Employers</h4>
                        <ul className="space-y-4">
                            {employerServices.map((service) => (
                                <li key={service} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-royal-gold shrink-0" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="gold-button w-full mt-10">Request Talent</button>
                    </motion.div>

                    {/* For Candidates */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-3xl glass border border-white/10 hover:border-royal-gold/20 transition-all group"
                    >
                        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-royal-gold transition-colors">
                            <Users className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6">For Candidates</h4>
                        <ul className="space-y-4">
                            {candidateServices.map((service) => (
                                <li key={service} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-royal-gold shrink-0" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="tel:+918001234567" className="outline-button w-full mt-10 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" /> Call for Consultation
                        </a>
                    </motion.div>
                </div>

                {/* Domain Expertise */}
                <div className="mt-20">
                    <p className="text-center text-slate-500 uppercase tracking-widest text-xs font-bold mb-10">Technologies We Specialize In</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2">
                            <Database className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Data Science & AI</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Cloud className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Cloud & DevOps</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Cybersecurity</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layout className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">UI/UX Design</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Laptop className="w-6 h-6 text-royal-gold" />
                            <span className="text-white font-medium">Software Dev</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

