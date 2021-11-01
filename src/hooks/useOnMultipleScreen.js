import { useState, useEffect } from "react";

export default function useOnMultipleScreen(options) {
  const [refs, setRefs] = useState([]);
  const [visibles, setVisibles] = useState([]);
  console.log("refs:", refs);
  console.log("visibles:", visibles);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisibles(entry.isIntersecting);
    }, options);

    if (refs) {
      for (let ref of refs) {
        console.log("ref:", ref);
        observer.observe(ref);
      }
    }

    return () => {
      if (refs) {
        for (let ref of refs) {
          observer.unobserve(ref);
        }
      }
    };
  }, [refs, options]);

  return [setRefs, visibles];
}
