// ---------------------------------------------------------------------------
// PAGE CONTENT (sample data)
// Custom cake options, special offers, gallery photos and testimonials.
// Photos live in /public/images.
// ---------------------------------------------------------------------------

// ----- Custom cake section -----
export const occasions = [
  {
    id: 'Birthday',
    title: 'Birthdays',
    description: 'Playful drip cakes, character themes and classic favourites for every age.',
    image: 'cake-birthday-pink.webp',
    alt: 'Pink drip birthday cake with sprinkles and an ice cream cone on top',
  },
  {
    id: 'Anniversary',
    title: 'Anniversaries',
    description: 'Elegant, romantic designs with fresh flowers, macarons and hand-piped details.',
    image: 'cake-rose-anniversary.webp',
    alt: 'Red velvet anniversary cake decorated with macarons and rose petals',
  },
  {
    id: 'Wedding',
    title: 'Weddings',
    description: 'Tiered centrepieces designed with you, with tastings available by appointment.',
    image: 'cake-berry-tiered.webp',
    alt: 'Two-tier white wedding cake decorated with fresh strawberries and blueberries',
  },
  {
    id: 'Festive / Corporate',
    title: 'Festive & Corporate',
    description: 'Branded cakes, dessert tables and gift boxes for teams, clients and family.',
    image: 'gift-chocolate-box.webp',
    alt: 'Gift box of assorted handmade chocolates tied with twine',
  },
];

// Options for the dropdowns in the custom cake enquiry form.
export const occasionOptions = [
  'Birthday',
  'Anniversary',
  'Wedding',
  'Baby Shower',
  'Festive / Corporate',
  'Other',
];

export const cakeSizes = [
  '500 g (serves 4–6)',
  '1 kg (serves 8–12)',
  '1.5 kg (serves 12–18)',
  '2 kg (serves 18–25)',
  '3 kg or more',
  'Tiered cake (not sure yet)',
];

export const cakeFlavours = [
  'Belgian Chocolate Truffle',
  'Classic Vanilla Bean',
  'Red Velvet',
  'Strawberry & Cream',
  'Salted Caramel',
  'Cookies & Cream',
  'Not sure yet',
];

// ----- Special offers & seasonal products (sample offers) -----
export const offers = [
  {
    id: 'festive-hamper',
    label: 'Festive special',
    title: 'Festive Gift Hampers',
    description:
      'Handmade chocolates, cookies and mini cakes in a keepsake box. Pre-order for Diwali gifting.',
    priceText: 'From ₹1,299',
    note: 'Bulk and corporate orders welcome',
    image: 'gift-chocolate-box.webp',
    alt: 'Open gift box of assorted handmade chocolates',
    whatsappText: 'the Festive Gift Hampers',
  },
  {
    id: 'caramel-mousse',
    label: 'Seasonal bake',
    title: 'Salted Caramel Mousse Cake',
    description:
      'A limited-edition cake with vanilla mousse, a salted caramel glaze and fresh strawberries.',
    priceText: '₹1,049 for 500 g',
    note: 'Available this season only',
    image: 'cake-caramel-mousse.webp',
    alt: 'Mousse cake with a glossy caramel glaze, strawberries and a chocolate decoration',
    whatsappText: 'the Salted Caramel Mousse Cake',
  },
  {
    id: 'tea-time-combo',
    label: 'Weekday offer',
    title: 'Tea-Time Combo',
    description:
      'Two butter croissants and two chocolate chunk cookies, boxed and ready for your 4 PM break.',
    priceText: '₹399',
    oldPriceText: '₹480',
    note: 'Monday to Thursday, 3 PM – 6 PM',
    image: 'croissants-tray.webp',
    alt: 'Golden croissants laid out on baking paper',
    whatsappText: 'the Tea-Time Combo',
  },
];

