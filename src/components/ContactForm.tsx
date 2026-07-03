"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:ulostudiosllc@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-white/80"
        >
          Subject <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-white/80"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-dark"
      >
        Send Message
      </button>
    </form>
  );
}
