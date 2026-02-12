import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ulostudios" },
  { label: "Facebook", href: "https://www.facebook.com/ulostudios/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ulostudios" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-xl font-bold tracking-widest">
              ULO STUDIOS
            </Link>
            <p className="mt-2 text-sm text-white/40 max-w-xs">
              Building brands and apps across arts, media, and culture.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Pages
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Social
              </h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          &copy; 2026 ULO Studios LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
