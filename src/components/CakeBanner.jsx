import { Link } from 'react-router-dom';
import { imagePath } from '../utils/helpers.js';
import Reveal from './Reveal.jsx';
import { ArrowRightIcon } from './Icons.jsx';
import './CakeBanner.css';

// A banner that invites visitors to the Custom Cakes page.
// Used near the bottom of the Home, Menu and Gallery pages.
export default function CakeBanner() {
  return (
    <section className="section cake-banner" aria-labelledby="cake-banner-title">
      <div className="container">
        <Reveal className="cake-banner__card">
          <img
            className="cake-banner__image"
            src={imagePath('cake-berry-tiered.webp')}
            alt="Two-tier white celebration cake decorated with fresh strawberries and blueberries"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <div className="cake-banner__content">
            <p className="eyebrow">Made to order</p>
            <h2 id="cake-banner-title" className="cake-banner__title">
              Planning a celebration? Let us bake <em>the centrepiece.</em>
            </h2>
            <p className="cake-banner__text">
              Birthdays, anniversaries, weddings and festive gifting. Tell us your idea and we
              will design a cake around it.
            </p>
            <div className="cake-banner__buttons">
              <Link to="/custom-cakes" className="btn btn--light">
                Enquire About a Custom Cake
                <ArrowRightIcon size={18} />
              </Link>
              <Link to="/contact" className="cake-banner__link">
                Visit the bakery
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
