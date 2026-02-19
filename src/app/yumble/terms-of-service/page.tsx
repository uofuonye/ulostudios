import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yumble — Terms of Service",
  description: "Terms of Service for Yumble by ULO Studios.",
};

export default function YumbleTermsOfServicePage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-white/50 mb-4">Yumble</p>
          <p className="text-sm text-white/40 mb-16">
            Effective Date: February 19, 2026
          </p>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Yumble (the &quot;Service&quot;), operated
                by ULO Studios, you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, do not
                use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Use of the Service
              </h2>
              <p className="mb-3">
                You agree to use the Service only for lawful purposes. You may
                not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service in any way that violates applicable laws or regulations.</li>
                <li>Post content that is false, misleading, defamatory, obscene, or otherwise objectionable.</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
                <li>Attempt to gain unauthorized access to any part of the Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. User Accounts
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. User Content
              </h2>
              <p>
                You retain ownership of content you post to the Service. By
                posting content, you grant ULO Studios a non-exclusive,
                worldwide, royalty-free license to use, reproduce, modify,
                display, and distribute your content in connection with operating
                and improving the Service. You are solely responsible for the
                content you post and represent that you have all necessary rights
                to grant this license.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Intellectual Property
              </h2>
              <p>
                The Service and its original content (excluding user-generated
                content), features, and functionality are owned by ULO Studios
                and are protected by copyright, trademark, and other intellectual
                property laws. You may not copy, modify, or distribute any part
                of the Service without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Termination
              </h2>
              <p>
                We may terminate or suspend your access to the Service at any
                time, without prior notice or liability, for any reason,
                including if you breach these Terms. Upon termination, your right
                to use the Service will cease immediately.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p>
                The Service is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, either
                express or implied. We do not warrant that the Service will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, ULO Studios shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, arising from your use of the
                Service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify you of material changes by posting the updated Terms on
                this page. Your continued use of the Service after changes
                constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of the United States, without regard to conflict of law
                principles.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at{" "}
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
