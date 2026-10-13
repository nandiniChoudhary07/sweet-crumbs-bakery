import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/products.js';
import { useProducts } from '../hooks/useProducts.js';
import ProductCard, { ProductCardSkeleton } from './ProductCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import { AlertIcon, SearchIcon } from './Icons.jsx';
import './Menu.css';

export default function Menu() {
  const { products, status } = useProducts();
  // The chosen category lives in the page address, e.g. /menu?category=cakes,
  // so links from other pages can open the menu on a specific category.
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryInAddress = searchParams.get('category');
  const activeCategory = categories.some((category) => category.id === categoryInAddress)
    ? categoryInAddress
    : 'all';

  const setActiveCategory = (categoryId) => {
    setSearchParams(categoryId === 'all' ? {} : { category: categoryId }, { replace: true });
  };
  const [searchText, setSearchText] = useState('');

  // Work out which products match the chosen category and the search box.
  const visibleProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchText]);

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchText('');
  };

  return (
    <section className="section section--tint" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading
          id="menu-title"
          as="h1"
          eyebrow="Fresh every day"
          title={
            <>
              The bakery <em>menu</em>
            </>
          }
          description="Browse by category or search for a favourite. Tap the round button on any item to order it on WhatsApp."
        />

        <div className="menu__controls">
          <div className="menu__filters" role="group" aria-label="Filter menu by category">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`pill ${activeCategory === category.id ? 'pill--active' : ''}`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="menu__search">
            <label htmlFor="menu-search" className="visually-hidden">
              Search the menu
            </label>
            <SearchIcon size={18} />
            <input
              id="menu-search"
              type="search"
              placeholder="Search the menu"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
        </div>

        {/* Announces the number of results to screen readers when filters change */}
        <p className="menu__count" aria-live="polite">
          {status === 'ready' &&
            `Showing ${visibleProducts.length} ${
              visibleProducts.length === 1 ? 'item' : 'items'
            }`}
          {status === 'loading' && 'Loading the menu…'}
        </p>

        {/* Loading state */}
        {status === 'loading' && (
          <div className="product-grid" aria-busy="true">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
              <ProductCardSkeleton key={number} />
            ))}
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="menu__message" role="alert">
            <AlertIcon size={28} />
            <h3>We could not load the menu</h3>
            <p>Please refresh the page, or message us on WhatsApp for today’s menu.</p>
          </div>
        )}

        {/* Empty state */}
        {status === 'ready' && visibleProducts.length === 0 && (
          <div className="menu__message">
            <SearchIcon size={28} />
            <h3>No bakes match your search</h3>
            <p>Try a different word or category, or clear the filters to see everything.</p>
            <button type="button" className="btn btn--outline btn--sm" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}

        {/* Products */}
        {status === 'ready' && visibleProducts.length > 0 && (
          <ul className="product-grid">
            {visibleProducts.map((product) => (
              <li key={product.id} className="fade-in-item">
                <ProductCard product={product} boxed />
              </li>
            ))}
          </ul>
        )}

        <p className="menu__note">
          Prices are in Indian Rupees (₹) and include taxes. Please tell us about any allergies
          when you order.
        </p>
      </div>
    </section>
  );
}
