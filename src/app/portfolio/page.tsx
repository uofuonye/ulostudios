"use client";

import ScrollReveal from "@/components/ScrollReveal";
import BrandCard from "@/components/BrandCard";
import Button from "@/components/Button";
import { brands } from "@/lib/brands";

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Portfolio
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                A showcase of the brands and projects we&apos;re building at ULO
                Studios. Each one is a step toward our mission of shaping arts,
                media, and culture.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.slug} delay={i * 0.1}>
                <BrandCard brand={brand} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to be next?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                We&apos;re always looking for the next great idea to bring to life.
                Let&apos;s talk about yours.
              </p>
              <Button href="/contact">Start a Project</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
