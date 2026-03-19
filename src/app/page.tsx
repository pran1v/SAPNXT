'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud, Zap, BrainCircuit, Database, CheckCircle, AlertCircle,
  Loader2, Linkedin, Layers, GitBranch, Cpu, Sparkles, Bot, Network, ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// ── TECHNOLOGY DATA ──────────────────────────────────────────────────────────

const coreTechnologies = [
  {
    id: 'btp',
    title: 'SAP BTP',
    subtitle: 'Business Technology Platform',
    icon: <Cloud className="tech-icon" />,
    color: '#008fd3',
    glow: 'rgba(0,143,211,0.3)',
    description: 'The unified cloud platform for integration, analytics, AI, and development — your digital transformation backbone.',
    chips: ['Integration Suite', 'SAP Build', 'HANA Cloud', 'Event Mesh'],
  },
  {
    id: 's4hana',
    title: 'S/4HANA',
    subtitle: 'Intelligent ERP Core',
    icon: <Database className="tech-icon" />,
    color: '#0070f3',
    glow: 'rgba(0,112,243,0.3)',
    description: 'SAP\'s next-gen ERP on HANA in-memory DB — real-time analytics, clean core architecture, and AI-embedded processes.',
    chips: ['Finance', 'Supply Chain', 'Manufacturing', 'Clean Core'],
  },
  {
    id: 'fiori',
    title: 'SAP UI5 / Fiori',
    subtitle: 'Modern Enterprise UX',
    icon: <Layers className="tech-icon" />,
    color: '#00c4b4',
    glow: 'rgba(0,196,180,0.3)',
    description: 'Role-based, responsive Fiori apps powered by the UI5 framework — beautiful interfaces that talk to S/4HANA via OData.',
    chips: ['Fiori Elements', 'SAPUI5', 'Freestyle Apps', 'Launchpad'],
  },
  {
    id: 'odata',
    title: 'OData Services',
    subtitle: 'REST-Based Data API',
    icon: <GitBranch className="tech-icon" />,
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    description: 'Standardised REST protocol connecting Fiori frontends to SAP backends — enabling seamless CRUD operations at enterprise scale.',
    chips: ['OData v4', 'CDS Views', 'ABAP RAP', 'Semantic APIs'],
  },
  {
    id: 'cap',
    title: 'CAP Framework',
    subtitle: 'Cloud Application Programming',
    icon: <Cpu className="tech-icon" />,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    description: 'SAP\'s opinionated framework for building cloud-native services on BTP — accelerating development with Node.js or Java.',
    chips: ['CDS Modelling', 'Node.js / Java', 'Auto OData', 'Multi-tenancy'],
  },
  {
    id: 'integration',
    title: 'Integration Suite',
    subtitle: 'Hybrid Integration Platform',
    icon: <Network className="tech-icon" />,
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    description: 'Pre-built iFlows and adapters to connect SAP and non-SAP systems — API management, EDI, and event-driven integration.',
    chips: ['iFlow Designer', 'API Portal', 'Open Connectors', 'Event Broker'],
  },
];

