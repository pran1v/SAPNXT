'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const menuVariants = {
        closed: { opacity: 0, y: -20, pointerEvents: 'none' },
        open: { opacity: 1, y: 0, pointerEvents: 'auto' }
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.3s ease',
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 2rem'
            }}>
                {/* CSS/SVG Smart Logo */}
                <motion.div
                    className="logo-branding"
                    initial="initial"
                    animate="animate"
                    variants={logoVariants}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        userSelect: 'none',
                        zIndex: 1001
                    }}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <span style={{
                            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-1px'
                        }}>SAP</span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #008fd3 0%, #00b4ff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            NXT
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ marginLeft: '4px', filter: 'drop-shadow(0 0 5px rgba(0, 180, 255, 0.5))' }}
                            >
                                <path
                                    d="M13 5L20 12L13 19M5 5L12 12L5 19"
                                    stroke="#00b4ff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <span style={{
                        fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '4px',
                        marginTop: '-4px',
                        textTransform: 'uppercase'
                    }}>
                        SOLUTIONS
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="links desktop-only" style={{ display: 'flex', gap: '2.5rem', fontWeight: 500 }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-only" style={{ zIndex: 1001 }}>
                    <button onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: 'rgba(10, 12, 16, 0.98)',
                                backdropFilter: 'blur(20px)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                zIndex: 1000
                            }}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 700,
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                }
            `}</style>
        </nav>
    );
}
