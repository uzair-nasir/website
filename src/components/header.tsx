const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-[min(1100px,calc(100%-1.25rem))] items-center justify-between gap-4 md:w-[min(1100px,calc(100%-2rem))]">
        <a href="#top" className="text-sm font-semibold tracking-tight md:text-base">
          Uzair Nasir
        </a>
        <nav className="flex flex-wrap justify-end gap-3 text-xs text-muted md:gap-5 md:text-sm">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
