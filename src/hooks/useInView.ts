import { useEffect, useRef, useState } from 'react';

/**
 * useInView — returns a ref and a boolean indicating whether
 * the element has entered the viewport. Once revealed, stays revealed.
 *
 * Uses IntersectionObserver with a generous rootMargin so the focus
 * transition begins before the element is fully visible — the way
 * you'd notice something coming into focus as you turn a page.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string; once?: boolean }
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      threshold = 0.15,
      rootMargin = '0px 0px -10% 0px',
      once = true,
    } = options ?? {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.once]);

  return { ref, inView } as const;
}
