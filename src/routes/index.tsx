import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DesktopAdvantage } from "@/components/landing/DesktopAdvantage";
import { Demo } from "@/components/landing/Demo";
import { TechStack } from "@/components/landing/TechStack";
import { Install } from "@/components/landing/Install";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Lumina Books — Smart Inventory & POS for Bookstores",
      },
      {
        name: "description",
        content:
          "Lumina Books is a fast, secure desktop POS and inventory app for bookstores. Offline-first, local data, instant billing — built with Electron, React & Node.js.",
      },
      { property: "og:title", content: "Lumina Books — Smart Inventory & POS for Bookstores" },
      {
        property: "og:description",
        content:
          "Manage your bookstore like a pro — inventory, POS, analytics, and offline support in one premium desktop app.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DesktopAdvantage />
        <Demo />
        <TechStack />
        <Install />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
