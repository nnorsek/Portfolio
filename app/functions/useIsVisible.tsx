import { RefObject, useEffect, useState } from "react";

export function useIsVisible(ref: RefObject<Element | null>): boolean {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        observer.unobserve(node); // stop observing after first appearance
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);

  return hasBeenVisible;
}