// ----- Gallery -----
// size: 'wide' spans two columns, 'tall' spans two rows, '' is a normal square tile.
export const galleryImages = [
  {
    image: 'shop-counter.webp',
    alt: 'Bakery counter with baskets of fresh bread, buns and baguettes',
    caption: 'The morning counter',
    size: 'wide',
  },
  {
    image: 'macaron-stack.webp',
    alt: 'Stack of pink, purple, green and yellow macarons',
    caption: 'Macarons in seasonal flavours',
    size: 'tall',
  },
  {
    image: 'cake-chocolate-truffle.webp',
    alt: 'Chocolate drip cake topped with chocolate buttercream swirls',
    caption: 'Belgian chocolate truffle cake',
    size: '',
  },
  {
    image: 'pastry-fruit-tartlets.webp',
    alt: 'Small tarts topped with cream, fresh fruit and edible flowers',
    caption: 'Fresh fruit tartlets',
    size: 'tall',
  },
  {
    image: 'shop-display.webp',
    alt: 'Glass display case filled with pastries and braided breads',
    caption: 'Our pastry display',
    size: '',
  },
  {
    image: 'croissants-tray.webp',
    alt: 'Freshly baked croissants on baking paper',
    caption: 'Croissants, straight from the oven',
    size: 'wide',
  },
  {
    image: 'cake-berry-tiered.webp',
    alt: 'Two-tier white cake decorated with strawberries and blueberries',
    caption: 'A two-tier berry wedding cake',
    size: '',
  },
  {
    image: 'shop-croissants.webp',
    alt: 'Pile of croissants on a silver tray inside the bakery',
    caption: 'Inside the shop',
    size: 'tall',
  },
  {
    image: 'shop-interior.webp',
    alt: 'Cafe seating area with white chairs, wooden tables and green plants',
    caption: 'Our seating area',
    size: 'wide',
  },
  {
    image: 'bread-assorted.webp',
    alt: 'Assortment of rustic breads, rolls and baguettes',
    caption: 'Daily breads',
    size: '',
  },
];

// ----- Testimonials -----
// These are SAMPLE testimonials written for the demo. Replace them with real
// customer reviews (with permission) before the website goes live.
export const testimonials = [
  {
    id: 1,
    quote:
      'The chocolate truffle cake was the highlight of my daughter’s birthday. Beautifully finished, not too sweet, and delivered right on time.',
    name: 'Ananya S.',
    detail: 'Birthday cake order',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Hands down the flakiest croissants in the neighbourhood. Saturday mornings now start with a box from Sweet Crumbs.',
    name: 'Rohit M.',
    detail: 'Weekend regular',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'They understood exactly what we wanted for our wedding cake and the tasting session made choosing flavours so easy.',
    name: 'Priya & Karan',
    detail: 'Wedding cake order',
    rating: 5,
  },
];

// ----- Category tiles (the row of photos under the Home page banner) -----
// "link" is the page the tile opens. /menu?category=cakes opens the Menu page
// already filtered to that category (the ids come from src/data/products.js).
export const categoryTiles = [
  {
    label: 'Cakes',
    link: '/menu?category=cakes',
    image: 'cake-chocolate-truffle.webp',
  },
  {
    label: 'Birthday Cakes',
    link: '/custom-cakes',
    image: 'cake-birthday-pink.webp',
  },
  {
    label: 'Cupcakes',
    link: '/menu?category=cupcakes',
    image: 'cupcake-vanilla-confetti.webp',
  },
  {
    label: 'Brownies',
    link: '/menu?category=brownies',
    image: 'brownie-fudge.webp',
  },
  {
    label: 'Cookies',
    link: '/menu?category=cookies',
    image: 'cookie-choc-chip.webp',
  },
  {
    label: 'Pastries',
    link: '/menu?category=pastries',
    image: 'pastry-croissant.webp',
  },
  {
    label: 'Breads',
    link: '/menu?category=breads',
    image: 'bread-sourdough.webp',
  },
  {
    label: 'Wedding Cakes',
    link: '/custom-cakes',
    image: 'cake-berry-tiered.webp',
  },
];
