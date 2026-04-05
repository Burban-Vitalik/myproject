import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const navigationLinks = [
    { href: "/about", label: t('Navigation.about_us') },
    { href: "/contact", label: t('Navigation.contacts') },
    { href: "/privacy", label: t('Navigation.privacy') },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="text-lg font-semibold text-slate-900">
            PillTrack
          </div>

          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-slate-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <span className="text-sm text-slate-400">
              © {year}
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}