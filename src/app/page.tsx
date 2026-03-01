'use client';

import { motion } from 'framer-motion';
import { Cpu, Cloud, Zap, BrainCircuit, Bot, Database, ArrowRight } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'SAP BTP Solutions',
      icon: <Cloud className="w-10 h-10 mb-4 text-[#008fd3]" />,
      description: 'Unlock enterprise agility with SAP Business Technology Platform.',
      items: ['Integration Suite', 'SAP Build', 'SAP HANA Cloud']
    },
    {
      title: 'Business AI',
      icon: <BrainCircuit className="w-10 h-10 mb-4 text-[#00b4ff]" />,
      description: 'Transform your business with intelligent, context-aware AI.',
      items: ['Joule AI Copilot', 'SAP AI Core', 'Generative AI Hub']
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 30%, rgba(0, 143, 211, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 180, 255, 0.1) 0%, transparent 40%), #0a0c10',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Decor */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'var(--accent-glow)',
            filter: 'blur(100px)',
            top: '-10%',
            right: '-10%',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
              Architecting the <span style={{ color: 'var(--accent-primary)' }}>Future</span> of Enterprise
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
              SAPNXT Solution delivers cutting-edge SAP BTP and Business AI integrations to drive your digital transformation.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Solutions
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-primary)',
                  color: 'white',
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <motion.h2 {...fadeInUp} className="section-title">Our Solutions</motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 143, 211, 0.2)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass"
                style={{ padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-accent)', transition: 'box-shadow 0.3s ease' }}
              >
                {service.icon}
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.8rem',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem'
                    }}>
                      <Zap className="w-4 h-4 text-[#00b4ff]" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: 'var(--section-padding)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              borderTop: '4px solid var(--accent-primary)',
              borderLeft: '4px solid var(--accent-primary)',
              opacity: 0.3
            }}></div>
            <h2 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '2rem' }}>
              Bridging the Gap Between <span style={{ color: 'var(--accent-primary)' }}>Business</span> & Technology
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              At SAPNXT Solution, we don't just provide software; we architect transformations. Our mission is to empower enterprises with the full potential of SAP's ecosystem.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              With deep-rooted expertise in SAP BTP and a forward-looking approach to Business AI, we help you build an agile, data-driven, and intelligent future.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { title: 'Excellence', desc: 'Industry-leading SAP certifications and deep domain knowledge.' },
              { title: 'Innovation', desc: 'Early adopters of SAP Business AI and Generative AI Hub.' },
              { title: 'Agility', desc: 'Rapid deployment using SAP Build and low-code solutions.' },
              { title: 'Trust', desc: 'Committed to long-term partnerships and enterprise success.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-primary)' }}
              >
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BTP Detail Section (Visual Showcase) */}
      <section style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          alignItems: 'center',
          gap: '5rem'
        }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Elevate your Business with <span style={{ color: 'var(--accent-primary)' }}>SAP BTP</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              We unify data, development, and integration in one powerhouse platform to simplify your complex landscape.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div className="stat-card">
                <h4 style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>100%</h4>
                <p style={{ color: 'var(--text-muted)' }}>Cloud Native</p>
              </div>
              <div className="stat-card">
                <h4 style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>50+</h4>
                <p style={{ color: 'var(--text-muted)' }}>Integrations</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              height: '450px',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(circle at center, rgba(0, 143, 211, 0.1) 0%, transparent 70%)'
            }}
          >
            {/* SAP BTP Visual Composition */}
            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '20%', left: '10%', zIndex: 2 }}
              >
                <Cloud className="w-24 h-24 text-[#008fd3]" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 143, 211, 0.4))' }} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '20%', right: '10%', zIndex: 2 }}
              >
                <Database className="w-24 h-24 text-[#00b4ff]" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 180, 255, 0.3))' }} />
              </motion.div>

              <Zap className="w-16 h-16 text-white opacity-40" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

              {/* Connecting Lines SVG */}
              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                <motion.path
                  d="M80 80 L220 220"
                  stroke="var(--accent-primary)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              </svg>
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', textAlign: 'center', width: '100%' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>SAP ECOSYSTEM READY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: 'var(--section-padding)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div {...fadeInUp} className="glass" style={{ padding: '4rem', borderRadius: '32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to <span style={{ color: 'var(--accent-primary)' }}>Scale?</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Partner with SAPNXT to bring SAP BTP and AI specialized knowledge to your team.</p>

            <div style={{ marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>📧 <a href="mailto:info@sapnxt.com" style={{ color: 'var(--accent-primary)' }}>info@sapnxt.com</a></p>
              <p>📍 SAPNXT SOLUTIONS LLP, 82/89, NEAR INDU NIVASH, POSANPURA, Kabirchak, Darbhanga, Bihar, India, 846009</p>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" className="glass" style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-primary)', color: 'white' }} />
              <input type="email" placeholder="Business Email" className="glass" style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-primary)', color: 'white' }} />
              <textarea placeholder="Tell us about your project" className="glass" style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-primary)', height: '150px', color: 'white' }}></textarea>
              <button className="btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
