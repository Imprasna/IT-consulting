import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const candidateTestimonials = [
        {
            name: 'Aditya Sharma',
            role: 'Senior Software Engineer',
            company: 'Placed at Google',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            text: 'TechSprint Solution didn\'t just find me a job; they curated a career path. Their deep connections in the IT sector are unparalleled.',
            rating: 5,
        },
        {
            name: 'Priya Verma',
            role: 'DevOps Lead',
            company: 'Placed at Atlassian',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            text: 'The interview preparation and support I received were exceptional. They truly understand the nuances of senior tech roles.',
            rating: 5,
        },
    ];

    const clientTestimonials = [
        {
            name: 'Vikram Mehta',
            role: 'CTO, TechNova',
            company: 'SME Partner',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
            text: 'For 3 years, TechSprint has been our primary staffing partner. Their hit rate for high-quality candidates is significantly higher than others.',
            rating: 5,
        },
    ];

    const logos = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Microsoft_Logo.png/1200px-Microsoft_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png',
    ];

    return (
        <section id="reviews" className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Voice of Experience</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Trusted by Thousands</h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {[...candidateTestimonials, ...clientTestimonials].map((testi, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={testi.name}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-royal-gold/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-royal-gold text-royal-gold" />
                                ))}
                            </div>
                            <p className="text-slate-300 italic mb-8 leading-relaxed">"{testi.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-royal-gold/30" />
                                <div>
                                    <h5 className="font-bold text-white leading-none whitespace-nowrap">{testi.name}</h5>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{testi.role} • {testi.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-20 border-t border-white/5">
                    <p className="text-center text-slate-500 uppercase tracking-widest text-xs font-bold mb-12">Our Placed Talents work at</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-30 hover:opacity-70 transition-opacity">
                        {logos.map((logo, i) => (
                            <img key={i} src={logo} alt="Company Logo" className="h-6 md:h-8 object-contain" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
