"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import styles from "@/app/home.module.css";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "support@quickdoot.com", color: "#0ea5e9" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "#10b981" },
  { icon: MapPin, label: "Location", value: "Raipur, Chhattisgarh, India", color: "#f59e0b" },
  { icon: Clock, label: "Hours", value: "Mon-Fri, 9AM - 6PM IST", color: "#8b5cf6" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <main className={styles.main}>
      {/* Decorative Background Elements */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <motion.div
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
      </div>

      <section className={styles.heroSection} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className={styles.heroContent} style={{ gap: "3rem" }}>
          {/* Left Side - Contact Info */}
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <motion.span 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1))",
                  borderRadius: "100px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#059669",
                  marginBottom: "1.5rem"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle size={16} />
                We're here to help
              </motion.span>
            </motion.div>

            <motion.h1 
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.1 }}
            >
              Get in <motion.span 
                className={styles.gradientText}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >Touch</motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem' }}
            >
              Have questions about QuickDoot? We'd love to hear from you. Send us a message and our team will respond within 24 hours.
            </motion.p>
            
            {/* Contact Cards */}
            <motion.div 
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
              variants={staggerContainer}
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '1.25rem',
                    background: '#fff',
                    borderRadius: '20px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <motion.div 
                    style={{ 
                      padding: '12px', 
                      background: `${item.color}15`, 
                      borderRadius: '14px',
                      color: item.color
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon size={22} />
                  </motion.div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 600 }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className={styles.heroVisual}
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 'auto' }}
          >
            <motion.div 
              style={{ 
                background: '#fff', 
                padding: '3rem', 
                borderRadius: '32px', 
                boxShadow: '0 25px 80px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.02)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '480px'
              }}
              whileHover={{ boxShadow: '0 30px 100px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.4 }}
            >
              {/* Decorative gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #10b981, #0ea5e9, #8b5cf6)',
                borderRadius: '32px 32px 0 0'
              }} />

              <motion.h3 
                style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Send a Message
              </motion.h3>
              <motion.p 
                style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Fill out the form and we'll get back to you shortly.
              </motion.p>

              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.6rem', color: '#374151' }}>
                    Full Name
                  </label>
                  <motion.div
                    animate={{ 
                      borderColor: focusedField === 'name' ? '#10b981' : '#e5e7eb',
                      boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(16, 185, 129, 0.1)' : 'none'
                    }}
                    style={{ 
                      borderRadius: '14px', 
                      border: '2px solid #e5e7eb',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      style={{ 
                        width: '100%', 
                        padding: '1rem 1.25rem', 
                        borderRadius: '12px', 
                        border: 'none', 
                        fontSize: '1rem', 
                        outline: 'none',
                        background: 'transparent'
                      }} 
                    />
                  </motion.div>
                </motion.div>
                
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.6rem', color: '#374151' }}>
                    Email Address
                  </label>
                  <motion.div
                    animate={{ 
                      borderColor: focusedField === 'email' ? '#0ea5e9' : '#e5e7eb',
                      boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(14, 165, 233, 0.1)' : 'none'
                    }}
                    style={{ 
                      borderRadius: '14px', 
                      border: '2px solid #e5e7eb',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      style={{ 
                        width: '100%', 
                        padding: '1rem 1.25rem', 
                        borderRadius: '12px', 
                        border: 'none', 
                        fontSize: '1rem', 
                        outline: 'none',
                        background: 'transparent'
                      }} 
                    />
                  </motion.div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.6rem', color: '#374151' }}>
                    Your Message
                  </label>
                  <motion.div
                    animate={{ 
                      borderColor: focusedField === 'message' ? '#8b5cf6' : '#e5e7eb',
                      boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(139, 92, 246, 0.1)' : 'none'
                    }}
                    style={{ 
                      borderRadius: '14px', 
                      border: '2px solid #e5e7eb',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <textarea 
                      rows={4} 
                      placeholder="How can we help you today?" 
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      style={{ 
                        width: '100%', 
                        padding: '1rem 1.25rem', 
                        borderRadius: '12px', 
                        border: 'none', 
                        fontSize: '1rem', 
                        outline: 'none', 
                        resize: 'none',
                        background: 'transparent',
                        fontFamily: 'inherit'
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button 
                  type="submit" 
                  className={styles.primaryBtn} 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '1.1rem 2rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Send size={18} />
                  </motion.div>
                </motion.button>
              </form>

              {/* Trust indicators */}
              <motion.div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '1.5rem',
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #f1f5f9'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>Fast Response</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
