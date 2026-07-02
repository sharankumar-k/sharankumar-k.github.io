import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used to add the "scrolled" background style to the navbar.
 */
function useNavbarScroll(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}

export default useNavbarScroll;
