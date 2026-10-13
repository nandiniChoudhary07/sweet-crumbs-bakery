import Gallery from '../components/Gallery.jsx';
import CakeBanner from '../components/CakeBanner.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function GalleryPage() {
  usePageTitle('Gallery');

  return (
    <>
      <Gallery />
      <CakeBanner />
    </>
  );
}
