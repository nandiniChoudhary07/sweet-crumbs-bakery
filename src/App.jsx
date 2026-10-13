import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CustomCakesPage from './pages/CustomCakesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// The site has several pages. The announcement bar, navbar and footer stay the
// same on every page, and <Routes> swaps the content in the middle depending
// on the address (for example /menu shows MenuPage).
// To add a page: create it in src/pages, add a <Route> here and a link in
// src/data/siteConfig.js (navLinks).
export default function App() {
  const { pathname } = useLocation();

  // Start every page at the top, like a normal website does.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <AnnouncementBar />
      <Navbar />
      {/* The key restarts the fade-in animation each time the page changes */}
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/custom-cakes" element={<CustomCakesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
