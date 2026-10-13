import Hero from '../components/Hero.jsx';
import CategoryStrip from '../components/CategoryStrip.jsx';
import Bestsellers from '../components/Bestsellers.jsx';
import Offers from '../components/Offers.jsx';
import CakeBanner from '../components/CakeBanner.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function HomePage() {
  usePageTitle('Fresh Cakes, Cupcakes & Pastries');

  return (
    <>
      <Hero />
      <CategoryStrip />
      <Bestsellers />
      <Offers />
      <CakeBanner />
      <Testimonials />
    </>
  );
}
