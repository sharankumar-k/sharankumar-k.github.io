import { useEffect, useRef, useState } from "react";

/**
 * Adds a "reveal on scroll" effect to any section.
 * Attach the returned ref to the element you want to animate, and spread
 * the returned className onto it: it starts as "hidden" and switches to
 * "hidden show" once the element scrolls into view (matching the
 * .hidden / .show classes from the original CSS).
 */
function useScrollReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const className = isVisible ? "hidden show" : "hidden";

  return { ref, className };
}

export default useScrollReveal;
