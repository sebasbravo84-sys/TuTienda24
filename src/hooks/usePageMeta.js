import { useEffect } from 'react';

const SITE = 'https://tutienda24.com.ar';

export function usePageMeta({ title, description, path, noindex }) {
  useEffect(() => {
    const prevTitle = document.title;
    const restores = [];
    const set = (selector, value) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const prev = el.getAttribute(selector.includes('canonical') ? 'href' : 'content');
      el.setAttribute(selector.includes('canonical') ? 'href' : 'content', value);
      restores.push(() => el.setAttribute(selector.includes('canonical') ? 'href' : 'content', prev));
    };

    if (title) document.title = title;
    if (description) set('meta[name="description"]', description);
    if (path) set('link[rel="canonical"]', SITE + path);
    if (noindex) set('meta[name="robots"]', 'noindex, nofollow');

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
    };
  }, [title, description, path, noindex]);
}
