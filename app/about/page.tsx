"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

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

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', background: '#f8fafc' }}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px' }}
              >
                Building the <motion.span 
                  className={styles.gradientText}
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >future</motion.span> of <br/> decentralized logistics.
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: '1.25rem', color: '#666', lineHeight: 1.6, maxWidth: '600px', marginBottom: '2rem' }}
              >
                QuickDoot isn't just an app; it's a movement. We connect people worldwide through a trust-based peer-to-peer delivery network, empowering communities one package at a time.
              </motion.p>
              <motion.button 
                className={styles.primaryBtn} 
                style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Get the App <Smartphone size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
               {/* 3D-like Composition */}
               <div style={{ position: 'relative', width: '400px', height: '400px' }}>
                  <motion.div 
                    initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 5, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    style={{ 
                      position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', 
                      background: 'url(https://placehold.co/600x600/10b981/fff?text=Community)', backgroundSize: 'cover', borderRadius: '40px',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.1)', zIndex: 1
                    }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: -10, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ rotate: -5, scale: 1.05 }}
                    style={{ 
                      position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', 
                      background: 'url(https://placehold.co/600x600/3b82f6/fff?text=Technology)', backgroundSize: 'cover', borderRadius: '40px',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.1)', zIndex: 2
                    }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    style={{ 
                      position: 'absolute', top: '40%', left: '40%', width: '120px', height: '120px', 
                      background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)', zIndex: 3
                    }}
                  >
                    <motion.div
                      animate={floatAnimation}
                    >
                      <Smartphone size={40} color="#000" />
                    </motion.div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission with Group Photo */}
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4rem" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: 1, minWidth: "300px" }}
            >
              <motion.h2 
                className={styles.largeHeading}
                variants={fadeInLeft}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Our Vision
              </motion.h2>
              <motion.p
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                To revolutionize the delivery industry by empowering individuals to become part of a global logistics network.
                We envision a world where sending a package is as effortless as sending a text.
              </motion.p>

              <motion.h2 
                className={styles.largeHeading} 
                style={{ marginTop: "3rem" }}
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={fadeInLeft}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                QuickDoot's mission is to provide a secure, fast, and trusted delivery solution by connecting travelers and senders seamlessly across the globe.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1, minWidth: "300px" }}
            >
              <motion.img
                src="/photo.jpg.jpeg"
                alt="Team Group"
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                whileHover={{ scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseContainer}>
            <motion.div 
              className={styles.showcaseHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className={styles.largeHeading}>Our Core Values</h2>
            </motion.div>
            <motion.div 
              className={styles.featuresGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  className={styles.featureCard}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -15, 
                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    style={{
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
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {val.title.charAt(0)}
                  </motion.div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>{val.title}</h3>
                  <p style={{ color: "#666", fontSize: "1rem" }}>{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.showcaseSection} style={{ background: "#f9f9f9" }}>
          <div className={styles.showcaseContainer}>
            <motion.div 
              className={styles.showcaseHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className={styles.largeHeading}>Meet the Team</h2>
            </motion.div>
            <motion.div 
              className={styles.featuresGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  className={styles.featureCard}
                  variants={scaleIn}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    style={{ overflow: "hidden", borderRadius: "20px", marginBottom: "1rem" }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      style={{ width: "100%", borderRadius: "20px", display: "block" }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <motion.h3 
                    style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.h4 
                    style={{
                      color: "#0ea5e9",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "1rem"
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.role}
                  </motion.h4>
                  <p style={{ fontSize: "1rem", color: "#666" }}>{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className={styles.downloadSection}>
          <div className={styles.downloadContent}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className={styles.largeHeading} 
                style={{ color: "#ffffff" }}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Ready to start <motion.span 
                  className={styles.gradientText}
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >Dooting?</motion.span>
              </motion.h2>

              <motion.p 
                style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "2rem" }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Download QuickDoot on iOS or Android and join the decentralized delivery revolution.
              </motion.p>

              <motion.button
                className={styles.primaryBtn}
                style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
              >
                Get the App <Smartphone size={20} />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
