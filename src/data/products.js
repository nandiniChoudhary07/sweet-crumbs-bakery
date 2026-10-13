// ---------------------------------------------------------------------------
// MENU DATA (sample products and sample prices in INR)
// To add, remove or edit a product, change this file only.
// Photos live in /public/images - put a new photo there and use its file name.
// ---------------------------------------------------------------------------

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'breads', label: 'Breads' },
];

// Fields:
//   price      - number in rupees (no symbol, no commas)
//   unit       - what the price is for, e.g. "500 g" or "box of 6"
//   bestseller - true shows the product in the Bestsellers section
//   eggless    - true shows the "Eggless" badge
export const products = [
  // ----- Cakes -----
  {
    id: 'cake-chocolate-truffle',
    name: 'Belgian Chocolate Truffle Cake',
    category: 'cakes',
    price: 899,
    unit: '500 g',
    description:
      'Moist dark chocolate sponge layered with silky truffle ganache and finished with a glossy drip.',
    image: 'cake-chocolate-truffle.webp',
    alt: 'Chocolate drip cake topped with swirls of chocolate buttercream on a white cake stand',
    bestseller: true,
    eggless: true,
  },
  {
    id: 'cake-cookies-cream',
    name: 'Cookies & Cream Cake',
    category: 'cakes',
    price: 949,
    unit: '500 g',
    description:
      'Chocolate sponge filled with vanilla bean cream and plenty of crushed chocolate cookies.',
    image: 'cake-cookies-cream.webp',
    alt: 'Cookies and cream cake with crushed chocolate cookies on top, held in two hands',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'cake-strawberry-drip',
    name: 'Strawberry Drip Celebration Cake',
    category: 'cakes',
    price: 1099,
    unit: '1 kg',
    description:
      'Vanilla sponge with fresh strawberry compote, a pink white-chocolate drip and whipped cream rosettes.',
    image: 'cake-strawberry-drip.webp',
    alt: 'Tall white cake with pink drip icing, sprinkles and cherries on a pink cake stand',
    bestseller: false,
    eggless: true,
  },
  {
    id: 'cake-rainbow-funfetti',
    name: 'Rainbow Funfetti Cake',
    category: 'cakes',
    price: 1249,
    unit: '1 kg',
    description:
      'Four colourful layers of buttery vanilla sponge covered in confetti sprinkles. A birthday favourite.',
    image: 'cake-rainbow-funfetti.webp',
    alt: 'Sliced rainbow layer cake covered in colourful sprinkles on a patterned cake stand',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'cake-vanilla-blackberry',
    name: 'Vanilla Blackberry Cake',
    category: 'cakes',
    price: 999,
    unit: '500 g',
    description:
      'Light vanilla sponge with mascarpone cream, topped with fresh blackberries and edible flowers.',
    image: 'cake-vanilla-blackberry.webp',
    alt: 'White frosted cake topped with blackberries and lilac flowers on a mint green stand',
    bestseller: false,
    eggless: false,
  },

  // ----- Cupcakes -----
  {
    id: 'cupcake-red-velvet',
    name: 'Red Velvet Cupcakes',
    category: 'cupcakes',
    price: 480,
    unit: 'box of 4',
    description:
      'Soft cocoa-kissed red velvet with a generous swirl of tangy cream cheese frosting.',
    image: 'cupcake-red-velvet.webp',
    alt: 'Red velvet cupcake with cream cheese frosting and red crumbs on top',
    bestseller: true,
    eggless: true,
  },
  {
    id: 'cupcake-strawberry',
    name: 'Strawberry Cream Cupcakes',
    category: 'cupcakes',
    price: 520,
    unit: 'box of 4',
    description:
      'Vanilla cupcakes with strawberry buttercream, a white chocolate drizzle and a fresh strawberry.',
    image: 'cupcake-strawberry.webp',
    alt: 'Cupcakes with pink strawberry frosting, white chocolate drizzle and fresh strawberries',
    bestseller: true,
    eggless: true,
  },
  {
    id: 'cupcake-mint-chocolate',
    name: 'Mint Chocolate Cupcakes',
    category: 'cupcakes',
    price: 480,
    unit: 'box of 4',
    description:
      'Rich chocolate cupcakes with cool peppermint frosting and a dark chocolate button.',
    image: 'cupcake-mint-chocolate.webp',
    alt: 'Chocolate cupcake with pale green mint frosting and a chocolate button',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'cupcake-vanilla-confetti',
    name: 'Vanilla Confetti Cupcakes',
    category: 'cupcakes',
    price: 440,
    unit: 'box of 4',
    description:
      'Classic Madagascar vanilla cupcakes with whipped vanilla frosting and pastel sprinkles.',
    image: 'cupcake-vanilla-confetti.webp',
    alt: 'Vanilla cupcakes with white frosting and pastel sprinkles on a white wooden table',
    bestseller: false,
    eggless: true,
  },
  {
    id: 'cupcake-chocolate-mocha',
    name: 'Chocolate Mocha Cupcakes',
    category: 'cupcakes',
    price: 500,
    unit: 'box of 4',
    description:
      'Double chocolate cupcakes with espresso-chocolate buttercream and dark chocolate curls.',
    image: 'cupcake-chocolate-mocha.webp',
    alt: 'Chocolate cupcakes with swirled chocolate frosting and chocolate chips',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'cupcake-cookies-cream',
    name: 'Cookies & Cream Cupcakes',
    category: 'cupcakes',
    price: 500,
    unit: 'box of 4',
    description:
      'Dark chocolate cupcakes with vanilla cream frosting and a mini chocolate cookie on top.',
    image: 'cupcake-cookies-cream.webp',
    alt: 'Dark chocolate cupcakes with white frosting, each topped with a mini chocolate sandwich cookie',
    bestseller: false,
    eggless: false,
  },

  // ----- Brownies -----
  {
    id: 'brownie-fudge',
    name: 'Triple Chocolate Fudge Brownie',
    category: 'brownies',
    price: 140,
    unit: 'per piece',
    description:
      'Dense, fudgy and deeply chocolatey, with a warm chocolate drizzle. Best served slightly warm.',
    image: 'brownie-fudge.webp',
    alt: 'Stack of fudgy chocolate brownies with chocolate sauce being drizzled over them',
    bestseller: true,
    eggless: true,
  },
  {
    id: 'brownie-classic-box',
    name: 'Classic Brownie Box',
    category: 'brownies',
    price: 599,
    unit: 'box of 6',
    description:
      'Six crackly-top cocoa brownies dusted with icing sugar. Perfect for gifting or sharing.',
    image: 'brownie-classic-box.webp',
    alt: 'Square chocolate brownies dusted with icing sugar on brown paper',
    bestseller: false,
    eggless: false,
  },

  // ----- Cookies -----
  {
    id: 'cookie-sea-salt-chunk',
    name: 'Sea Salt Chocolate Chunk Cookie',
    category: 'cookies',
    price: 110,
    unit: 'per piece',
    description:
      'Big, chewy brown-butter cookie loaded with dark chocolate chunks and a pinch of sea salt.',
    image: 'cookie-sea-salt-chunk.webp',
    alt: 'Large chocolate chunk cookie sprinkled with sea salt on baking paper',
    bestseller: true,
    eggless: false,
  },
  {
    id: 'cookie-choc-chip',
    name: 'Classic Choco Chip Cookies',
    category: 'cookies',
    price: 320,
    unit: 'box of 6',
    description:
      'Crisp at the edges and soft in the middle, baked in small batches through the day.',
    image: 'cookie-choc-chip.webp',
    alt: 'Basket lined with paper and filled with chocolate chip cookies',
    bestseller: false,
    eggless: true,
  },
  {
    id: 'cookie-macarons',
    name: 'French Macarons',
    category: 'cookies',
    price: 540,
    unit: 'box of 6',
    description:
      'Delicate almond shells with seasonal fillings such as raspberry, salted caramel and pistachio.',
    image: 'cookie-macarons.webp',
    alt: 'Rows of pastel-coloured French macarons',
    bestseller: true,
    eggless: false,
  },

  // ----- Pastries -----
  {
    id: 'pastry-croissant',
    name: 'Butter Croissant',
    category: 'pastries',
    price: 130,
    unit: 'per piece',
    description:
      'Laminated over three days with cultured butter for a crisp, flaky shell and honeycomb centre.',
    image: 'pastry-croissant.webp',
    alt: 'Two golden butter croissants being dusted with icing sugar',
    bestseller: true,
    eggless: false,
  },
  {
    id: 'pastry-pain-au-chocolat',
    name: 'Pain au Chocolat',
    category: 'pastries',
    price: 160,
    unit: 'per piece',
    description:
      'Our flaky croissant dough wrapped around two batons of dark Belgian chocolate.',
    image: 'pastry-pain-au-chocolat.webp',
    alt: 'Tray of freshly baked pain au chocolat pastries',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'pastry-cinnamon-rolls',
    name: 'Cinnamon Sugar Swirls',
    category: 'pastries',
    price: 150,
    unit: 'per piece',
    description:
      'Soft, buttery swirls with Ceylon cinnamon and crunchy pearl sugar, baked every morning.',
    image: 'pastry-cinnamon-rolls.webp',
    alt: 'Cinnamon swirl buns topped with pearl sugar on a dark surface',
    bestseller: false,
    eggless: true,
  },
  {
    id: 'pastry-tiramisu',
    name: 'Tiramisu Slice',
    category: 'pastries',
    price: 220,
    unit: 'per slice',
    description:
      'Espresso-soaked sponge layered with mascarpone cream and finished with cocoa.',
    image: 'pastry-tiramisu.webp',
    alt: 'Slice of layered tiramisu cake dusted with cocoa and topped with a chocolate stick',
    bestseller: true,
    eggless: false,
  },
  {
    id: 'pastry-raspberry-slice',
    name: 'Raspberry Pistachio Slice',
    category: 'pastries',
    price: 240,
    unit: 'per slice',
    description:
      'Pistachio sponge with raspberry mousse and vanilla cream, topped with fresh raspberries.',
    image: 'pastry-raspberry-slice.webp',
    alt: 'Slice of layered pistachio and raspberry cake topped with fresh raspberries',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'pastry-lemon-tart',
    name: 'Lemon Meringue Tart',
    category: 'pastries',
    price: 190,
    unit: 'per slice',
    description:
      'Buttery shortcrust filled with sharp lemon curd under a cloud of torched meringue.',
    image: 'pastry-lemon-tart.webp',
    alt: 'Lemon meringue tart with torched meringue and one slice cut',
    bestseller: false,
    eggless: false,
  },
  {
    id: 'pastry-donuts',
    name: 'Glazed Sprinkle Donuts',
    category: 'pastries',
    price: 280,
    unit: 'box of 3',
    description:
      'Soft brioche donuts dipped in chocolate glaze and finished with rainbow sprinkles.',
    image: 'pastry-donuts.webp',
    alt: 'Stack of chocolate glazed donuts with rainbow sprinkles',
    bestseller: false,
    eggless: true,
  },

  // ----- Breads -----
  {
    id: 'bread-multigrain',
    name: 'Seeded Multigrain Loaf',
    category: 'breads',
    price: 220,
    unit: '400 g loaf',
    description:
      'Wholesome loaf with sunflower, flax and sesame seeds. No preservatives, no improvers.',
    image: 'bread-multigrain.webp',
    alt: 'Rustic seeded multigrain loaves with ears of wheat on a floured surface',
    bestseller: false,
    eggless: true,
  },
  {
    id: 'bread-sourdough',
    name: 'Country Sourdough',
    category: 'breads',
    price: 260,
    unit: '500 g loaf',
    description:
      'Slow-fermented for 24 hours for an open crumb and deep flavour. Sliced on request.',
    image: 'bread-sourdough.webp',
    alt: 'Sliced loaf of sourdough bread on a wooden board',
    bestseller: false,
    eggless: true,
  },
];
