import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll reveal. On every route it finds the text and cards inside
 * <section>s and the footer, hides them, and animates each one in (fade + slide,
 * headings also un-blur) the first time it scrolls into view. Cards in the same
 * grid/row are staggered.
 *
 * It uses the Web Animations API and the standalone `translate` property, so it
 * never fights Tailwind's `transition-*` or hover `transform` utilities.
 */

// Children of these layouts are treated as "cards" and staggered.
const CARD_GROUPS = [
  "section .grid > *",
  "section [class*='flex-col'][class*='gap'] > [class*='rounded']",
  "footer .grid > *",
].join(",");

// Standalone text / UI pieces that aren't inside a card.
const TEXT = [
  "section h1",
  "section h2",
  "section h3",
  "section p",
  "section [class*='rounded-full'][class*='inline-flex']", // badges
  "section a[class*='rounded']",
  "section button",
  "section form",
  "section ul",
  "section [data-state]", // accordions
].join(",");

const SKIP = ".animate-marquee, [data-no-reveal], header, [role='dialog']";
const PENDING = "reveal-pending";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const targets = new Map<Element, { delay: number; heading: boolean }>();

    const isInsideTarget = (el: Element) => {
      for (let p = el.parentElement; p; p = p.parentElement) {
        if (targets.has(p)) return true;
      }
      return false;
    };

    // 1. Cards first, staggered by position within their parent.
    document.querySelectorAll(CARD_GROUPS).forEach((el) => {
      if (el.closest(SKIP) || isInsideTarget(el)) return;
      // Skip "cards" that are just wrappers of a whole layout (e.g. hero columns with lots inside)
      if (el.querySelectorAll("h1, h2").length > 0 && el.querySelectorAll("*").length > 60) return;
      const index = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      targets.set(el, { delay: Math.min(index, 8) * 90, heading: false });
    });

    // 2. Then standalone text, staggered within its parent block.
    const textCounters = new Map<Element, number>();
    document.querySelectorAll(TEXT).forEach((el) => {
      if (el.closest(SKIP) || targets.has(el) || isInsideTarget(el)) return;
      // Don't animate an element that contains other targets.
      for (const t of targets.keys()) if (el.contains(t)) return;
      const parent = el.parentElement ?? document.body;
      const n = textCounters.get(parent) ?? 0;
      textCounters.set(parent, n + 1);
      targets.set(el, { delay: Math.min(n, 6) * 80, heading: /^H[1-3]$/.test(el.tagName) });
    });

    targets.forEach((_, el) => el.classList.add(PENDING));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          // Scrolled past it without it ever "entering" (fast scroll / jump link): just show it.
          if (!entry.isIntersecting) {
            if (entry.boundingClientRect.bottom < 0) {
              observer.unobserve(el);
              el.classList.remove(PENDING);
            }
            return;
          }
          const opts = targets.get(el);
          observer.unobserve(el);
          if (!opts) return;
          el.classList.remove(PENDING);
          el.animate(
            opts.heading
              ? [
                  { opacity: 0, translate: "0 28px", filter: "blur(8px)" },
                  { opacity: 1, translate: "0 0", filter: "blur(0)" },
                ]
              : [
                  { opacity: 0, translate: "0 32px", scale: "0.98" },
                  { opacity: 1, translate: "0 0", scale: "1" },
                ],
            {
              duration: opts.heading ? 800 : 700,
              delay: opts.delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
        });
      },
      // threshold 0 so elements taller than the viewport still trigger
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );

    targets.forEach((_, el) => observer.observe(el));

    // Last-resort safety net: never leave content invisible (e.g. if observers are throttled).
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(`.${PENDING}`).forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.remove(PENDING);
      });
    }, 2500);
    const onScrollEnd = () => {
      document.querySelectorAll(`.${PENDING}`).forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          observer.unobserve(el);
          el.classList.remove(PENDING);
        }
      });
    };
    let scrollTimer = 0;
    const onScroll = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(onScrollEnd, 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(failsafe);
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      targets.forEach((_, el) => el.classList.remove(PENDING));
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
