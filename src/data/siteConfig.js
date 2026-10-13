// ---------------------------------------------------------------------------
// SITE SETTINGS
// Everything a bakery owner is likely to change lives in this one file:
// name, phone, WhatsApp number, address, opening hours and social links.
// ---------------------------------------------------------------------------

export const siteConfig = {
  // Business name and short description
  name: 'Sweet Crumbs Bakery',
  shortName: 'Sweet Crumbs',
  tagline: 'Small-batch bakes, made fresh every morning.',
  foundedYear: 2015,

  // DEMO PHONE NUMBER - replace with the bakery's real number.
  // phoneDisplay is what visitors see, phoneHref is used for the "tap to call" link.
  phoneDisplay: '+91 00000 00000',
  phoneHref: '+910000000000',

  // DEMO WHATSAPP NUMBER - replace with the bakery's real WhatsApp number.
  // Format: country code + number, digits only (no "+", spaces or dashes).
  // Example for an Indian number: '919812345678'
  whatsappNumber: '910000000000',

  email: 'hello@sweetcrumbs.example',

  // SAMPLE ADDRESS - replace with the real shop address.
  address: {
    line1: '12, Rose Garden Lane',
    line2: 'Indiranagar, Bengaluru 560038',
    // Paste the shop's own Google Maps share link here.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Indiranagar%2C+Bengaluru+560038',
  },

  // Opening hours. "days" uses JavaScript day numbers: 0 = Sunday ... 6 = Saturday.
  // Times are 24-hour "HH:MM" and are used to show the "Open now" label.
  hours: [
    { label: 'Monday – Friday', days: [1, 2, 3, 4, 5], open: '08:00', close: '21:00' },
    { label: 'Saturday', days: [6], open: '08:00', close: '22:00' },
    { label: 'Sunday', days: [0], open: '09:00', close: '20:00' },
  ],

  // Social media links - replace with the bakery's own profile URLs.
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'Facebook', url: 'https://www.facebook.com/' },
  ],

  // Website credit shown at the bottom of the footer.
  // Put a portfolio or LinkedIn link in "url" to make the name clickable.
  developer: {
    name: 'Nandini Choudhary',
    url: '',
  },

  // Messages that rotate in the bar at the very top of the page.
  announcements: [
    'Fresh bakes out of the oven every day at 8 AM',
    'Festive gift hampers now open for pre-order',
    'Free delivery within 3 km on orders above ₹799',
  ],
};

// The links shown in the navbar and footer. Each "path" is a page of the site
// and must match a <Route> in src/App.jsx.
export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

// The footer shows the same links plus pages that are not in the navbar.
export const footerLinks = [...navLinks, { path: '/custom-cakes', label: 'Custom Cakes' }];
