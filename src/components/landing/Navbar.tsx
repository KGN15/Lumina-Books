import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { BookOpen, Menu, X, Download } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
];

const DOWNLOAD_URL = "../../assets/Lumina-books-Setup-1.0.0.exe";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "glass border-black/5 shadow-soft px-4 py-2.5"
              : "border-transparent px-2 py-2"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coffee text-amber-brand shadow-soft">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-tight text-coffee">
                Lumina Books
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Inventory · POS
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm font-medium text-coffee/80 hover:text-coffee rounded-lg hover:bg-coffee/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-coffee px-4 py-2.5 text-sm font-medium text-white hover:bg-coffee-soft transition-all shadow-soft"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-coffee hover:bg-coffee/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl glass border border-black/5 shadow-soft p-3"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-coffee/85 rounded-lg hover:bg-coffee/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-coffee px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Download
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}