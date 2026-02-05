import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    const offices = [
        { city: 'Chennai, India', address: '123 Tech Park, OMR Road', phone: '+91 800 123 4567' },
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
                                Get in <span className="text-gradient-gold">Touch</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                Ready to transform your business? Reach out to our team and let's discuss your next project.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form + Info */}
                <section className="py-20 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl glass border border-white/10"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-royal-gold focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-royal-gold focus:outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-royal-gold focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">Company</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-royal-gold focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-royal-gold focus:outline-none resize-none"></textarea>
                                    </div>
                                    <button type="submit" className="gold-button w-full flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" /> Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Global Offices</h2>
                                <div className="space-y-6">
                                    {offices.map((office) => (
                                        <div key={office.city} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-royal-gold" /> {office.city}
                                            </h3>
                                            <p className="text-slate-400 text-sm mb-2">{office.address}</p>
                                            <p className="text-slate-400 text-sm flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> {office.phone}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 rounded-2xl bg-royal-gold/20 border border-royal-gold/30">
                                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-royal-gold" /> General Inquiries
                                    </h3>
                                    <a href="mailto:techsprintsolutions.2020@gmail.com" className="text-royal-gold hover:underline">
                                        techsprintsolutions.2020@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
