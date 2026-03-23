document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const experienceTabs = document.querySelectorAll(".experience-tab");
  const experiencePanel = document.getElementById("experience-panel");

  const experienceContent = {
    gmu: {
      role: "Youth Research Council Fellow · George Mason University",
      time: "Jan 2026 — Present",
      copy:
        "Community-based research using surveys, interviews, mixed methods, and stakeholder-facing recommendations.",
      points: [
        "Contribute to an academic paper and evidence-based findings.",
        "Present research in professional settings, including ESSA 2026.",
      ],
    },
    "sandai-cares": {
      role: "DataGen Scholar · SaNDAI Cares",
      time: "Aug 2025 — Present",
      copy:
        "Hands-on work across AI tools, data literacy, cloud platforms, and cybersecurity education.",
      points: [
        "Led a 12+ person team building a cybersecurity module on digital risk and AI-related threats.",
        "Built exposure to Tableau, Power BI, SQL, Azure, and AWS through applied work.",
      ],
    },
    "sandai-global": {
      role: "DataGen Scholar Micro-Job · SaNDAI Global",
      time: "Aug 2025 — Present",
      copy:
        "Market research, cleaner data, and AI-assisted execution for real project work.",
      points: [
        "Conduct research to surface actionable insights.",
        "Clean and aggregate data so analysis is more accurate and usable.",
      ],
    },
    kollegio: {
      role: "AI & Backend Engineering Intern · Kollegio",
      time: "Sep 2025 — Dec 2025",
      copy:
        "Structured data and supported technical workflows behind AI-facing tooling.",
      points: [
        "Built a dataset of 100+ college essay prompts for model analysis.",
        "Cleaned data and explored automation to reduce manual work.",
      ],
    },
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const renderExperience = (key) => {
    const nextState = experienceContent[key];

    if (!nextState || !experiencePanel) {
      return;
    }

    const pointsMarkup = nextState.points.map((point) => `<li>${point}</li>`).join("");

    experiencePanel.innerHTML = `
      <p class="experience-role">${nextState.role}</p>
      <p class="experience-time">${nextState.time}</p>
      <p class="experience-copy">${nextState.copy}</p>
      <ul class="experience-points">${pointsMarkup}</ul>
    `;
  };

  experienceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.experience;

      experienceTabs.forEach((button) => {
        const isSelected = button === tab;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-selected", String(isSelected));
      });

      if (!experiencePanel || !experienceContent[key]) {
        return;
      }

      experiencePanel.classList.add("is-updating");

      window.setTimeout(() => {
        renderExperience(key);
        requestAnimationFrame(() => {
          experiencePanel.classList.remove("is-updating");
        });
      }, 120);
    });
  });
});
