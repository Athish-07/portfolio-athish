import { useEffect, useRef, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState("");
  // Stable ref so the array never triggers re-runs of useEffect
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    idsRef.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // stable — no dependency on sectionIds array

  return active;
}
