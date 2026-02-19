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
            Effective Date: February 19, 2026
          </p>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Introduction
              </h2>
              <p>
                Yumble (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                operated by ULO Studios. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use the Yumble mobile application and related services
                (collectively, the &quot;Service&quot;). By using the Service,
                you agree to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white/80">Account Information:</strong>{" "}
                  Name, email address, username, and profile photo when you
                  create an account.
                </li>
                <li>
                  <strong className="text-white/80">User Content:</strong>{" "}
                  Photos, reviews, recipes, and other content you post to the
                  Service.
                </li>
                <li>
                  <strong className="text-white/80">Usage Data:</strong>{" "}
                  Information about how you interact with the Service, including
                  pages viewed, features used, and time spent.
                </li>
                <li>
                  <strong className="text-white/80">Device Information:</strong>{" "}
                  Device type, operating system, unique device identifiers, and
                  mobile network information.
                </li>
                <li>
                  <strong className="text-white/80">Location Data:</strong>{" "}
                  With your permission, we may collect approximate or precise
                  location data to provide location-based features.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve the Service.</li>
                <li>To personalize your experience and deliver relevant content.</li>
                <li>To communicate with you about updates, promotions, and support.</li>
                <li>To monitor and analyze usage trends and preferences.</li>
                <li>To detect, prevent, and address technical issues or fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with trusted third-party service providers who assist
                us in operating the Service, conducting our business, or serving
                our users — so long as those parties agree to keep this
                information confidential. We may also disclose information when
                required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Data Security
              </h2>
              <p>
                We implement commercially reasonable security measures to protect
                your personal information. However, no method of electronic
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Your Choices
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may update or delete your account information at any time
                  through the app settings.
                </li>
                <li>
                  You may opt out of promotional communications by following the
                  unsubscribe instructions in those messages.
                </li>
                <li>
                  You may disable location services through your device settings.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Children&apos;s Privacy
              </h2>
              <p>
                The Service is not intended for children under the age of 13. We
                do not knowingly collect personal information from children under
                13. If we learn that we have collected such information, we will
                take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the effective date. Your continued use of the
                Service after changes constitutes acceptance of the updated
                policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:hello@ulostudios.com"
                  className="text-accent hover:underline"
                >
                  hello@ulostudios.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
