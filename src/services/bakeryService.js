// ---------------------------------------------------------------------------
// DATA SERVICE (demo only)
// This website has NO backend. These two functions only imitate one so the
// site can show realistic loading and success states.
// When a real backend is ready, replace the bodies with fetch() calls.
// ---------------------------------------------------------------------------

import { products } from '../data/products.js';

// Loads the menu. The short delay imitates a network request.
// Real version, for example:
//   return fetch('/api/products').then((response) => response.json());
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

// "Sends" a custom cake enquiry.
// DEMO ONLY: nothing is sent, emailed or saved anywhere.
// Real version, for example with a form service such as Formspree:
//   return fetch('https://formspree.io/f/your-form-id', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(enquiry),
//   }).then((response) => {
//     if (!response.ok) throw new Error('Could not send enquiry');
//   });
export function submitEnquiry(enquiry) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ demo: true }), 900);
  });
}
