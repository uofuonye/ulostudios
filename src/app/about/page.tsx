"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to create experiences that haven't been seen before.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community",
    description: "Everything we build is designed to bring people together and foster meaningful connections.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Quality",
    description: "We obsess over the details. Every pixel, every word, every interaction is intentional.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Culture",
    description: "We're rooted in culture — art, music, food, and the stories that connect us all.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Company Story */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                About ULO Studios
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-6">
                ULO Studios is a creative company on a mission to build brands and
                apps that shape arts, media, and culture. We believe in the power
                of creativity to connect people and move culture forward.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                Founded with the vision of creating meaningful experiences at the
                intersection of art and technology, ULO Studios develops brands
                that resonate, apps that engage, and communities that thrive. From
                Cellar Lounge to Yumble and beyond, every project is a step toward
                a more vibrant, connected world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we create."
            />
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading title="Leadership" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/founder.jpg"
                alt="Uche Ofuonye"
                className="h-48 w-48 shrink-0 rounded-2xl border border-white/10 object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1">Uche Ofuonye</h3>
                <p className="text-accent text-sm mb-4">
                  Founder & Creative Director
                </p>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  A creative entrepreneur passionate about building at the
                  intersection of art, technology, and culture. With a background
                  spanning media, design, and product development, Uche leads ULO
                  Studios&apos; vision to create brands and experiences that truly
                  matter.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
