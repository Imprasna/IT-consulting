import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import consultationImg from '../assets/consultation.png';

const Contact = () => {

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Get In Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Ready to Elevate Your <br /><span className="text-gradient-gold">IT Strategy?</span></h3>

                        <p className="text-slate-400 text-lg mb-12">
                            Whether you're looking to hire elite talent or seeking your next breakthrough role, our team is here to guide you. Reach out for a confidential consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-royal-gold transition-colors">
                                    <Phone className="w-6 h-6 text-royal-gold group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                                    <p className="text-xl font-bold text-white">+91 (800) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-royal-gold transition-colors">
                                    <Mail className="w-6 h-6 text-royal-gold group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                                    <p className="text-xl font-bold text-white">consult@techsprintsolution.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-royal-gold transition-colors">
                                    <MapPin className="w-6 h-6 text-royal-gold group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Visit Us</p>
                                    <p className="text-lg font-bold text-white">Executive Hub, Level 4, Tech Park, Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-full min-h-[400px]"
                    >
                        <img
                            src={consultationImg}
                            alt="Consultation Room"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute bottom-10 left-10 right-10">
                            <h4 className="text-2xl font-bold text-white mb-2">Expert Consultations</h4>
                            <p className="text-slate-300 text-sm">Strategic IT staffing and talent management solutions tailored for your business growth.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
