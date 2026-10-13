# Sweet Crumbs Bakery

A premium, multi-page bakery website built with **React + Vite** and **React Router** (JavaScript, HTML5, CSS3).
The menu, prices, address, phone number and testimonials are placeholder content, ready to be
swapped for a real bakery's details.

## Run the website

You need [Node.js](https://nodejs.org) version 18 or newer.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the site at http://localhost:5173
```

Other commands:

```bash
npm run build    # create the production version in the "dist" folder
npm run preview  # preview the production version at http://localhost:4173
```

To put the site online, run `npm run build` and upload the `dist` folder to any static host
(Netlify, Vercel, Hostinger, GitHub Pages and so on).

## Pages

Every navbar link and button opens its own page (no scrolling to sections).

| Page | Address | What is on it |
| --- | --- | --- |
| Home | `/` | Full-width banner with offer badges, "Shop by Category" cards, "Best Sellers" row, special offers, custom cake banner, sample testimonials |
| Menu | `/menu` | 25 sample products with category filter, search, loading and empty states. `/menu?category=cakes` opens a category directly |
| Custom Cakes | `/custom-cakes` | Occasion cards and the enquiry form with validation |
| About | `/about` | The bakery's story, values and sample testimonials |
| Gallery | `/gallery` | Photo mosaic with a full-screen viewer (arrow keys and Esc work) |
| Contact | `/contact` | Address, opening hours with an "Open now" label, phone, email, Google Maps link |
| Not found | anything else | A friendly 404 page |

On every page: announcement bar, navbar with the logo on the left and links in the centre (mobile menu
on small screens), footer and a floating WhatsApp button.

## Folder structure

```
Bakery_Demo/
├── index.html                 Fonts and the default page description
├── package.json               Project scripts and dependencies
├── vite.config.js
├── vercel.json                Makes page addresses work on Vercel
├── public/
│   ├── _redirects             Makes page addresses work on Netlify
│   ├── favicon.svg            Browser tab icon
│   └── images/                All photos (.webp)
└── src/
    ├── main.jsx               Starts React and the router
    ├── App.jsx                The list of pages (routes) + navbar and footer
    ├── pages/                 One file per page: HomePage, MenuPage, CustomCakesPage,
    │                          AboutPage, GalleryPage, ContactPage, NotFoundPage
    ├── data/
    │   ├── siteConfig.js      Name, phone, WhatsApp, address, hours, socials, nav links
    │   ├── products.js        Menu categories, products and prices
    │   └── content.js         Category tiles, custom cake options, offers, gallery, testimonials
    ├── components/            The building blocks used by the pages (.jsx + .css each)
    │   ├── AnnouncementBar    Navbar    Footer    WhatsAppFloat
    │   ├── Hero (Home banner)    CategoryStrip    Bestsellers ("Best Sellers" row)
    │   ├── Offers    CakeBanner    Testimonials
    │   ├── Menu    CustomCakes    EnquiryForm    About    Gallery    Contact
    │   └── Shared pieces: ProductCard, SectionHeading, WhatsAppButton,
    │       Logo, Reveal (scroll animation), Icons
    ├── hooks/
    │   ├── useProducts.js     Loads the menu (loading / ready / error)
    │   └── usePageTitle.js    Sets the browser tab title for each page
    ├── services/
    │   └── bakeryService.js   Demo "backend" - the place to connect a real one
    ├── utils/
    │   ├── helpers.js         Price, date, image and WhatsApp link helpers
    │   └── validateEnquiry.js Rules for the enquiry form
    └── styles/
        └── global.css         Colours, fonts, buttons and shared styles
```

### Hosting note

Because the site has real page addresses (`/menu`, `/contact`), the host must send every
address to `index.html`. `public/_redirects` (Netlify) and `vercel.json` (Vercel) already do
this. On other hosts, switch on their "single-page app" or "rewrite all to index.html" option.

### Adding a page

1. Create `src/pages/MyPage.jsx`.
2. Add `<Route path="/my-page" element={<MyPage />} />` in `src/App.jsx`.
3. Add `{ path: '/my-page', label: 'My Page' }` to `navLinks` in `src/data/siteConfig.js`.

## How to customise it for a real bakery

Almost everything is changed in the three files inside `src/data/`. No component code needs
to be touched for the items below.

### Bakery name

1. `src/data/siteConfig.js`: change `name`, `shortName` and `tagline`.
2. `index.html`: change the `<title>` and the two `description` lines (used by Google and
   by link previews).
3. `package.json`: change `"name"` (optional, lowercase with dashes).

### Logo

The logo is in `src/components/Logo.jsx`. It is a small drawn cupcake plus the name from
`siteConfig.shortName`.

- To use the client's logo, save it as `public/images/logo.png` and replace the `<svg>...</svg>`
  block in `Logo.jsx` with:
  ```jsx
  <img src="/images/logo.png" alt="" className="logo__mark" width="42" height="42" />
  ```
- Replace `public/favicon.svg` to change the browser tab icon.

### Photos

All photos are in `public/images/`.

- **Easiest way:** save the new photo with the **same file name** as the one it replaces.
- **Or:** add a new file and type its name in the data file, for example
  `image: 'my-new-cake.webp'` in `src/data/products.js`.
- Always update the `alt` text next to it so it describes the new photo.
- Recommended sizes: product photos 800 x 600 px, large photos about 1200 px wide.
  Use `.webp` or `.jpg` and keep each file under about 250 KB
  ([squoosh.app](https://squoosh.app) is a free tool for this).
- The Home banner photo is `HERO_PHOTO` at the top of `src/components/Hero.jsx`; its headline and offer badges are in the same file.
- The "Shop by Category" cards are `categoryTiles` in `src/data/content.js`.
- About page photos are set in `src/components/About.jsx`.

The demo photos are from [Unsplash](https://unsplash.com/license) and are free to use.

### Menu items and prices

Open `src/data/products.js`. Each product looks like this:

```js
{
  id: 'cake-chocolate-truffle',      // unique, no spaces
  name: 'Belgian Chocolate Truffle Cake',
  category: 'cakes',                 // must match an id in "categories"
  price: 899,                        // rupees, number only
  unit: '500 g',
  description: '...',
  image: 'cake-chocolate-truffle.webp',
  alt: 'Describe the photo here',
  bestseller: true,                  // true = shown first on the Home page
  eggless: true,                     // true = shows the "Eggless" badge
},
```

Copy a block to add a product, delete a block to remove one. To add a category, add a line
to the `categories` list at the top of the same file.

Offers, custom cake options, gallery photos and testimonials are in `src/data/content.js`.

### Address, opening hours and Google Maps

In `src/data/siteConfig.js`:

- `address.line1` and `address.line2`: the shop address.
- `address.mapsUrl`: open the shop in Google Maps, press **Share**, copy the link, paste it here.
- `hours`: opening times in 24-hour format. They also drive the "Open now" label.

### Phone number

In `src/data/siteConfig.js`:

```js
phoneDisplay: '+91 98765 43210',   // what visitors see
phoneHref: '+919876543210',        // used by "tap to call" - no spaces
```

### WhatsApp number

In `src/data/siteConfig.js`:

```js
whatsappNumber: '919876543210',    // country code + number, digits only
```

Every WhatsApp button on the site uses this one value. The demo value `910000000000` is a
placeholder, so WhatsApp will say the number is not valid until it is replaced.
The pre-filled messages can be edited in `src/utils/helpers.js` (`whatsappMessages`).

### Colours and fonts

The colour palette and fonts are at the top of `src/styles/global.css` under `:root`.
Changing a value there updates the whole site. The fonts are loaded in `index.html`.

## Website credit

The footer shows "Designed & developed by Nandini Choudhary". Change the name, or add a portfolio
link, in `developer` inside `src/data/siteConfig.js`.

## Before using this site for a real bakery

The website no longer shows any "demo" wording, so check these before it goes live:

- **Phone and WhatsApp numbers are placeholders** (`00000 00000`). WhatsApp buttons will not
  reach anyone until a real number is set in `src/data/siteConfig.js`.
- **The enquiry form sends through WhatsApp.** It checks the details, shows a summary, then the
  visitor taps "Send enquiry on WhatsApp". Nothing is emailed or saved on a server. To send
  enquiries by email instead, edit `submitEnquiry` in `src/services/bakeryService.js` (it
  contains a commented example for a form service such as Formspree).
- **Testimonials are placeholder text.** Replace them with real customer reviews (with
  permission) in `src/data/content.js`.
- **Offers, prices, address and opening hours are placeholders** in the files under `src/data/`
  and in `src/components/Hero.jsx` (the banner offers).
- **There is no online payment.** "Order Now" buttons open a WhatsApp chat.
- The menu's short loading animation is simulated in `fetchProducts`
  (`src/services/bakeryService.js`).

## Accessibility and performance notes

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), labelled form fields, a
  "Skip to main content" link and visible keyboard focus.
- Every photo has alternative text. Photos below the first screen load lazily.
- Animations are switched off for visitors who ask their device to reduce motion.
- Works on phones, tablets and desktops.
