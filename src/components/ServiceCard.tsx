"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}
