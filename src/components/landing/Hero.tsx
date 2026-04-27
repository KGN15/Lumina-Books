import { motion } from "framer-motion";
import {
  PlayCircle,
  Download,
  ShieldCheck,
  Wifi,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { DashboardMock } from "./DashboardMock";

const DOWNLOAD_URL =
  "../../assets/Lumina-books-Setup-1.0.0.exe";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Floating amber blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "var(--brand-amber)", opacity: 0.18 }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "var(--brand-coffee)", opacity: 0.08 }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-coffee/10 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-coffee/80"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-brand" />
              Built for modern bookstores · Desktop-first
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-coffee leading-[1.05]"
            >
              Manage your bookstore{" "}
              <span className="relative inline-block">
                <span className="relative z-10">like a pro</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 bg-amber-brand/40 rounded-sm -z-0"
                />
              </span>
              <br /> from inventory to sale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-coffee/70 max-w-xl leading-relaxed"
            >
              A fast, secure desktop solution that combines smart inventory
              tracking, lightning-quick POS billing, and clean analytics — all
              working flawlessly offline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-brand px-5 py-3.5 text-sm font-semibold text-coffee shadow-glow hover:brightness-105 transition-all"
              >
                <PlayCircle className="h-4.5 w-4.5" />
                View Live Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-coffee px-5 py-3.5 text-sm font-semibold text-white hover:bg-coffee-soft transition-all"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Full Version
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-coffee/70"
            >
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-brand" /> Lightning fast
              </span>
              <span className="inline-flex items-center gap-2">
                <Wifi className="h-4 w-4 text-amber-brand" /> Works offline
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-brand" /> Local & secure
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}