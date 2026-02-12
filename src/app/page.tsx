"use client";

import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { brands } from "@/lib/brands";

export default function Home() {
  const featuredBrands = brands.filter((b) => b.status !== "placeholder");

  return (
    <>
      <Hero />

      {/* Featured Brands */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              title="Our Brands"
              subtitle="We build and grow brands that shape arts, media, and culture."
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredBrands.map((brand, i) => (
              <ScrollReveal key={brand.slug} delay={i * 0.1}>
                <BrandCard brand={brand} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Button href="/portfolio" variant="secondary">
                View All Projects
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Have an idea?
              <br />
              <span className="text-accent">Let&apos;s build it.</span>
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Whether you&apos;re launching a brand, building an app, or creating
              something entirely new — we&apos;re here to make it happen.
            </p>
            <div className="mt-10">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
