import { motion } from "framer-motion";
import { Download, MousePointer2, Rocket, ShieldCheck } from "lucide-react";

const DOWNLOAD_URL =
  "../../assets/Lumina-books-Setup-1.0.0.exe";

const steps = [
  {
    icon: Download,
    title: "Download the installer",
    desc: "Grab the latest .exe directly from our secure Drive link. ~60 seconds depending on your connection.",
  },
  {
    icon: MousePointer2,
    title: "Run the .exe",
    desc: "Double-click to install. No accounts, no setup wizards — Lumina is ready in moments.",
  },
  {
    icon: Rocket,
    title: "Start using it",
    desc: "Open the app, add your first products, and ring up your first sale. That's it.",
  },
];

export function Install() {
  return (
    <section id="install" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-coffee/10 bg-white px-3 py-1 text-xs font-medium text-coffee/70">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-brand" />
            3-step install · Safe & verified
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-coffee">
            Up and running in under a minute.
          </h2>
          <p className="mt-4 text-coffee/65 text-lg">
            No subscriptions. No cloud setup. Download, install, done.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative rounded-3xl border border-black/5 bg-white p-7 hover:shadow-card transition-all"
            >
              <div className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-brand text-coffee text-sm font-bold shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-coffee text-amber-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-coffee">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-coffee/65 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-brand px-6 py-3.5 text-sm font-semibold text-coffee shadow-glow hover:brightness-105 transition-all"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Lumina Books (.exe)
          </a>
        </motion.div>
      </div>
    </section>
  );
}