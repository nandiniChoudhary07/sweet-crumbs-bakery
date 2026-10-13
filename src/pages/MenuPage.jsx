import Menu from '../components/Menu.jsx';
import CakeBanner from '../components/CakeBanner.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function MenuPage() {
  usePageTitle('Menu');

  return (
    <>
      <Menu />
      <CakeBanner />
    </>
  );
}
