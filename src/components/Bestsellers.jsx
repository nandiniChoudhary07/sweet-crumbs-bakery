import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons.jsx';
import './Bestsellers.css';

// "Best Sellers" row on the Home page: a sideways-scrolling row of every
// product marked "bestseller: true" in src/data/products.js.
const bestsellers = products.filter((product) => product.bestseller);

export default function Bestsellers() {
  const rowRef = useRef(null);

  // The arrow buttons move the row by roughly one screen of cards.
  // Visitors can also swipe or scroll the row directly.
  const scrollRow = (direction) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * row.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section bestsellers" aria-labelledby="bestsellers-title">
      <div className="container">
        <div className="bestsellers__header">
          <h2 id="bestsellers-title" className="bestsellers__title">
            Best Sellers
          </h2>
          <Link to="/menu" className="btn btn--accent btn--sm">
            View All
          </Link>
        </div>

        <div className="bestsellers__carousel">
          <button
            type="button"
            className="bestsellers__arrow bestsellers__arrow--previous"
            onClick={() => scrollRow(-1)}
            aria-label="Show previous best sellers"
          >
            <ArrowLeftIcon size={18} />
          </button>

          {/* tabIndex lets keyboard users focus the row and scroll it with the arrow keys */}
          <ul
            ref={rowRef}
            className="bestsellers__row"
            tabIndex={0}
            aria-label="Best selling products"
          >
            {bestsellers.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} boxed showDescription={false} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="bestsellers__arrow bestsellers__arrow--next"
            onClick={() => scrollRow(1)}
            aria-label="Show more best sellers"
          >
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
