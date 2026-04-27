import { motion } from "framer-motion";
import { Download, PlayCircle } from "lucide-react";

const DOWNLOAD_URL =
  "https://drive.google.com/file/d/12Lyo6C2pHtcLmWDM5YFCCwrhCViAWsgE/view";

export function CTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-coffee p-10 sm:p-14 text-center"
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full blur-3xl"
            style={{ background: "var(--brand-amber)", opacity: 0.25 }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
              Run your bookstore the smart way — starting today.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Free to download. Yours forever. No subscription, no cloud
              lock-in, no learning curve.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-brand px-5 py-3.5 text-sm font-semibold text-coffee shadow-glow hover:brightness-105 transition-all"
              >
                <Download className="h-4 w-4" />
                Download Full Version
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-all"
              >
                <PlayCircle className="h-4 w-4" />
                View Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}