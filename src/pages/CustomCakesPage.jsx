import CustomCakes from '../components/CustomCakes.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function CustomCakesPage() {
  usePageTitle('Custom Cakes');

  return <CustomCakes />;
}
