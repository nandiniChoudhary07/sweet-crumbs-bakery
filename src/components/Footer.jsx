import { Link } from 'react-router-dom';
import { footerLinks, siteConfig } from '../data/siteConfig.js';
import { formatTime } from '../utils/helpers.js';
import Logo from './Logo.jsx';
import { FacebookIcon, InstagramIcon } from './Icons.jsx';
import './Footer.css';

// Matches a social network name from siteConfig to its icon.
const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Left: address and opening hours */}
        <div className="footer__column">
          <h2 className="footer__heading">Visit us</h2>
          <address className="footer__text">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </address>
          <ul className="footer__text">
            {siteConfig.hours.map((entry) => (
              <li key={entry.label}>
                {entry.label}: {formatTime(entry.open)} – {formatTime(entry.close)}
              </li>
            ))}
          </ul>
        </div>

        {/* Centre: logo and social media */}
        <div className="footer__brand">
          <Link to="/" aria-label={`${siteConfig.name}, home page`}>
            <Logo light />
          </Link>
          <p>{siteConfig.tagline}</p>

          <ul className="footer__socials">
            {siteConfig.socials.map((social) => {
              const SocialIcon = socialIcons[social.name];
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${social.name} (opens in a new tab)`}
                  >
                    {SocialIcon ? <SocialIcon size={20} /> : social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: phone and email */}
        <div className="footer__column footer__column--right">
          <h2 className="footer__heading">Get in touch</h2>
          <p className="footer__text">
            Phone: <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
            <br />
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p className="footer__text">
            <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>

      <nav className="container footer__nav" aria-label="Footer navigation">
        <ul>
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container footer__bottom">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        {/* Website credit - the name and link are set in src/data/siteConfig.js */}
        <p className="footer__credit">
          Designed &amp; developed by{' '}
          {siteConfig.developer.url ? (
            <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer">
              {siteConfig.developer.name}
            </a>
          ) : (
            <strong>{siteConfig.developer.name}</strong>
          )}
        </p>
      </div>
    </footer>
  );
}
