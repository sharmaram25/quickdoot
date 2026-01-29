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
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Flexible delivery <br />
              for every kind of <br />
              package.
            </h1>
            <p>
              From urgent documents to parcels, QuickDoot connects you with
              trusted travelers already heading your way.
            </p>

            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>
                Send a Package <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryBtn}>
                Become a Carrier
              </button>
            </div>

          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.phoneFrame}>
              <div className={styles.screenContent} style={{ padding: "2rem" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Active Delivery</h3>
                <div style={{ background: "#f3f4f6", borderRadius: "20px", padding: "1.5rem" }}>
                  <Package size={28} />
                  <p style={{ marginTop: "1rem", fontWeight: 600 }}>Raipur → Delhi</p>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>Arriving in 3h 12m</p>
                </div>
              </div>
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
