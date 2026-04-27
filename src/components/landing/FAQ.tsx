import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is Lumina Books safe? Could the .exe be flagged?",
    a: "Yes, Lumina Books is fully safe. It's a standard Electron desktop app with no piracy, mining, or telemetry. Some browsers may show a generic download warning for unsigned .exe files — this is normal for indie desktop apps. You can scan it with any antivirus and reach out at our support email anytime.",
  },
  {
    q: "Does it really work without internet?",
    a: "Yes. Lumina is offline-first. The app, your inventory, your sales and your reports all live locally. You can run an entire bookstore without ever connecting to the internet.",
  },
  {
    q: "Where is my data stored?",
    a: "All data lives on your own device in a local SQLite database. You own it. You can back it up, copy it, or move it to another machine whenever you want.",
  },
  {
    q: "Is there a subscription or monthly fee?",
    a: "No. Lumina Books is a one-time desktop install. No accounts, no subscriptions, no hidden charges.",
  },
  {
    q: "What operating systems are supported?",
    a: "The current build ships as a Windows .exe. macOS and Linux builds are on the roadmap.",
  },
  {
    q: "How do I get support if something breaks?",
    a: "Email us at mdmostafijarrahman204@gmail.com — we respond fast and personally.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-coffee/10 bg-white px-3 py-1 text-xs font-medium text-coffee/70">
            Frequently asked questions
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-coffee">
            Answers, before you ask.
          </h2>
          <p className="mt-3 text-coffee/65">
            Still curious? Email{" "}
            <a
              href="mailto:mdmostafijarrahman204@gmail.com"
              className="text-amber-brand font-medium underline-offset-4 hover:underline"
            >
              mdmostafijarrahman204@gmail.com
            </a>
            .
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="rounded-2xl border border-black/5 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-coffee">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
                      isOpen
                        ? "bg-amber-brand text-coffee rotate-45"
                        : "bg-coffee/5 text-coffee/70"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm text-coffee/70 leading-relaxed">
                    {f.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}