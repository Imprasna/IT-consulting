import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowUpRight, Filter } from 'lucide-react';

const Jobs = () => {
    const [filter, setFilter] = useState('All');

    const jobs = [
        {
            id: 1,
            title: 'Senior Full Stack Developer',
            company: 'TechVision Global',
            type: 'Full-time',
            location: 'Bangalore (Remote)',
            experience: '5-8 Years',
            salary: '₹25L - ₹40L',
            category: 'Development',
            tags: ['React', 'Node.js', 'AWS'],
        },
        {
            id: 2,
            title: 'Cloud Infrastructure Engineer',
            company: 'Nexus Systems',
            type: 'Contract',
            location: 'Hyderabad',
            experience: '3-6 Years',
            salary: '₹18L - ₹30L',
            category: 'DevOps',
            tags: ['Terraform', 'Kubernetes', 'Azure'],
        },
        {
            id: 3,
            title: 'UI/UX Product Designer',
            company: 'CreativeFlow AI',
            type: 'Full-time',
            location: 'Mumbai',
            experience: '4+ Years',
            salary: '₹20L - ₹35L',
            category: 'Design',
            tags: ['Figma', 'Prototyping', 'System Design'],
        },
        {
            id: 4,
            title: 'Cybersecurity Analyst',
            company: 'SecureNet Solutions',
            type: 'Full-time',
            location: 'Pune',
            experience: '2-5 Years',
            salary: '₹15L - ₹28L',
            category: 'Security',
            tags: ['SIEM', 'PenTesting', 'Python'],
        },
    ];

    const categories = ['All', 'Development', 'DevOps', 'Design', 'Security'];
    const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.category === filter);

    return (
        <section id="jobs" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Join Our Journey</h2>
                        <h3 className="text-4xl font-bold text-white leading-tight">Elite Opportunities in Our <br />Global Delivery Teams</h3>
                    </div>

                    <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                        <Filter className="w-4 h-4 text-royal-gold" />
                        <div className="flex gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    aria-pressed={filter === cat}
                                    className={`text-sm font-medium transition-colors ${filter === cat ? 'text-royal-gold border-b-2 border-royal-gold pb-2' : 'text-slate-500 hover:text-white pb-2'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredJobs.map((job) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={job.id}
                                role="button"
                                tabIndex={0}
                                aria-label={`View details for ${job.title} at ${job.company}`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        // Handle card click
                                    }
                                }}
                                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-royal-gold/20 transition-all cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 rounded-full blur-2xl translate-x-16 -translate-y-16 group-hover:bg-royal-gold/10 transition-colors" />

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-royal-gold transition-colors">{job.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium">{job.company}</p>
                                    </div>
                                    <div className="bg-white/5 p-2 rounded-lg group-hover:bg-royal-gold/10 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-royal-gold" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <MapPin className="w-4 h-4" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{job.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Clock className="w-4 h-4" />
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="text-royal-gold font-semibold">
                                        {job.salary}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold bg-white/5 px-3 py-1.5 rounded-full text-slate-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6">Don't see the right fit? Our network is deep.</p>
                    <button className="outline-button">Submit General Application</button>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
