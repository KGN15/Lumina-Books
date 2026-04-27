import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  ShoppingCart,
  Package,
  Search,
  Bell,
  CircleUser,
  AlertTriangle,
} from "lucide-react";

const bars = [38, 56, 42, 71, 60, 84, 67];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export function DashboardMock() {
  return (
    <div className="relative">
      {/* Floating side cards */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="hidden md:flex absolute -left-6 top-24 z-20 items-center gap-3 rounded-2xl bg-white shadow-card border border-black/5 px-4 py-3 animate-float-slow"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-brand/15 text-amber-brand">
          <ShoppingCart className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-coffee/50">
            New sale
          </div>
          <div className="text-sm font-semibold text-coffee">৳ 1,240 · 3 items</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="hidden md:flex absolute -right-4 bottom-16 z-20 items-center gap-3 rounded-2xl bg-white shadow-card border border-black/5 px-4 py-3 animate-float-slow"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coffee text-amber-brand">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-coffee/50">
            Low stock
          </div>
          <div className="text-sm font-semibold text-coffee">3 titles need restock</div>
        </div>
      </motion.div>

      {/* Browser / app frame */}
      <div className="relative rounded-3xl bg-coffee p-2 shadow-glow">
        <div className="rounded-[20px] overflow-hidden bg-white">
          {/* Top chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-white">
            <span className="h-2.5 w-2.5 rounded-full bg-coffee/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-coffee/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-coffee/15" />
            <div className="ml-3 flex-1 flex items-center gap-2 rounded-md bg-coffee/5 px-2.5 py-1 text-[11px] text-coffee/60">
              <Search className="h-3 w-3" />
              lumina-books · dashboard
            </div>
          </div>

          <div className="grid grid-cols-12 min-h-[420px]">
            {/* Sidebar */}
            <div className="col-span-3 bg-coffee text-white/90 px-3 py-4 hidden sm:block">
              <div className="flex items-center gap-2 px-2 mb-5">
                <div className="h-7 w-7 rounded-lg bg-amber-brand flex items-center justify-center text-coffee">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">Lumina</span>
              </div>
              {[
                { icon: TrendingUp, label: "Dashboard", active: true },
                { icon: Package, label: "Inventory" },
                { icon: ShoppingCart, label: "POS" },
                { icon: BookOpen, label: "Catalog" },
              ].map((it) => (
                <div
                  key={it.label}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs mb-1 ${
                    it.active
                      ? "bg-white/10 text-amber-brand"
                      : "text-white/60"
                  }`}
                >
                  <it.icon className="h-3.5 w-3.5" />
                  {it.label}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="col-span-12 sm:col-span-9 p-4 sm:p-5">
              {/* Topbar */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[11px] text-coffee/50 uppercase tracking-wider">
                    Overview
                  </div>
                  <div className="text-sm font-semibold text-coffee">
                    Today's snapshot
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-coffee/50" />
                  <CircleUser className="h-5 w-5 text-coffee/60" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Sales", value: "৳ 24,580", trend: "+12%" },
                  { label: "Orders", value: "184", trend: "+8%" },
                  { label: "Stock", value: "1,420", trend: "98%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-black/5 bg-white p-3"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-coffee/50">
                      {s.label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-coffee">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-amber-brand font-medium mt-0.5">
                      {s.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-4 rounded-xl border border-black/5 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-coffee">
                    Weekly sales
                  </div>
                  <div className="text-[10px] text-coffee/50">Last 7 days</div>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.7 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 rounded-md bg-gradient-amber relative overflow-hidden"
                    >
                      <div className="absolute inset-0 animate-shimmer" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {days.map((d, i) => (
                    <div
                      key={i}
                      className="flex-1 text-center text-[10px] text-coffee/40"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}