import { motion } from "framer-motion";
import {
  Gauge,
  Lock,
  WifiOff,
  Database,
  MonitorSmartphone,
  Globe,
  X,
  Check,
} from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Native speed",
    desc: "No browser overhead. Instant launch, snappy navigation, zero lag at the counter.",
  },
  {
    icon: Lock,
    title: "Stronger security",
    desc: "Your data never leaves the device. No third-party servers, no leaks, no surprises.",
  },
  {
    icon: WifiOff,
    title: "Always offline",
    desc: "Internet drops? No problem. Lumina runs fully offline with zero downtime.",
  },
  {
    icon: Database,
    title: "Local data control",
    desc: "Own your database. Backup, restore, and migrate whenever you want — your shop, your data.",
  },
];

export function DesktopAdvantage() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-coffee text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "var(--brand-amber)", opacity: 0.18 }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-amber-brand">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              Desktop advantage
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Why a real{" "}
              <span className="text-amber-brand">desktop app</span> beats
              browser tools.
            </h2>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Bookstores need software that works the moment you open it — fast,
              private, and always on. Here's why Lumina is built as a true
              desktop product, not a web tab.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-medium">
                <div className="px-4 py-3 text-white/50" />
                <div className="px-4 py-3 text-amber-brand text-center border-l border-white/10">
                  Lumina Desktop
                </div>
                <div className="px-4 py-3 text-white/50 text-center border-l border-white/10 inline-flex items-center justify-center gap-1.5">
                  <Globe className="h-3 w-3" /> Web tools
                </div>
              </div>
              {[
                ["Works offline", true, false],
                ["Local data ownership", true, false],
                ["Native performance", true, false],
                ["Zero monthly fees", true, false],
              ].map(([label, a, b]) => (
                <div
                  key={String(label)}
                  className="grid grid-cols-3 text-sm border-t border-white/10"
                >
                  <div className="px-4 py-3 text-white/80">{label}</div>
                  <div className="px-4 py-3 text-center border-l border-white/10">
                    {a ? (
                      <Check className="inline h-4 w-4 text-amber-brand" />
                    ) : (
                      <X className="inline h-4 w-4 text-white/30" />
                    )}
                  </div>
                  <div className="px-4 py-3 text-center border-l border-white/10">
                    {b ? (
                      <Check className="inline h-4 w-4 text-amber-brand" />
                    ) : (
                      <X className="inline h-4 w-4 text-white/30" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-brand text-coffee">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}