document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const experienceTabs = document.querySelectorAll(".experience-tab");
  const experiencePanel = document.getElementById("experience-panel");

  const experienceContent = {
    kollegio: {
      role: "AI & Backend Engineering Intern",
      org: "Kollegio",
      copy:
        "Built a structured dataset of 100+ college essay prompts and contributed to backend and data workflow improvements — the kind of work where organization and implementation both matter.",
      points: [
        "Structured messy information into a more usable internal dataset.",
        "Worked close to backend and data workflows instead of staying purely conceptual.",
        "Contributed in a setting where speed had to stay paired with accuracy.",
      ],
    },
    gmu: {
      role: "Youth Research Council Fellow",
      org: "George Mason University",
      copy:
        "Worked in a research setting where good thinking had to be backed by rigor, communication, and follow-through — not just interest.",
      points: [
        "Contributed in an environment that valued clarity and disciplined analysis.",
        "Built experience around research-minded problem framing and communication.",
        "Learned how to be useful inside a more serious academic context.",
      ],
    },
    sandai: {
      role: "DataGen Scholar + Micro-Job Contributor",
      org: "SaNDAI Cares / SaNDAI Global",
      copy:
        "Worked with AI tools, data tasks, and research support work that rewarded adaptability, precision, and practical thinking around emerging technology.",
      points: [
        "Used AI-adjacent tools in real task-driven workflows.",
        "Supported data and research work with an execution-first mindset.",
        "Built comfort working across newer tools without losing structure.",
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

      const pointsMarkup = nextState.points
        .map((point) => `<li>${point}</li>`)
        .join("");

      experiencePanel.innerHTML = `
        <p class="experience-role">${nextState.role}</p>
        <h3>${nextState.org}</h3>
        <p class="experience-copy">${nextState.copy}</p>
        <ul class="experience-points">${pointsMarkup}</ul>
      `;
    });
  });
});
