import { Link } from 'react-router-dom';
import { categoryTiles } from '../data/content.js';
import { imagePath } from '../utils/helpers.js';
import './CategoryStrip.css';

// "Shop by Category" band on the Home page.
// Each card opens the Menu page filtered to that category.
// Edit the cards in src/data/content.js (categoryTiles).
export default function CategoryStrip() {
  return (
    <section className="category-strip" aria-labelledby="category-strip-title">
      <div className="container category-strip__inner">
        <div className="category-strip__heading">
          <h2 id="category-strip-title">Shop by Category</h2>
          <p>Pick a favourite and see everything we bake.</p>
        </div>

        <ul className="category-strip__list">
          {categoryTiles.map((tile) => (
            <li key={tile.label}>
              <Link to={tile.link} className="category-tile">
                {/* The label already names the card, so the photo is decorative */}
                <img
                  src={imagePath(tile.image)}
                  alt=""
                  width="400"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
                <span className="category-tile__label">{tile.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
