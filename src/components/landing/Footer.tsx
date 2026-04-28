import { BookOpen, Heart, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coffee text-amber-brand">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-coffee">Lumina Books</div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-coffee/50">
                  Smart Inventory · POS
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-coffee/65 max-w-sm leading-relaxed">
              A focused desktop solution for modern bookstores — fast, secure, offline-ready, and
              yours to keep.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-coffee/50 font-medium">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#features" className="text-coffee/75 hover:text-amber-brand">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-coffee/75 hover:text-amber-brand">
                  Live Demo
                </a>
              </li>
              <li>
                <a href="#install" className="text-coffee/75 hover:text-amber-brand">
                  Install Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="text-coffee/75 hover:text-amber-brand">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.16em] text-coffee/50 font-medium">
              Support
            </div>
            <a
              href="mailto:mdmostafijarrahman204@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm text-coffee hover:border-amber-brand/40 transition-colors"
            >
              <Mail className="h-4 w-4 text-amber-brand" />
              mdmostafijarrahman204@gmail.com
            </a>
            <p className="mt-3 text-xs text-coffee/55">
              Secure & verified · No tracking, no piracy, no mining.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs text-coffee/55">
          <div>© {new Date().getFullYear()} Lumina Books. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-amber-brand fill-current" /> by{" "}
            <span className="font-semibold text-green-700">BITFORGE AGENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
