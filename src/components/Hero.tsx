"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Arts. Media. Culture.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
        >
          ULO Studios builds brands and apps that move culture forward. We
          create at the intersection of art, technology, and community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/portfolio">View Our Work</Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
