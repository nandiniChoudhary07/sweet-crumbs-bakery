import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig.js';

// Sets the text shown in the browser tab, for example "Menu | Sweet Crumbs Bakery".
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  }, [title]);
}
