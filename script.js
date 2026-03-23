document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const experienceTabs = document.querySelectorAll(".experience-tab");
  const experiencePanel = document.getElementById("experience-panel");

  const experienceContent = {
    gmu: {
      role: "Youth Research Council Fellow · George Mason University",
      time: "Jan 2026 — Present",
      copy:
        "I conduct community-based research using surveys, interviews, and mixed-method analysis, then translate findings into evidence-based insights, written sections, and stakeholder-facing recommendations.",
      points: [
        "Analyze patterns and findings for an academic research paper.",
        "Present work in professional settings, including ESSA 2026.",
        "Apply ethical research practices and responsible data handling throughout the process.",
      ],
    },
    "sandai-cares": {
      role: "DataGen Scholar · SaNDAI Cares",
      time: "Aug 2025 — Present",
      copy:
        "Built experience across AI tools, data literacy, visualization, cloud platforms, and cybersecurity education while working in a program focused on real skill development rather than theory alone.",
      points: [
        "Led a 12+ person team building a cybersecurity module around digital risk awareness and AI-related threats.",
        "Worked with tools like ChatGPT, Gamma, NotebookLM, and Synthesia.",
        "Developed exposure to Tableau, Power BI, SQL, Azure, and AWS through applied learning.",
      ],
    },
    "sandai-global": {
      role: "DataGen Scholar Micro-Job · SaNDAI Global",
      time: "Aug 2025 — Present",
      copy:
        "Supported project work through market research, cleaner data, and AI-assisted execution — the kind of role that sharpened both reliability and communication.",
      points: [
        "Conduct in-depth market research to uncover actionable insights.",
        "Clean and aggregate data so analysis is more accurate and usable.",
        "Use generative AI tools to move faster while still communicating results clearly.",
      ],
    },
    kollegio: {
      role: "AI & Backend Engineering Intern · Kollegio",
      time: "Sep 2025 — Dec 2025",
      copy:
        "Worked on AI-supporting data and tooling by structuring datasets, improving preprocessing, and helping streamline technical workflows behind the scenes.",
      points: [
        "Built and structured a dataset of 100+ college essay prompts for model analysis.",
        "Cleaned and preprocessed data to improve downstream performance.",
        "Explored automation to reduce manual collection work and improve efficiency.",
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
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  experienceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.experience;
      const nextState = experienceContent[key];

      if (!nextState || !experiencePanel) {
        return;
      }

      experienceTabs.forEach((button) => {
        const isSelected = button === tab;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-selected", String(isSelected));
      });

      const pointsMarkup = nextState.points.map((point) => `<li>${point}</li>`).join("");

      experiencePanel.innerHTML = `
        <p class="experience-role">${nextState.role}</p>
        <p class="experience-time">${nextState.time}</p>
        <p class="experience-copy">${nextState.copy}</p>
        <ul class="experience-points">${pointsMarkup}</ul>
      `;
    });
  });
});
