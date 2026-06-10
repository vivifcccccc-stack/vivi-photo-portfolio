import Link from "next/link";

const navItems = [
  { href: "/", label: "FILM" },
  { href: "/photographs", label: "PHOTOGRAPHS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" }
];

const photographItems = ["GIRLHOOD", "LIGHT", "MEMORY", "SEA", "SUMMER"];

const rednoteUrl = "https://www.xiaohongshu.com/search_result?keyword=vivifcccccc_98";

function RednoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.2 9.2h7.6M8.2 12h7.6M9.4 14.8h5.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-xl md:inset-y-0 md:right-auto md:w-72 md:border-b-0 md:border-r md:bg-paper">
      <nav className="flex items-center justify-between px-5 py-4 md:h-full md:flex-col md:items-start md:justify-start md:px-8 md:py-10">
        <Link href="/" className="font-serif text-lg leading-none tracking-[0.1em] text-ink md:text-xl">
          vivi
        </Link>
        <div className="hidden w-full flex-col pt-16 text-[13px] uppercase tracking-[0.18em] text-ink/72 md:flex">
          {navItems.map((item) => (
            <div key={item.href} className="border-t border-ink/12 py-5">
              <Link href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
              {item.label === "PHOTOGRAPHS" ? (
                <div className="mt-5 flex flex-col gap-3 text-[11px] tracking-[0.12em] text-ink/45">
                  {photographItems.map((category) => (
                    <Link key={category} href={`/photographs#${category.toLowerCase()}`} className="transition hover:text-ink">
                      {category}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <Link href="/contact" className="text-[11px] uppercase tracking-[0.24em] text-ink/70 underline-offset-4 hover:text-ink hover:underline md:hidden">
          Contact
        </Link>
        <div className="mt-auto hidden flex-col gap-4 text-ink/60 md:flex">
          <p className="text-[12px] text-ink/45">&copy; 2026</p>
          <a
            href={rednoteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Vivi on Rednote"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-ink/55 transition hover:border-ink hover:text-ink"
          >
            <RednoteIcon />
          </a>
        </div>
      </nav>
      <div className="flex gap-5 overflow-x-auto px-5 pb-3 text-[11px] uppercase tracking-[0.16em] text-ink/60 md:hidden">
        {[...navItems, ...photographItems.map((category) => ({ href: `/photographs#${category.toLowerCase()}`, label: category }))].map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="whitespace-nowrap">
              {item.label}
            </Link>
          ))}
      </div>
    </header>
  );
}
