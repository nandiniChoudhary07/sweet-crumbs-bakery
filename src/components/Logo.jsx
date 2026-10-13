import { siteConfig } from '../data/siteConfig.js';
import './Logo.css';

// The bakery logo: a small cupcake mark plus the bakery name.
// To use the client's own logo, replace the <svg> below with
//   <img src="/images/logo.png" alt="" className="logo__mark" />
// The name next to it comes from siteConfig.shortName.
export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        width="42"
        height="42"
        aria-hidden="true"
        focusable="false"
      >
        <circle className="logo__mark-bg" cx="32" cy="32" r="32" />
        <path
          className="logo__mark-case"
          d="M19 34h26l-3.500 15a3 3 0 0 1-2.900 2.300H25.400a3 3 0 0 1-2.900-2.300L19 34z"
        />
        <path
          className="logo__mark-frosting"
          d="M17 33c0-4 3-6.500 6.500-7 .5-5 4-8.500 8.500-8.500s8 3.500 8.500 8.500c3.500.5 6.500 3 6.500 7 0 1.100-.9 2-2 2H19c-1.100 0-2-.9-2-2z"
        />
        <circle className="logo__mark-cherry" cx="32" cy="14" r="4" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{siteConfig.shortName}</span>
        <span className="logo__sub">Bakery</span>
      </span>
    </span>
  );
}
