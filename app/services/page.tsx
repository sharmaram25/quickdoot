"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  FileText,
  Zap,
  ShoppingBag,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Star
} from "lucide-react";
import styles from "@/app/home.module.css"; // Reusing homepage design system

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      {/* HERO */}
      <section className={styles.heroSection} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '6px 12px', 
              background: '#f3f4f6', 
              borderRadius: '20px', 
              fontSize: '0.8rem', 
              fontWeight: '700', 
              color: '#4f46e5',
              marginBottom: '1.5rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Services
            </span>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              <span className={styles.gradientText}>Flexible delivery</span> <br />
              for every kind of <br />
              package.
            </h1>
            <p style={{ fontSize: '1.3rem', color: '#666', maxWidth: '500px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              From urgent documents to parcels, QuickDoot connects you with
              trusted travelers already heading your way.
            </p>

            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Send a Package <ArrowRight size={20} />
              </button>
              <button className={styles.secondaryBtn} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Become a Carrier
              </button>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={16} color="#4f46e5" /> Insured up to ₹15k</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} color="#4f46e5" /> Same-day delivery</div>
            </div>

          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '500px', 
              height: '600px', 
              background: 'linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)',
              borderRadius: '30px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
               {/* Decorative Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 style={{ background: '#fff', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                       <div style={{ padding: '10px', background: '#f0fdf4', borderRadius: '12px', color: '#15803d' }}> <Package size={24} /> </div>
                       <div>
                         <div style={{ fontWeight: '700' }}>Electronics</div>
                         <div style={{ fontSize: '0.8rem', color: '#888' }}>Documents & Gadgets</div>
                       </div>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>₹1,500</span>
                  </div>
                  <div style={{ height: '4px', width: '100%', background: '#f0f0f0', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '70%', background: '#10b981' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '0.5rem', color: '#666' }}>
                    <span>On the way</span>
                    <span>Arriving 2:40 PM</span>
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 style={{ background: '#fff', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                       <div style={{ padding: '10px', background: '#eff6ff', borderRadius: '12px', color: '#1d4ed8' }}> <ShoppingBag size={24} /> </div>
                       <div>
                         <div style={{ fontWeight: '700' }}>Shopping</div>
                         <div style={{ fontSize: '0.8rem', color: '#888' }}>Retail & Gifts</div>
                       </div>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>₹450</span>
                  </div>
                  <div style={{ display: 'flex', gap: '-0.5rem' }}>
                     {[1,2,3].map(i => <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', background: '#ddd', border: '2px solid #fff', marginLeft: i>1?'-8px':0 }}></div>)}
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 style={{ background: '#fff', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                       <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '12px', color: '#c2410c' }}> <FileText size={24} /> </div>
                       <div>
                         <div style={{ fontWeight: '700' }}>Legal Docs</div>
                         <div style={{ fontSize: '0.8rem', color: '#888' }}>Urgent Contracts</div>
                       </div>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>₹2,500</span>
                  </div>
                  <button style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ddd', background: 'transparent', fontWeight: '600', fontSize: '0.8rem' }}>Track Item</button>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE TYPES */}

      {/* TRUST & SAFETY */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsContainer}>
          <StepRow
            number="01"
            title="Escrow Protected Payments"
            description="Your payment is held securely and only released once delivery is confirmed. No scams. No surprises."
            imagePlaceholder="Secure Payment"
          />
          <StepRow
            number="02"
            title="Real-Time Tracking"
            description="Follow your package live as your carrier travels. Stay updated every step of the journey."
            imagePlaceholder="Live Tracking"
            reversed
          />
          <StepRow
            number="03"
            title="Verified Community"
            description="Every Dooter is identity-verified and reviewed by the community for safety and trust."
            imagePlaceholder="Verified Users"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.downloadSection}>
        <div className={styles.downloadContent}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.largeHeading} style={{ color: "#fff" }}>
              Ready to ship <span className={styles.gradientText}>smarter?</span>
            </h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 2.5rem auto", fontSize: "1.2rem", color: "#aaa" }}>
              Join thousands using QuickDoot to move items faster, cheaper, and more human.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className={styles.primaryBtn}>Send a Package</button>
              <button className={styles.secondaryBtn}>Start Earning as a Carrier</button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

/* --- Components --- */

function ServiceCard({
  icon,
  title,
  description,
  price,
  highlight = false
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={styles.featureCard}
      style={{
        border: highlight ? "2px solid #000" : "1px solid #eee",
        transform: highlight ? "scale(1.05)" : "scale(1)"
      }}
    >
      <div>
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "#000",
            borderRadius: "15px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem"
          }}
        >
          {icon}
        </div>
        <h3 style={{ fontSize: "1.8rem", fontWeight: 700 }}>{title}</h3>
        <p style={{ color: "#666", margin: "1rem 0" }}>{description}</p>
        <div style={{ fontSize: "2rem", fontWeight: 800 }}>{price}</div>
      </div>

      <div style={{ marginTop: "2rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
        Select Plan <ArrowRight size={16} />
      </div>
    </div>
  );
}

function StepRow({
  number,
  title,
  description,
  imagePlaceholder,
  reversed = false
}: {
  number: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  reversed?: boolean;
}) {
  return (
    <motion.div
      className={`${styles.stepRow} ${reversed ? styles.reversed : ""}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.stepText}>
        <span className={styles.stepNumber}>{number}</span>
        <h3 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "1rem 0" }}>{title}</h3>
        <p style={{ fontSize: "1.2rem", color: "#666", lineHeight: 1.6 }}>{description}</p>
      </div>

      <div className={styles.stepVisual}>
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "350px",
            background: "#f3f4f6",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#aaa"
          }}
        >
          {imagePlaceholder}
        </div>
      </div>
    </motion.div>
  );
}
