import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yumble — Privacy Policy",
  description: "Privacy Policy for Yumble by ULO Studios.",
};

export default function YumblePrivacyPolicyPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/50 mb-4">Yumble</p>
          <p className="text-sm text-white/40 mb-16">
            Last updated: February 20, 2026
          </p>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                Yumble collects the following information to provide and improve
                our meal planning service:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong className="text-white/80">Account Information:</strong>{" "}
                  When you create an account, we collect your name and email
                  address for authentication purposes.
                </li>
                <li>
                  <strong className="text-white/80">
                    Family &amp; Dietary Data:
                  </strong>{" "}
                  Information you provide about your family members, including
                  names, ages, dietary preferences, allergies, and food
                  restrictions. This data is used solely to generate
                  personalized meal plans.
                </li>
                <li>
                  <strong className="text-white/80">Meal Plan Data:</strong>{" "}
                  Your generated meal plans, cooking history, favorite meals, and
                  meal ratings.
                </li>
                <li>
                  <strong className="text-white/80">
                    Pantry &amp; Shopping Data:
                  </strong>{" "}
                  Items you add to your pantry, shopping lists, and kitchen
                  inventory. This data stays on your device and is synced to your
                  private account.
                </li>
                <li>
                  <strong className="text-white/80">Device Information:</strong>{" "}
                  Basic device identifiers for authentication and push
                  notifications. We do not collect location data, contacts, or
                  photos.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Generate personalized meal plans tailored to your
                  family&apos;s dietary needs, preferences, and allergies
                </li>
                <li>
                  Build smart shopping lists based on your meal plans and pantry
                  inventory
                </li>
                <li>
                  Send notifications about expiring pantry items, shopping
                  reminders, and meal plan updates (only if you opt in)
                </li>
                <li>
                  Improve meal recommendations over time based on your cooking
                  history and favorites
                </li>
                <li>
                  Provide customer support and respond to your requests
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. AI-Powered Meal Generation
              </h2>
              <p className="mb-3">
                Yumble uses AI services to generate meal plans and recipes. When
                generating meals, we send your family&apos;s dietary
                preferences, allergies, and restrictions to our AI provider to
                create appropriate recommendations. We do not send your name,
                email, or other personally identifying information to AI
                services.
              </p>
              <p>
                AI-generated content is reviewed for safety and nutritional
                balance, but you should always verify recipes against known
                allergies and dietary requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Data Storage &amp; Security
              </h2>
              <p className="mb-3">
                Your data is stored securely using industry-standard encryption
                both in transit and at rest. Family and meal plan data is stored
                in cloud services to enable cross-device access within your
                family account.
              </p>
              <p>
                We use Firebase Authentication for secure sign-in and Cloudflare
                Workers as a proxy for API communications, ensuring your API keys
                and credentials are never exposed on-device.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Data Sharing
              </h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information to third
                parties.
              </p>
              <p className="mb-3">We share data only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white/80">Service providers</strong>{" "}
                  that help us operate Yumble (cloud hosting, authentication, AI
                  meal generation). These providers are contractually bound to
                  protect your data.
                </li>
                <li>
                  <strong className="text-white/80">Family members</strong>{" "}
                  within your Yumble family group can see shared meal plans,
                  shopping lists, and pantry data.
                </li>
                <li>
                  <strong className="text-white/80">Legal requirements</strong>{" "}
                  if required by law, regulation, or legal process.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Your Rights &amp; Choices
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data at any time through the app</li>
                <li>
                  Update your family information, dietary preferences, and
                  notification settings
                </li>
                <li>
                  Delete all your data by using the &quot;Delete All Data&quot;
                  option in Settings, which permanently removes your account and
                  all associated data
                </li>
                <li>Opt out of notifications at any time through Settings</li>
              </ul>
              <p className="mt-3">
                If you delete your account, all data is permanently removed and
                cannot be recovered.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Children&apos;s Privacy
              </h2>
              <p className="mb-3">
                Yumble is designed for families and may include information about
                children as part of family meal planning. We collect
                children&apos;s names, ages, and dietary information only as
                provided by a parent or guardian, and only for the purpose of
                generating age-appropriate meal recommendations.
              </p>
              <p>
                Children cannot create accounts independently. All child data is
                managed by the parent or guardian who created the family account.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Data Retention
              </h2>
              <p className="mb-3">
                We retain your data for as long as your account is active. Meal
                plan history is kept to improve future recommendations. If you
                delete your account, all data is deleted immediately.
              </p>
              <p>
                Anonymized, aggregated data (such as popular meal categories) may
                be retained for service improvement purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes through the app. Continued use
                of Yumble after changes constitutes acceptance of the updated
                policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or your data,
                contact us at:{" "}
                <a
                  href="mailto:info@ulostudios.com"
                  className="text-accent hover:underline"
                >
                  info@ulostudios.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
