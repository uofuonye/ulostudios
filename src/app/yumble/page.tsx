import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yumble — Legal",
  description:
    "Privacy Policy and Terms of Service for Yumble by ULO Studios.",
};

export default function YumblePage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Yumble
          </h1>
          <p className="text-lg text-white/50 mb-12">Legal</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/yumble/privacy-policy"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
              <p className="text-sm text-white/50">
                How we collect, use, and protect your information.
              </p>
            </Link>
            <Link
              href="/yumble/terms-of-service"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <h2 className="text-xl font-semibold mb-2">Terms of Service</h2>
              <p className="text-sm text-white/50">
                Rules and guidelines for using Yumble.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
