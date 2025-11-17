import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PopupModal from './components/PopupModal';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Clients from './components/pages/Clients';
import Contact from './components/pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services onNavigate={handleNavigate} />;
      case 'Clients':
        return <Clients onNavigate={handleNavigate} />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
      <PopupModal onNavigate={handleNavigate} />
    </div>
  );
}