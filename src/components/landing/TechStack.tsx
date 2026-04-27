import { motion } from "framer-motion";
import { Atom, Server, Monitor, Database, Code2, Layers } from "lucide-react";

const stack = [
  { icon: Monitor, name: "Electron.js", desc: "Cross-platform desktop runtime" },
  { icon: Atom, name: "React 19", desc: "Modern, reactive UI" },
  { icon: Server, name: "Node.js", desc: "Reliable backend logic" },
  { icon: Database, name: "SQLite", desc: "Local-first database" },
  { icon: Code2, name: "TypeScript", desc: "Type-safe codebase" },
  { icon: Layers, name: "Tailwind CSS", desc: "Polished design system" },
];

export function TechStack() {
  return (
    <section className="relative py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-coffee/50 font-medium">
            Built on a modern stack
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-coffee">
            Engineered with proven, production-grade tools
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-black/5 bg-white p-4 text-center hover:shadow-soft transition-all"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-coffee text-amber-brand group-hover:bg-amber-brand group-hover:text-coffee transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm font-semibold text-coffee">
                {s.name}
              </div>
              <div className="text-[11px] text-coffee/55 mt-0.5">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}