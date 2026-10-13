import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle.js';

// Shown when someone opens an address that does not exist, e.g. /cupcakez
export default function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 id="not-found-title" className="section-heading__title">
          This page is <em>all sold out</em>
        </h1>
        <p className="section-heading__text">
          We could not find the page you were looking for. It may have been moved or the link may
          be mistyped.
        </p>
        <div className="not-found__buttons">
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
          <Link to="/menu" className="btn btn--outline">
            See the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
