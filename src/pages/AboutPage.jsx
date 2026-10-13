import About from '../components/About.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function AboutPage() {
  usePageTitle('About Us');

  return (
    <>
      <About />
      <Testimonials />
    </>
  );
}
