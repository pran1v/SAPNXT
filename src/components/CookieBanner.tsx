'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="glass"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '1rem',
                        right: '1rem',
                        margin: '0 auto',
                        maxWidth: '600px',
                        padding: '1.5rem',
                        borderRadius: '20px',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        border: '1px solid var(--border-accent)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                >
                    <div>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Cookie Consent</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies and our <a href="/privacy" style={{ textDecoration: 'underline', color: 'var(--accent-secondary)' }}>Privacy Policy</a>.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button
                            onClick={acceptCookies}
                            className="btn-primary"
                            style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                        >
                            Accept
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
