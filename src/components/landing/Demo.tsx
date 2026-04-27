import { motion } from "framer-motion";
import { ExternalLink, MousePointerClick } from "lucide-react";

const DEMO_URL = "https://bsmsdemo.netlify.app/";

export function Demo() {
  return (
    <section id="demo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-coffee/10 bg-white px-3 py-1 text-xs font-medium text-coffee/70">
              <MousePointerClick className="h-3.5 w-3.5 text-amber-brand" />
              Live, interactive demo
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-coffee">
              Try Lumina right here.{" "}
              <span className="text-coffee/50">No install needed.</span>
            </h2>
            <p className="mt-4 text-coffee/65 text-lg">
              Add a product, run a sale, watch the dashboard update in real
              time. Click anywhere inside the window to interact.
            </p>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-coffee px-4 py-2.5 text-sm font-medium text-white hover:bg-coffee-soft transition-all"
          >
            Open in new tab
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-coffee p-2 shadow-glow"
        >
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-[11px] text-white/70">
              {DEMO_URL}
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden bg-white">
            <iframe
              src={DEMO_URL}
              title="Lumina Books live demo"
              loading="lazy"
              className="block w-full h-[640px] md:h-[720px] bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}