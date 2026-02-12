"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ulostudios" },
  { label: "Facebook", href: "https://www.facebook.com/ulostudios/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ulostudios" },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Have an idea, a question, or just want to say hello? Drop us a
                line and we&apos;ll get back to you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:info@ulostudios.com"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      info@ulostudios.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                      Location
                    </h3>
                    <p className="text-white/60">United States</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                      Social
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-sm text-white/60 hover:text-accent transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
