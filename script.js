/*
  Minimal enhancement only:
  - reveal sections as they enter the viewport
  - keep sticky-nav anchor scrolling aligned and highlight the current section
*/

document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal, .reveal-delay");
  const sectionLinks = document.querySelectorAll("[data-section-link]");
  const sections = [...sectionLinks]
    .map((link) => document.getElementById(link.dataset.sectionLink))
    .filter(Boolean);

  const setActiveLink = (id) => {
    sectionLinks.forEach((link) => {
      const isActive = link.dataset.sectionLink === id;
      link.classList.toggle("is-active", isActive);
      link.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const getScrollOffset = () => {
    const rootStyles = window.getComputedStyle(document.documentElement);
    const navOffset = parseFloat(rootStyles.getPropertyValue("--nav-offset"));
    return Number.isFinite(navOffset) ? navOffset * 16 : 96;
  };

  sectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.dataset.sectionLink);

      if (!target) {
        return;
      }

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior: "smooth" });
      setActiveLink(link.dataset.sectionLink);
    });
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    if (sections[0]) {
      setActiveLink(sections[0].id);
    }
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveLink(visible.target.id);
      }
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-18% 0px -55% 0px",
    }
  );

  sections.forEach((section) => navObserver.observe(section));
  if (sections[0]) {
    setActiveLink(sections[0].id);
  }
});
