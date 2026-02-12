"use client";

import { motion } from "framer-motion";
import type { Brand } from "@/lib/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const statusStyles = {
    live: "bg-green-500/10 text-green-400 border-green-500/20",
    "coming-soon": "bg-accent/10 text-accent border-accent/20",
    placeholder: "bg-white/5 text-white/40 border-white/10",
  };

  const statusLabels = {
    live: "Live",
    "coming-soon": "Coming Soon",
    placeholder: "TBA",
  };

  const CardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-accent/30"
    >
      <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-white/5 overflow-hidden">
        {brand.image ? (
          <img
            src={brand.image}
            alt={brand.name}
            className="h-full w-full object-contain p-6"
          />
        ) : (
          <span className="text-4xl font-bold text-white/10">
            {brand.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-white/40">
          {brand.category}
        </span>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[brand.status]}`}
        >
          {statusLabels[brand.status]}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
      <p className="text-sm text-white/60 leading-relaxed flex-1">
        {brand.description}
      </p>
      {brand.url && (
        <span className="mt-4 inline-flex items-center text-sm text-accent group-hover:underline">
          Visit site
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      )}
    </motion.div>
  );

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
