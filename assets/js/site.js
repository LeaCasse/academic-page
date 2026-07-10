(() => {
  "use strict";

  const body = document.body;
  body.classList.add("site-enhanced");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Progressive reveal: content remains fully visible when JavaScript is unavailable.
  const revealItems = [...document.querySelectorAll(".reveal-on-scroll")];
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -36px 0px" });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      revealObserver.observe(item);
    });
  }

  // Scroll progress and compact back-to-top control.
  const progressBar = document.querySelector(".scroll-progress span");
  const backToTop = document.querySelector(".back-to-top");
  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 620);
  };
  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));

  // Filterable archive pages.
  document.querySelectorAll("[data-filter-root]").forEach((root) => {
    const search = root.querySelector("[data-filter-search]");
    const select = root.querySelector("[data-filter-select]");
    const cards = [...root.querySelectorAll(".filter-card")];
    const count = root.querySelector("[data-filter-count]");
    const empty = root.querySelector("[data-filter-empty]");

    const normalise = (value) => (value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const refresh = () => {
      const query = normalise(search?.value);
      const category = normalise(select?.value);
      let visible = 0;

      cards.forEach((card) => {
        const text = normalise(card.dataset.search || card.textContent);
        const cardCategory = normalise(card.dataset.category);
        const matchesText = !query || text.includes(query);
        const matchesCategory = !category || cardCategory.includes(category);
        const show = matchesText && matchesCategory;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (count) count.textContent = `${visible} ${visible === 1 ? "item" : "items"}`;
      if (empty) empty.hidden = visible !== 0;
    };

    search?.addEventListener("input", refresh);
    select?.addEventListener("change", refresh);
    refresh();
  });


  // Highlight the current research section while scrolling.
  const sectionNav = document.querySelector(".section-nav");
  if (sectionNav && "IntersectionObserver" in window) {
    const links = [...sectionNav.querySelectorAll("a[href^='#']")];
    const targets = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    const targetObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.4] });
    targets.forEach((target) => targetObserver.observe(target));
  }

  // Copy citation buttons with a clear, reversible state.
  document.querySelectorAll("[data-copy-text]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyText || "";
      const original = button.innerHTML;
      try {
        await navigator.clipboard.writeText(value);
        button.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Copied';
      } catch (_) {
        const area = document.createElement("textarea");
        area.value = value;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        button.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Copied';
      }
      window.setTimeout(() => { button.innerHTML = original; }, 1800);
    });
  });


  const themeControl = document.querySelector("#theme-toggle a[role='button']");
  themeControl?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      themeControl.click();
    }
  });

  // Keep the navigation toggle state accessible when the legacy greedy-nav plugin acts on it.
  const navToggle = document.querySelector(".greedy-nav__toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      window.setTimeout(() => {
        const hiddenLinks = document.querySelector(".greedy-nav .hidden-links");
        const expanded = hiddenLinks ? !hiddenLinks.classList.contains("hidden") : false;
        navToggle.setAttribute("aria-expanded", String(expanded));
      }, 0);
    });
  }
})();
