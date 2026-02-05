import { Facebook, Twitter, Linkedin, Instagram, Building2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary/80 pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-gold-gradient p-1.5 rounded-lg">
                                <Building2 className="text-primary w-5 h-5" />
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-tight text-white">
                                TechSprint<span className="text-royal-gold"> Solution</span>
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Empowering global innovation with excellence in AI, IT, and BPO solutions. Delivering technical foundations for the leaders of tomorrow across Singapore, UAE, USA, and India.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold hover:bg-white/10 transition-all" aria-label="Follow us on LinkedIn" rel="noopener noreferrer"><Linkedin className="w-5 h-5" aria-hidden="true" /></a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold hover:bg-white/10 transition-all" aria-label="Follow us on Twitter" rel="noopener noreferrer"><Twitter className="w-5 h-5" aria-hidden="true" /></a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold hover:bg-white/10 transition-all" aria-label="Follow us on Facebook" rel="noopener noreferrer"><Facebook className="w-5 h-5" aria-hidden="true" /></a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold hover:bg-white/10 transition-all" aria-label="Follow us on Instagram" rel="noopener noreferrer"><Instagram className="w-5 h-5" aria-hidden="true" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">For Businesses</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">AI & ML Solutions</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Software Engineering</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Cloud & Security</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">BPO Optimization</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">For Talent</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Browse Jobs</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Career Guidance</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Resume Tips</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-royal-gold transition-colors">Interview Prep</a></li>
                        </ul>
                    </div>


                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-royal-gold" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="#" className="hover:text-royal-gold" rel="noopener noreferrer">Terms of Service</a>
                        <a href="#" className="hover:text-royal-gold" rel="noopener noreferrer">Cookie Policy</a>
                    </div>
                    <p>© 2026 TechSprint Solution Pvt. Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