const aiTechnologies = [
  {
    id: 'genai',
    title: 'Generative AI',
    subtitle: 'SAP AI Core & Generative AI Hub',
    icon: <Sparkles className="ai-icon" />,
    color: '#e879f9',
    glow: 'rgba(232,121,249,0.4)',
    description: 'Access 30+ foundation models via SAP\'s Generative AI Hub — build intelligent document processing, summarisation, and code generation embedded into SAP workflows.',
    features: ['LLM Access Gateway', 'Prompt Engineering', 'RAG Pipelines', 'AI SDK for BTP'],
  },
  {
    id: 'joule',
    title: 'Joule',
    subtitle: 'SAP\'s Generative AI Copilot',
    icon: <Bot className="ai-icon" />,
    color: '#f97316',
    glow: 'rgba(249,115,22,0.4)',
    description: 'Embedded across S/4HANA Cloud, SuccessFactors, and BTP — Joule understands natural language, automates workflows, surfaces insights, and even writes code for your developers.',
    features: ['Natural Language UX', 'Workflow Automation', 'Copilot for Developers', 'Cross-App Context'],
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    subtitle: 'Autonomous AI Agents on SAP BTP',
    icon: <BrainCircuit className="ai-icon" />,
    color: '#00b4ff',
    glow: 'rgba(0,180,255,0.4)',
    description: 'Beyond copilots — AI agents that perceive context, plan multi-step tasks, and act autonomously across SAP systems. Built on Joule Studio, they self-optimise finance, supply chain, and HR processes without constant human oversight.',
    features: ['Joule Studio Agents', 'Multi-Step Reasoning', 'Process Orchestration', 'Self-Optimising Workflows'],
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="homepage">

      {/* ── HERO ── */}
      <section id="hero" className="hero-section hero-grid-bg" style={{
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 10vh, 8rem) 0 4rem',
      }}>
        {/* Animated floating orbs */}
        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ maxWidth: '860px' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
            >
              <Sparkles size={14} />
              <span>SAP Certified · BTP · Business AI</span>
            </motion.div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1.8rem', marginTop: '1.2rem' }}>
              Architecting the{' '}
              <span className="shimmer-text" style={{ fontWeight: 800 }}>Future</span>{' '}
              of Enterprise
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              SAPNXT Solution delivers cutting-edge SAP BTP, S/4HANA, and Business AI integrations — from clean-core architecture to autonomous Agentic AI workflows.
            </p>

            {/* Tech pill row */}
            <div className="tech-pills">
              {['BTP', 'S/4HANA', 'Fiori', 'CAP', 'OData', 'Joule', 'Agentic AI'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            <div className="hero-buttons" style={{ marginTop: '2.5rem' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Technologies <ArrowRight size={16} style={{ display: 'inline', marginLeft: '6px' }} />
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: '50+', label: 'Integrations Delivered' },
              { value: '100%', label: 'Cloud Native' },
              { value: '10+', label: 'Years SAP Expertise' },
              { value: '3x', label: 'Faster Deployments' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-item"
              >
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE TECHNOLOGIES ── */}
      <section id="technologies" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-eyebrow">Our Expertise</p>
            <h2>SAP <span className="gradient-text">Technology Stack</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '1rem auto', fontSize: '1.05rem' }}>
              End-to-end expertise across the entire SAP ecosystem — from the database layer to AI-native user experiences.
            </p>
          </motion.div>

          <div className="tech-grid">
            {coreTechnologies.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -8, boxShadow: `0 28px 56px ${tech.glow}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="tech-card glass magic-border"
              >
                <div className="tech-card-header">
                  <div className="tech-icon-wrap" style={{ background: `${tech.color}18`, boxShadow: `0 0 20px ${tech.glow}` }}>
                    <span style={{ color: tech.color }}>{tech.icon}</span>
                  </div>
                  <div>
                    <h3 className="tech-card-title">{tech.title}</h3>
                    <p className="tech-card-subtitle" style={{ color: tech.color }}>{tech.subtitle}</p>
                  </div>
                </div>
                <p className="tech-card-desc">{tech.description}</p>
                <div className="chip-row">
                  {tech.chips.map(c => (
                    <span key={c} className="chip" style={{ borderColor: `${tech.color}40`, color: tech.color }}>{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS AI SECTION ── */}
      <section id="ai" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(232,121,249,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-eyebrow" style={{ color: '#e879f9' }}>Next Frontier</p>
            <h2>SAP <span style={{ color: '#e879f9' }}>Business AI</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '1rem auto', fontSize: '1.05rem' }}>
              We embed AI at every layer — from generative copilots to fully autonomous agents that run your enterprise processes hands-free.
            </p>
          </motion.div>

          <div className="ai-grid">
            {aiTechnologies.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, y: -6, boxShadow: `0 32px 64px ${tech.glow}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="ai-card glass magic-border"
              >
                <div className="ai-card-glow" style={{ background: `radial-gradient(circle at top left, ${tech.glow} 0%, transparent 60%)` }} aria-hidden="true" />
                <div className="ai-icon-wrap" style={{ background: `${tech.color}15`, boxShadow: `0 0 30px ${tech.glow}` }}>
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                </div>
                <h3 className="ai-card-title" style={{ color: tech.color }}>{tech.title}</h3>
                <p className="ai-card-subtitle">{tech.subtitle}</p>
                <p className="ai-card-desc">{tech.description}</p>
                <ul className="ai-features">
                  {tech.features.map(f => (
                    <li key={f}>
                      <Zap size={12} style={{ color: tech.color, flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT ALL CONNECTS ── */}
      <section id="services" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-eyebrow">Our Approach</p>
            <h2>How It All <span className="gradient-text">Connects</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '1rem auto' }}>
              Every layer of your SAP landscape works in harmony — from the ERP core to the AI assistant your team talks to every day.
            </p>
          </motion.div>

          <div className="connect-grid">
            {[
              {
                step: '01', title: 'Clean Core S/4HANA',
                desc: 'We establish a robust, extensible S/4HANA foundation using BTP side-by-side extensions — no custom code in the core.',
                icon: <Database size={24} />, color: '#0070f3',
              },
              {
                step: '02', title: 'API & Integration Layer',
                desc: 'CAP services expose clean OData APIs; Integration Suite connects your SAP and non-SAP landscape with pre-built iFlows.',
                icon: <GitBranch size={24} />, color: '#10b981',
              },
              {
                step: '03', title: 'Beautiful Fiori UX',
                desc: 'Role-based SAP UI5 / Fiori apps give your users a consumer-grade experience on any device, backed by the OData layer.',
                icon: <Layers size={24} />, color: '#00c4b4',
              },
              {
                step: '04', title: 'AI & Automation',
                desc: 'Joule and Agentic AI agents are woven into every process — answering questions, automating tasks, and self-optimising workflows.',
                icon: <BrainCircuit size={24} />, color: '#e879f9',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -4, boxShadow: `0 20px 40px ${item.color}25` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="connect-card glass magic-border"
              >
                <div className="connect-step" style={{ color: item.color }}>{item.step}</div>
                <div className="connect-icon" style={{ color: item.color, background: `${item.color}15` }}>{item.icon}</div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-eyebrow">About Us</p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Bridging the Gap Between{' '}
                <span className="gradient-text">Business</span> &amp; Technology
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                At SAPNXT Solution, we don't just deliver software — we architect end-to-end SAP transformations that are built to last and ready for the AI era.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Our consultants hold deep expertise across SAP BTP, S/4HANA, CAP, Fiori, and the full Business AI stack — so you get one partner for your entire landscape.
              </p>
            </motion.div>

            <div className="values-grid">
              {[
                { title: 'Excellence', desc: 'Industry-leading SAP certifications across BTP, S/4HANA & AI.', color: '#008fd3' },
                { title: 'Innovation', desc: 'Early adopters of SAP Joule and Agentic AI frameworks.', color: '#e879f9' },
                { title: 'Agility', desc: 'CAP-based rapid deployment — 3× faster than traditional projects.', color: '#10b981' },
                { title: 'Trust', desc: 'Clean-core approach protecting your SAP investment long-term.', color: '#f59e0b' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass value-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="value-dot" style={{ background: item.color }} />
                  <h4 style={{ color: item.color, marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section id="case-studies" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-eyebrow">Proven Impact</p>
            <h2>Success <span className="gradient-text">Stories</span></h2>
          </motion.div>

          <div className="cases-grid">
            {[
              {
                title: 'Global Logistics Integration',
                client: 'Fortune 500 Logistics',
                desc: 'Streamlined cross-border operations using SAP BTP Integration Suite and CAP services, reducing processing time by 40%.',
                tags: ['Integration Suite', 'CAP', 'OData'],
                metric: '40%', metricLabel: 'Faster Processing',
              },
              {
                title: 'AI-Driven Supply Chain',
                client: 'Manufacturing Leader',
                desc: 'Deployed SAP AI Core with Agentic AI agents to predict maintenance needs autonomously, saving $2M in annual downtime costs.',
                tags: ['Agentic AI', 'AI Core', 'S/4HANA'],
                metric: '$2M', metricLabel: 'Cost Savings / yr',
              },
              {
                title: 'Fiori UX Transformation',
                client: 'Banking Group',
                desc: 'Replaced legacy SAPGUI with 60+ role-based Fiori apps on UI5, dramatically improving employee productivity and satisfaction.',
                tags: ['SAP UI5', 'Fiori', 'OData v4'],
                metric: '60+', metricLabel: 'Apps Delivered',
              },
            ].map((study, i) => (
              <motion.div
                key={i}
                className="case-card glass magic-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -6, boxShadow: `0 24px 48px rgba(0, 143, 211, 0.15)` }}
              >
                <div className="case-metric">
                  <span className="metric-value gradient-text">{study.metric}</span>
                  <span className="metric-label">{study.metricLabel}</span>
                </div>
                <span className="case-client">{study.client}</span>
                <h3 style={{ margin: '0.5rem 0 0.8rem', fontSize: '1.25rem' }}>{study.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{study.desc}</p>
                <div className="chip-row">
                  {study.tags.map(tag => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <motion.div
            {...fadeInUp}
            className="glass contact-card magic-border"
          >
            <p className="section-eyebrow" style={{ textAlign: 'center' }}>Let's Build Together</p>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Ready to <span className="gradient-text">Scale?</span>
            </h2>

            <div className="contact-meta">
              <p>📧 info@sapnxt.com</p>
              <p>📍 82/89, NEAR INDU NIVASH, POSANPURA, Kabirchak, Darbhanga, Bihar, India - 846009</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <a href="https://linkedin.com/company/sapnxt" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ opacity: 0.7 }}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-box"
              >
                <CheckCircle className="w-12 h-12" style={{ color: '#4ade80', margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#4ade80', marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-outline"
                  style={{ marginTop: '1.5rem' }}
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
                  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '4b8d308d-7f28-4d2b-9bb7-d83d1b8ce393';
                  formData.append('access_key', accessKey);
                  formData.append('subject', 'New Contact Form Submission - SAPNXT');
                  formData.append('from_name', 'SAPNXT Website');
                  try {
                    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
                    const data = await res.json();
                    if (data.success) {
                      setSubmitStatus('success');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      console.error('Web3Forms error:', data);
                      setSubmitStatus('error');
                    }
                  } catch (err) {
                    console.error('Form error:', err);
                    setSubmitStatus('error');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="contact-form"
              >
                <input type="text" name="name" required placeholder="Your Name" className="form-input glass" />
                <input type="email" name="email" required placeholder="Business Email" className="form-input glass" />
                <textarea name="message" required placeholder="Tell us about your project..." className="form-input glass form-textarea" />

                {submitStatus === 'error' && (
                  <div className="error-msg">
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-primary submit-btn">
                  {isSubmitting ? (
                    <><Loader2 size={18} className="spin" /> Sending...</>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
