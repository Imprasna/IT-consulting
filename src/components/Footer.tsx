import { Facebook, Twitter, Linkedin, Instagram, Building2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary/80 pt-24 pb-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-left">

                {/* Divider */}
                <div className="pt-2 grid md:grid-cols-2 gap-10 text-left">

                    {/* Left Column — Business Description (kept minimal like design) */}
                    <div>
                        <div className="flex flex-col items-left">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-gold-gradient p-1.5 rounded-lg">
                                    <Building2 className="text-primary w-5 h-5" />
                                </div>

                                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                                    TechSprint<span className="text-royal-gold"> Solution</span>
                                </span>
                            </div>

                            <p className="text-slate-400 text-sm max-w-xl leading-relaxed mb-6">
                                Empowering global innovation with excellence in AI, IT, and BPO
                                solutions. Delivering strong technical foundations for tomorrow’s
                                leaders across Singapore, UAE, USA, and India.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4 mb-10">
                                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold hover:bg-white/10 transition-all"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Quick Links */}
                    <div>
                        <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
                            Quick Links
                        </h5>

                        <ul className="space-y-3 text-sm">
                            {[
                                "AI & ML Solutions",
                                "Software Engineering",
                                "Cloud & Security",
                                "BPO Optimization",
                                "Careers",
                                "Contact",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-slate-500 hover:text-royal-gold transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-600 font-medium">
                    <p>© 2026 TechSprint Solution Pvt. Ltd. All rights reserved.</p>

                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
                            <a key={item} href="#" className="hover:text-royal-gold">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
