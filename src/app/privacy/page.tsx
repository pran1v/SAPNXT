'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', paddingBottom: '4rem', maxWidth: '800px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-primary)' }}>Privacy Policy</h1>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        We only collect information that you voluntarily provide to us through our contact form, such as your name, business email, and project details. This information is used solely to respond to your inquiries.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        The data collected is used to:
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Provide consulting services and respond to requests.</li>
                            <li>Improve our website and user experience.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Data Security</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. GDPR & DPDP Compliance</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        If you are located in the EU or India, you have certain rights regarding your personal data, including the right to access, correct, or delete your information. Contact us at info@sapnxt.com to exercise these rights.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        If you have any questions about this Privacy Policy, please contact us at info@sapnxt.com.
                    </p>
                </section>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4rem' }}>
                    Last Updated: March 2026
                </p>
            </motion.div>
        </div>
    );
}
