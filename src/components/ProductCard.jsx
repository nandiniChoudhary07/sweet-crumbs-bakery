import {
  buildWhatsAppLink,
  formatPrice,
  imagePath,
  whatsappMessages,
} from '../utils/helpers.js';
import { WhatsAppIcon } from './Icons.jsx';
import './ProductCard.css';

// One product tile: photo, name, price and a round "order" button.
// Used by the Home page product grid and the full Menu page.
// showDescription={false} gives the shorter version used on the Home page.
// boxed gives the bordered card with a full-width order button (Best Sellers row).
export default function ProductCard({ product, showDescription = true, boxed = false }) {
  const orderLink = buildWhatsAppLink(whatsappMessages.product(product.name));

  return (
    <article className={`product-card ${boxed ? 'product-card--boxed' : ''}`}>
      <div className="product-card__media">
        <img
          src={imagePath(product.image)}
          alt={product.alt}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
        <div className="product-card__badges">
          {product.bestseller && <span className="badge badge--dark">Bestseller</span>}
          {product.eggless && <span className="badge badge--green">Eggless</span>}
        </div>
      </div>

      <div className="product-card__body">
        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          {showDescription && <p className="product-card__description">{product.description}</p>}
          <p className="product-card__price">
            {formatPrice(product.price)}
            <span className="product-card__unit"> / {product.unit}</span>
          </p>
        </div>

        {boxed ? (
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm product-card__order-wide"
          >
            <WhatsAppIcon size={17} />
            Order Now
            <span className="visually-hidden">
              : {product.name} on WhatsApp (opens in a new tab)
            </span>
          </a>
        ) : (
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card__order"
            aria-label={`Order ${product.name} on WhatsApp (opens in a new tab)`}
            title="Order on WhatsApp"
          >
            <WhatsAppIcon size={19} />
          </a>
        )}
      </div>
    </article>
  );
}

// Grey placeholder shown in the menu while products are loading.
export function ProductCardSkeleton() {
  return (
    <div className="product-card" aria-hidden="true">
      <div className="product-card__media skeleton" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line" />
    </div>
  );
}
