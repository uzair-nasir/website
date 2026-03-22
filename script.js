/*
  Small, tasteful interactions for the site:
  - reveal-on-scroll for section cards
  - focus area content switcher
*/

document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const focusTabs = document.querySelectorAll(".focus-tab");
  const focusPanel = document.getElementById("focus-panel");

  const focusContent = {
    build: {
      title: "Build systems that are useful, not ornamental.",
      description:
        "Comfortable with Python, Java, HTML/CSS, Git/GitHub, Android Studio, and VS Code — especially when the work involves clean implementation, structured data, and backend-minded thinking.",
    },
    analyze: {
      title: "Turn information into something more structured and usable.",
      description:
        "A lot of my work sits at the intersection of research, data organization, and emerging AI workflows. I like taking ambiguous input and shaping it into something clearer, cleaner, and more actionable.",
    },
    communicate: {
      title: "Work with clarity, context, and professionalism.",
      description:
        "Whether I’m contributing in a research setting, an internship environment, or a student leadership role, I care about being reliable, direct, and easy to collaborate with — not just technically capable.",
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
      {
        threshold: 0.16,
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  focusTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.focus;
      const nextState = focusContent[key];

      if (!nextState || !focusPanel) {
        return;
      }

      focusTabs.forEach((button) => {
        const isSelected = button === tab;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-selected", String(isSelected));
      });

      focusPanel.innerHTML = `
        <p class="focus-title">${nextState.title}</p>
        <p class="focus-description">${nextState.description}</p>
      `;
    });
  });
});
