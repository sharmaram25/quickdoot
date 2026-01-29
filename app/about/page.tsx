"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import Navbar from "../navbar/page";
import styles from "@/app/home.module.css";

export default function AboutPage() {
  const team = [
    {
      name: "Clement Samuel",
      role: "Founder",
      bio: "Visionary leader with 10+ years in logistics and tech startups. Passionate about community-driven solutions.",
      img: "https://placehold.co/300x300/ccc/888?text=Clement",
    },
    // 8 Android Developers
    ...Array.from({ length: 8 }, (_, i) => ({
      name: `Member ${i + 1}`,
      role: "Android Developer",
      bio: "Skilled in building and maintaining high-performance mobile apps for peer-to-peer delivery.",
      img: `https://placehold.co/300x300/ccc/888?text=Member+${i + 1}`,
    })),
  ];

  const values = [
    { title: "Innovation", desc: "We constantly challenge the norm to improve delivery for everyone." },
    { title: "Trust", desc: "Every user is verified, and payments are secured via escrow." },
    { title: "Community", desc: "Our network thrives on collaboration and peer reviews." },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1>About QuickDoot</h1>
              <p>
                QuickDoot connects people worldwide through a decentralized peer-to-peer delivery network.
                Our mission is to make sending anything as easy as sending a message, while empowering communities globally.
              </p>
              <button className={styles.primaryBtn}>
                Get the App <Smartphone size={20} />
              </button>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.phoneFrame}>
                <div
                  className={styles.screenContent}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", color: "#aaa" }}
                >
                  App Mockup
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission with Group Photo */}
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ flex: 1, minWidth: "300px" }}
            >
              <h2 className={styles.largeHeading}>Our Vision</h2>
              <p>
                To revolutionize the delivery industry by empowering individuals to become part of a global logistics network.
                We envision a world where sending a package is as effortless as sending a text.
              </p>

              <h2 className={styles.largeHeading} style={{ marginTop: "3rem" }}>Our Mission</h2>
              <p>
                QuickDoot’s mission is to provide a secure, fast, and trusted delivery solution by connecting travelers and senders seamlessly across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ flex: 1, minWidth: "300px" }}
            >
              <img
                src="/photo.jpg.jpeg"
                alt="Team Group"
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseContainer}>
            <div className={styles.showcaseHeader}>
              <h2 className={styles.largeHeading}>Our Core Values</h2>
            </div>
            <div className={styles.featuresGrid}>
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    background: "#0ea5e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1.2rem"
                  }}>
                    {val.title.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>{val.title}</h3>
                  <p style={{ color: "#666", fontSize: "1rem" }}>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.showcaseSection} style={{ background: "#f9f9f9" }}>
          <div className={styles.showcaseContainer}>
            <div className={styles.showcaseHeader}>
              <h2 className={styles.largeHeading}>Meet the Team</h2>
            </div>
            <div className={styles.featuresGrid}>
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", borderRadius: "20px", marginBottom: "1rem" }}
                  />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>{member.name}</h3>
                  <h4 style={{
                    color: "#0ea5e9",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "1rem"
                  }}>{member.role}</h4>
                  <p style={{ fontSize: "1rem", color: "#666" }}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.downloadSection}>
          <div className={styles.downloadContent}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            ><h2 className={styles.largeHeading} style={{ color: "#ffffff" }}>
  Ready to start <span className={styles.gradientText}>Dooting?</span>
</h2>

<p style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "2rem" }}>
  Download QuickDoot on iOS or Android and join the decentralized delivery revolution.
</p>

<button
  className={styles.primaryBtn}
  style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
>
  Get the App <Smartphone size={20} />
</button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
