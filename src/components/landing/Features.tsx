import { motion } from "framer-motion";
import {
  Package,
  ScanBarcode,
  LineChart,
  WifiOff,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Tracking",
    desc: "Auto low-stock alerts, fast search, category management and supplier records — never lose a title again.",
    points: ["Low-stock alerts", "Bulk import", "Category tags"],
  },
  {
    icon: ScanBarcode,
    title: "POS System",
    desc: "Lightning-fast billing with barcode scanner support, instant receipts and multiple payment modes.",
    points: ["Barcode scan", "Instant receipts", "Discount rules"],
  },
  {
    icon: LineChart,
    title: "Sales Analytics",
    desc: "Clean weekly and monthly charts that show what's selling, what's slow, and where your profit lives.",
    points: ["Daily reports", "Top sellers", "Profit insights"],
  },
  {
    icon: WifiOff,
    title: "Offline First",
    desc: "Runs 100% without internet. Your data stays local, fast, and always available — even during outages.",
    points: ["Local DB", "Zero downtime", "Auto backup"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-coffee/10 bg-white px-3 py-1 text-xs font-medium text-coffee/70">
            Core modules
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-coffee">
            Everything your bookstore needs.{" "}
            <span className="text-coffee/50">Nothing it doesn't.</span>
          </h2>
          <p className="mt-4 text-coffee/65 text-lg">
            Four focused modules engineered to make running a bookshop feel
            effortless — from the back office to the front counter.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 hover:shadow-card transition-all"
            >
              <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: "var(--brand-amber)", opacity: 0.18 }}
              />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-coffee text-amber-brand">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-coffee">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-coffee/65 leading-relaxed">
                  {f.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs text-coffee/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-amber-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}