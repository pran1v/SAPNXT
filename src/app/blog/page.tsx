'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            title: 'Modernizing ERP with SAP BTP Integration Suite',
            excerpt: 'Learn how to bridge the gap between legacy systems and modern cloud applications using SAP BTP.',
            date: 'Feb 28, 2026',
            readTime: '5 min read',
            category: 'Integration'
        },
        {
            title: 'Harnessing Business AI: Beyond the Hype',
            excerpt: 'A practical guide to implementing Joule and SAP AI Core in your existing business processes.',
            date: 'Feb 20, 2026',
            readTime: '8 min read',
            category: 'AI'
        },
        {
            title: 'Clean Core Strategy: Why it Matters',
            excerpt: 'Keeping your S/4HANA core clean while innovating on BTP is the future of enterprise agility.',
            date: 'Feb 15, 2026',
            readTime: '6 min read',
            category: 'Strategy'
        }
    ];

    return (
        <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '6rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '5rem' }}
            >
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Insights & <span style={{ color: 'var(--accent-primary)' }}>Thinking</span></h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Exploring the intersection of SAP technology, Artificial Intelligence, and business transformation.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {posts.map((post, i) => (
                    <motion.article
                        key={i}
                        className="glass"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--border-primary)', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Calendar size={14} /> {post.date}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Clock size={14} /> {post.readTime}</span>
                            </div>
                        </div>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>{post.excerpt}</p>
                        <Link href={`/blog/${i}`} style={{ color: 'var(--accent-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Read More <ArrowRight size={18} />
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
