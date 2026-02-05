import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Expertise', href: '/expertise' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
                isScrolled ? 'glass-dark py-3 border-b border-white/10' : 'bg-transparent border-b border-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group cursor-pointer" aria-label="TechSprint Solution Home">
                    <div className="bg-gold-gradient p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Building2 className="text-primary w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight text-white">
                        TechSprint<span className="text-royal-gold">Solution</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors relative group',
                                location.pathname === link.href ? 'text-royal-gold' : 'text-slate-300 hover:text-royal-gold'
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                'absolute -bottom-1 left-0 h-0.5 bg-royal-gold transition-all',
                                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                            )} />
                        </Link>
                    ))}
                    <Link to="/contact" className="gold-button py-2 text-sm" aria-label="Get Started with TechSprint">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                'text-lg font-medium',
                                location.pathname === link.href ? 'text-royal-gold' : 'text-slate-100'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="gold-button w-full text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
