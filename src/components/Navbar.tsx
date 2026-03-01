'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.3s ease'
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
                        userSelect: 'none'
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <span style={{
                            fontSize: '1.8rem',
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-1px'
                        }}>SAP</span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.8rem',
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #008fd3 0%, #00b4ff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            NXT
                            <svg
                                width="24"
                                height="24"
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
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '4px',
                        marginTop: '-4px',
                        textTransform: 'uppercase'
                    }}>
                        SOLUTIONS
                    </span>
                </motion.div>

                <div className="links" style={{ display: 'flex', gap: '2.5rem', fontWeight: 500 }}>
                    <a href="#hero" className="nav-link">Home</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
}
