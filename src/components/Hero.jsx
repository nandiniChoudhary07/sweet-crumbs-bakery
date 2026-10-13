import { Link } from 'react-router-dom';
import { imagePath } from '../utils/helpers.js';
import './Hero.css';

// The big banner at the top of the Home page.
// The photo is set with HERO_PHOTO. The offer badges are written further down.
const HERO_PHOTO = 'croissants-tray.webp';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Background photo. The headline describes the banner, so the photo is decorative. */}
      <img className="hero__photo" src={imagePath(HERO_PHOTO)} alt="" />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            The Royal Taste of Fresh Baking
            <em>Enjoy Every Crumb</em>
          </h1>
          <p className="hero__text">
            Handcrafted cakes, flaky pastries and slow-fermented breads, baked in small batches
            every morning.
          </p>

          <div className="hero__actions">
            <Link to="/menu" className="btn btn--accent">
              Shop Now
            </Link>

            <p className="hero__delivery">
              <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
                <path d="M1 5h13v11H1zM14 9h4l4 4v3h-8z" />
                <circle cx="6" cy="18" r="2.2" />
                <circle cx="17.500" cy="18" r="2.2" />
              </svg>
              <span>
                <strong>Free delivery</strong>
                on orders above ₹799
              </span>
            </p>
          </div>
        </div>

        {/* Round offer badge */}
        <p className="hero__badge">
          <span className="hero__badge-small">Save</span>
          <span className="hero__badge-big">10%</span>
          <span className="hero__badge-small">on your first order</span>
        </p>
      </div>
    </section>
  );
}
