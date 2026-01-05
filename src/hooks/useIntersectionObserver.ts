import { useEffect } from "react";

export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  callback: () => void,
  enabled: boolean = true,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    if (!enabled) return;
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        callback();
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, enabled, options]);
};
