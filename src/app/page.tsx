import Image from "next/image";
import { Header } from "@/components/header";
import { certifications, experience, projects } from "@/components/site-data";

const focusAreas = ["Cybersecurity", "Research", "Data Work", "Technical Projects"];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto w-[min(1100px,calc(100%-1.25rem))] pb-16 md:w-[min(1100px,calc(100%-2rem))]">
        <section className="grid section-offset gap-8 pb-14 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:pt-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">TJHSST</p>
            <h1 className="mt-2 max-w-[14ch] text-3xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
              Engineering, cybersecurity, and practical technical work.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              I&apos;m Uzair Nasir, a student at Thomas Jefferson High School for Science and Technology building experience across cybersecurity, research, data work, and practical technical execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Resume-UzairN.txt"
                className="rounded-full border border-text bg-text px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#1d2737]"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:border-[#c7d0dd]"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            <Image
              src="/headshot-placeholder.svg"
              alt="Portrait of Uzair Nasir"
              width={822}
              height={822}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section id="about" className="section-offset border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            I&apos;m a high school student at Thomas Jefferson High School for Science and Technology interested in engineering and cybersecurity, with experience spanning research, structured data workflows, cybersecurity education, and practical project execution.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted md:text-sm">
                {area}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="section-offset border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 space-y-4 border-l border-border pl-4 md:pl-6">
            {experience.map((item) => (
              <article key={item.role} className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{item.dates}</p>
                <h3 className="mt-1 text-base font-semibold text-text md:text-lg">{item.role}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-offset border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-border bg-surface p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{project.category}</p>
                <h3 className="mt-1 text-base font-semibold md:text-lg">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-offset border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <li key={cert} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section-offset border-t border-border py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-muted md:text-base">I&apos;m always open to chatting.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:uzairnasir1412@gmail.com" className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#c7d0dd]">
              Email
            </a>
            <a href="https://www.linkedin.com/in/nasir-uzair/" target="_blank" rel="noreferrer" className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#c7d0dd]">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
