'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, BrainCircuit, Database, CheckCircle, AlertCircle, Loader2, Linkedin } from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 30%, rgba(0, 143, 211, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 180, 255, 0.1) 0%, transparent 40%), #0a0c10',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Architecting the <span style={{ color: 'var(--accent-primary)' }}>Future</span> of Enterprise
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
              SAPNXT Solution delivers cutting-edge SAP BTP and Business AI integrations to drive your digital transformation.
            </p>
            <div className="hero-buttons">
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
          <motion.h2 {...fadeInUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Solutions</motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: '2rem',
            marginTop: '2rem'
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
                style={{ padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-accent)', transition: 'box-shadow 0.3s ease' }}
              >
                {service.icon}
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.8rem',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
              Bridging the Gap Between <span style={{ color: 'var(--accent-primary)' }}>Business</span> & Technology
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              At SAPNXT Solution, we don't just provide software; we architect transformations.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Excellence', desc: 'Industry-leading SAP certifications.' },
              { title: 'Innovation', desc: 'Early adopters of SAP Business AI.' },
              { title: 'Agility', desc: 'Rapid deployment solutions.' },
              { title: 'Trust', desc: 'Committed to enterprise success.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-primary)' }}
              >
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.h2 {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>Success Stories</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Global Logistics Integration',
                client: 'Fortune 500 Logistics',
                desc: 'Streamlined cross-border operations using SAP BTP Integration Suite, reducing processing time by 40%.',
                tags: ['Integration Suite', 'HANA Cloud']
              },
              {
                title: 'AI-Driven Supply Chain',
                client: 'Manufacturing Leader',
                desc: 'Implemented SAP AI Core to predict maintenance needs, saving $2M in annual downtime costs.',
                tags: ['AI Core', 'Business AI']
              },
              {
                title: 'Financial Analytics Cloud',
                client: 'Banking Group',
                desc: 'Migrated legacy reporting to SAP Analytics Cloud, providing real-time visibility across 12 regions.',
                tags: ['SAC', 'BTP']
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                className="glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-primary)' }}
              >
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600 }}>{study.client}</span>
                <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.4rem' }}>{study.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{study.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {study.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem', background: 'rgba(0,143,211,0.1)', borderRadius: '100px', border: '1px solid var(--border-accent)' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Elevate your Business with <span style={{ color: 'var(--accent-primary)' }}>SAP BTP</span></h2>
            <div className="stat-card-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="stat-card">
                <h4 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)' }}>100%</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Cloud Native</p>
              </div>
              <div className="stat-card">
                <h4 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)' }}>50+</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Integrations</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              height: 'clamp(300px, 50vw, 450px)',
              borderRadius: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(circle at center, rgba(0, 143, 211, 0.1) 0%, transparent 70%)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Cloud className="w-20 h-20 text-[#008fd3]" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 143, 211, 0.4))' }} />
              </motion.div>
              <Database className="w-16 h-16 text-[#00b4ff] opacity-40" />
            </div>
            <div style={{ position: 'absolute', bottom: '1.5rem', textAlign: 'center', width: '100%' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>SAP ECOSYSTEM READY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: 'var(--section-padding)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div {...fadeInUp} className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem' }}>Ready to <span style={{ color: 'var(--accent-primary)' }}>Scale?</span></h2>

            <div style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>📧 info@sapnxt.com</p>
              <p style={{ lineHeight: 1.4, marginBottom: '1.5rem' }}>📍 82/89, NEAR INDU NIVASH, POSANPURA, Kabirchak, Darbhanga, Bihar, India - 846009</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', opacity: 0.6 }}>
                <a href="https://linkedin.com/company/sapnxt" target="_blank" rel="noopener noreferrer" className="nav-link"><Linkedin size={20} /></a>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '2rem', background: 'rgba(0, 255, 0, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 255, 0, 0.2)' }}
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-secondary"
                  style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--border-primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus('idle');

                  const formData = new FormData(e.currentTarget);
                  // Fallback to hardcoded key so form works in production even if env var is not set
                  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '4b8d308d-7f28-4d2b-9bb7-d83d1b8ce393';
                  formData.append("access_key", accessKey);
                  formData.append("subject", "New Contact Form Submission - SAPNXT");
                  formData.append("from_name", "SAPNXT Website");

                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });

                    const data = await response.json();

                    if (data.success) {
                      setSubmitStatus('success');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      console.error('Web3Forms error:', data);
                      setSubmitStatus('error');
                    }
                  } catch (error) {
                    console.error('Form submission error:', error);
                    setSubmitStatus('error');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="glass"
                  style={{ padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid var(--border-primary)', color: 'white', background: 'rgba(255,255,255,0.05)' }}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Business Email"
                  className="glass"
                  style={{ padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid var(--border-primary)', color: 'white', background: 'rgba(255,255,255,0.05)' }}
                />
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project"
                  className="glass"
                  style={{ padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid var(--border-primary)', height: '120px', color: 'white', background: 'rgba(255,255,255,0.05)' }}
                ></textarea>

                {submitStatus === 'error' && (
                  <div style={{ color: '#f87171', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}

          </motion.div>
        </div>
      </section>
    </div>
  );
}
