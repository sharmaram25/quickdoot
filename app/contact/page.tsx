"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "@/app/home.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>
              Get in <span className={styles.gradientText}>Touch</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6, maxWidth: '500px' }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#444' }}>
                <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '10px' }}><Mail size={20} /></div>
                <span>support@quickdoot.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#444' }}>
                <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '10px' }}><Phone size={20} /></div>
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#444' }}>
                <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '10px' }}><MapPin size={20} /></div>
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ 
              background: '#fff', 
              padding: '2.5rem', 
              borderRadius: '24px', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              border: '1px solid #eee'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>Name</label>
                  <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>Email</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>Message</label>
                  <textarea rows={4} placeholder="How can we help?" style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'none' }}></textarea>
                </div>

                <button type="submit" className={styles.primaryBtn} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
