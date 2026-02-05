import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import DesignDevelopment from './sections/DesignDevelopment';
import CloudHosting from './sections/CloudHosting';
import Industries from './sections/Industries';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

// Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import SolutionsPage from './pages/SolutionsPage';
import ExpertisePage from './pages/ExpertisePage';
import ContactPage from './pages/ContactPage';

// Home Page Component
const HomePage = () => (
  <div className="min-h-screen bg-primary selection:bg-royal-gold/30 selection:text-royal-gold overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <DesignDevelopment />
      <CloudHosting />
      <Industries />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
