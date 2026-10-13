import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/bakeryService.js';

// Loads the menu and reports its status: 'loading', 'ready' or 'error'.
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    fetchProducts()
      .then((data) => {
        if (cancelled) return;
        setProducts(data);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    // If the component is removed before loading finishes, ignore the result.
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, status };
}
