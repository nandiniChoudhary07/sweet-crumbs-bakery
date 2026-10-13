import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/siteConfig.js';
import Logo from './Logo.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { CloseIcon, MenuIcon } from './Icons.jsx';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Add a shadow to the navbar once the page has been scrolled a little.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the visitor moves to another page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // The same list of links is used for the desktop bar and the mobile menu.
  // NavLink knows which page is open and adds the "--active" style to its link.
  const renderLinks = (linkClass) =>
    navLinks.map((link) => (
      <li key={link.path}>
        <NavLink
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) => `${linkClass} ${isActive ? `${linkClass}--active` : ''}`}
          onClick={closeMenu}
        >
          {link.label}
        </NavLink>
      </li>
    ));

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo on the left */}
        <Link
          to="/"
          className="navbar__brand"
          aria-label={`${siteConfig.name}, home page`}
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        {/* Links and the order button on the right */}
        <div className="navbar__right">
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links">{renderLinks('navbar__link')}</ul>
          </nav>

          <WhatsAppButton variant="accent-outline" size="sm" className="navbar__cta">
            Order Online
          </WhatsAppButton>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - only shown on small screens (see Navbar.css) */}
      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>
        <ul className="container mobile-menu__links">
          {renderLinks('mobile-menu__link')}
          <li className="mobile-menu__cta">
            <WhatsAppButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
