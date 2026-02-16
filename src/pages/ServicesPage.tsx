import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../sections/Services';
import DesignDevelopment from '../sections/DesignDevelopment';
import CloudHosting from '../sections/CloudHosting';
import Models from '../components/Models';

const ServicesPage = () => {
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
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Our <span className="text-gradient-gold">Services</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                Comprehensive technology services spanning AI, cloud, software development, and BPO solutions tailored to your business needs.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <Services />
                <DesignDevelopment />
                <CloudHosting />
                <Models />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
